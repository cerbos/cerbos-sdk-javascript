import type { BundleValid } from "@cerbos/api/cerbos/cloud/epdp/v2/epdp_pb";
import { BundleService } from "@cerbos/api/cerbos/cloud/epdp/v2/epdp_pb";
import { NotOK, Status } from "@cerbos/core";
import type { Server } from "@cerbos/embedded-server";
import type { Client as HubClient } from "@cerbos/hub/~internal";
import { createClient as createHubClient } from "@cerbos/hub/~internal";

import { createUserAgent } from "./fetch";
import type { PolicyLoaderOptions } from "./options";

const minInterval = 10;

/**
 * Loader to fetch policy bundles from Cerbos Hub.
 *
 * @public
 */
export class PolicyLoader {
  private readonly ruleId: string;
  private readonly scopes: string[];
  private readonly activateOnLoad: boolean;
  private readonly interval?: number;
  private readonly onError?: PolicyLoaderOptions["onError"];
  private readonly servers: Server[] = [];
  private readonly client: HubClient<typeof BundleService>;
  private readonly abortController = new AbortController();
  private initialLoad?: Promise<void>;
  private activeBundle?: BundleValid;
  private pendingBundle?: BundleValid;
  private timeout?: NodeJS.Timeout;

  public constructor({
    ruleId,
    scopes = [],
    activateOnLoad = true,
    interval = 60,
    onError,
    userAgent,
    ...options
  }: PolicyLoaderOptions) {
    this.ruleId = ruleId;
    this.scopes = scopes;
    this.activateOnLoad = activateOnLoad;
    this.onError = onError;
    this.interval =
      interval > 0 ? Math.max(minInterval, interval) * 1000 : undefined;

    this.client = createHubClient(BundleService, {
      userAgent: createUserAgent(userAgent),
      ...options,
    });
  }

  /** @internal */
  public async ["~start"](server: Server): Promise<void> {
    this.servers.push(server);

    this.initialLoad ??= this.load();
    await this.initialLoad;

    if (this.activeBundle) {
      server.loadRuleTable(this.activeBundle.contents);
    } else {
      this.activate();
    }
  }

  public activate(): void {
    if (this.pendingBundle) {
      this.activeBundle = this.pendingBundle;
      this.pendingBundle = undefined;

      for (const server of this.servers) {
        server.loadRuleTable(this.activeBundle.contents);
      }
    }
  }

  public stop(): void {
    this.abortController.abort();
  }

  private async load(): Promise<void> {
    const { result } = await this.client.getBundle(
      {
        ruleId: this.ruleId,
        scopes: this.scopes,
        ifModifiedSince: (this.pendingBundle ?? this.activeBundle)?.metadata,
      },
      { signal: this.abortController.signal },
    );

    if (result.case === "bundle") {
      this.pendingBundle = result.value;
    }

    this.scheduleLoad();
  }

  private scheduleLoad(): void {
    if (this.timeout?.refresh) {
      this.timeout.refresh();
    } else if (this.interval) {
      this.timeout = setTimeout(() => {
        this.load()
          .then(() => {
            if (this.activateOnLoad) {
              this.activate();
            }
          })
          .catch(async (error: unknown) => {
            await this.onError?.(createNotOK(error));
          });
      }, this.interval);
    }
  }
}

function createNotOK(error: unknown): NotOK {
  if (error instanceof NotOK) {
    return error;
  }

  return new NotOK(Status.UNKNOWN, "Failed to load policy bundle", {
    cause: error,
  });
}
