import type { BundleValid } from "@cerbos/api/cerbos/cloud/epdp/v2/epdp_pb";
import { BundleService } from "@cerbos/api/cerbos/cloud/epdp/v2/epdp_pb";
import { NotOK, Status } from "@cerbos/core";
import type { Server } from "@cerbos/embedded-server";
import type { Client as HubClient } from "@cerbos/hub/~internal";
import { createClient as createHubClient } from "@cerbos/hub/~internal";

import { createUserAgent } from "./fetch";
import { defaultInterval, minimumInterval } from "./interval";
import type { PolicyLoaderOptions } from "./options";

/**
 * Loader to fetch policy bundles from Cerbos Hub.
 *
 * @public
 */
export class PolicyLoader {
  /**
   * ID of the policy bundling rule.
   */
  public readonly ruleId: string;

  /**
   * Scopes to include in the policy bundle.
   */
  public readonly scopes: string[];

  private readonly activateOnLoad: boolean;
  private readonly interval?: number;
  private readonly onUpdate?: PolicyLoaderOptions["onUpdate"];
  private readonly servers: Server[] = [];
  private readonly client: HubClient<typeof BundleService>;
  private readonly abortController = new AbortController();
  private activations = 0;
  private initialLoad?: Promise<void>;
  private activeBundle?: BundleValid;
  private pendingBundle?: BundleValid;
  private timeout?: NodeJS.Timeout;

  /**
   * Load policy bundles from {@link https://www.cerbos.dev/product-cerbos-hub | Cerbos Hub}.
   *
   * @example
   * Unauthenticated access:
   *
   * ```typescript
   * const loader = new PolicyLoader({ ruleId: "B5LU9EVYN1MD" });
   * ```
   *
   * @example
   * Authenticate with a client credential:
   *
   * ```typescript
   * import { credentialsFromEnv } from "@cerbos/hub";
   *
   * const loader = new PolicyLoader({
   *   ruleId: "B5LU9EVYN1MD",
   *   credentials: credentialsFromEnv(),
   * });
   * ```
   *
   * @example
   * Handle policy update errors:
   *
   * ```typescript
   * const loader = new PolicyLoader({
   *   ruleId: "B5LU9EVYN1MD",
   *   onUpdate: (error) => {
   *     if (error) {
   *       console.error("Cerbos policy update failed:", error);
   *     } else {
   *       console.info("Cerbos policies updated successfully");
   *     }
   *   },
   * });
   * ```
   */
  public constructor({
    ruleId,
    scopes = [],
    activateOnLoad = true,
    interval = defaultInterval,
    onUpdate,
    userAgent,
    ...options
  }: PolicyLoaderOptions) {
    this.ruleId = ruleId;
    this.scopes = scopes;
    this.activateOnLoad = activateOnLoad;
    this.onUpdate = onUpdate;
    this.interval =
      interval > 0 ? Math.max(minimumInterval, interval) * 1000 : undefined;

    this.client = createHubClient(BundleService, {
      userAgent: createUserAgent(userAgent),
      ...options,
    });
  }

  /** @internal */
  public async ["~start"](server: Server): Promise<void> {
    this.servers.push(server);

    this.initialLoad ??= this.loadAndScheduleUpdate();
    await this.initialLoad;

    if (!this.activeBundle) {
      if (!this.pendingBundle) {
        throw new NotOK(Status.INTERNAL, "Failed to load policy bundle");
      }

      this.activeBundle = this.pendingBundle;
      this.pendingBundle = undefined;
    }

    server.loadRuleTable(this.activeBundle.contents);
  }

  /**
   * Activate the pending policy bundle (if any).
   *
   * @remarks
   * This is called automatically when a policy bundle update is downloaded, unless {@link PolicyLoaderOptions.activateOnLoad} is `false`.
   */
  public activate(): void {
    if (this.pendingBundle) {
      this.activations++;
      this.activeBundle = this.pendingBundle;
      this.pendingBundle = undefined;

      for (const server of this.servers) {
        server.loadRuleTable(this.activeBundle.contents);
      }
    }
  }

  /**
   * Stop polling for policy bundle updates.
   */
  public stop(): void {
    this.abortController.abort();
    clearTimeout(this.timeout);
  }

  /** @internal */
  public get ["~updateSignal"](): unknown {
    return this.activations;
  }

  private async loadAndScheduleUpdate(): Promise<void> {
    await this.load();
    this.scheduleUpdate();
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
  }

  private scheduleUpdate(): void {
    if (this.timeout?.refresh) {
      this.timeout.refresh();
    } else if (this.interval) {
      this.timeout = setTimeout(() => {
        void this.update();
      }, this.interval);
    }
  }

  private async update(): Promise<void> {
    let error = undefined;
    try {
      await this.load();

      if (this.activateOnLoad) {
        this.activate();
      }
    } catch (caught) {
      error = caught;
    } finally {
      this.scheduleUpdate();
      await this.onUpdate?.(createNotOK(error));
    }
  }
}

function createNotOK(error: unknown): NotOK | undefined {
  if (error === undefined) {
    return undefined;
  }

  if (error instanceof NotOK) {
    return error;
  }

  return new NotOK(Status.UNKNOWN, "Failed to load policy bundle", {
    cause: error,
  });
}
