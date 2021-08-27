import fetch from "node-fetch";
import { v4 as uuidv4 } from "uuid";
import * as winston from "winston";

interface IPrincipal {
  id: string;
  policyVersion?: any;
  roles: string[];
  attr?: {
    [key: string]: any;
  };
}

interface IAuthorize {
  actions: string[];
  resource: {
    policyVersion?: any;
    kind: string;
    instances: {
      [resourceKey: string]: {
        attr?: {
          [key: string]: any;
        };
      };
    };
  };
  principal: IPrincipal;
}

interface IAuthorizeResponse {
  requestID: string;
  resourceInstances: {
    [resourceKey: string]: {
      actions: {
        [key: string]: AuthorizeEffect;
      };
    };
  };
}

export interface ICerbosBatchAuthorizeResource {
  actions: string[];
  resource: {
    policyVersion?: any;
    kind: string;
    id: string;
    attr: {
      [key: string]: any;
    };
  };
}

export interface ICerbosBatchAuthorizeResult {
  [key: string]: AuthorizeEffect;
}

interface IBatchAuthorize {
  principal: IPrincipal;
  resources: ICerbosBatchAuthorizeResource[];
}

interface IAuthorizeBatchResponse {
  requestID: string;
  results: {
    resourceId: string;
    actions: ICerbosBatchAuthorizeResult;
  }[];
}

export enum AuthorizeEffect {
  ALLOW = "EFFECT_ALLOW",
  DENY = "EFFECT_DENY",
}

interface ICerbosBatchResponse {
  resourceId: string;
  actions: {
    [action: string]: AuthorizeEffect;
  };
}

export class AuthorizationError extends Error {}

export interface ICerbosResponse {
  isAuthorized: (resourceKey: string, action: string) => boolean;
}

class CerbosResponseWrapper implements ICerbosResponse {
  readonly resp: IAuthorizeResponse;

  constructor(resp: IAuthorizeResponse) {
    this.resp = resp;
  }

  isAuthorized(resourceKey: string, action: string): boolean {
    try {
      const allowed =
        this.resp.resourceInstances[resourceKey]?.actions[action] ==
        AuthorizeEffect.ALLOW;
      return allowed ?? false;
    } catch (e) {
      return false;
    }
  }
}

interface CerbosOptions {
  hostname: string;
  logLevel?: "fatal" | "error" | "warn" | "info" | "debug";
  timeout?: number;
  playgroundInstance?: string;
}

export class Cerbos {
  private host: string;
  private log: winston.Logger;
  private timeout: number;
  private playgroundInstance?: string;

  constructor({
    hostname,
    logLevel,
    timeout = 0,
    playgroundInstance,
  }: CerbosOptions) {
    this.host = hostname;
    this.timeout = timeout;
    this.playgroundInstance = playgroundInstance;
    this.log = winston.createLogger({
      level: logLevel,
      silent: !logLevel,
      transports: [
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
      ],
    });
  }

  async check(data: IAuthorize): Promise<ICerbosResponse> {
    this.log.info("Cerbos.check", data);
    const payload = {
      requestId: uuidv4(),
      ...data,
      resource: {
        policyVersion: data.resource.policyVersion || "default",
        ...data.resource,
      },
      principal: {
        policyVersion: data.principal.policyVersion || "default",
        ...data.principal,
      },
    };
    this.log.debug("Cerbos.check Payload", payload);

    // eslint-disable-next-line prefer-const
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let headers: any = {
      "Content-Type": "application/json",
    };

    if (this.playgroundInstance) {
      headers = {
        ...headers,
        "Playground-Instance": this.playgroundInstance,
      };
    }

    try {
      const response = await fetch(`${this.host}/api/check`, {
        method: "post",
        body: JSON.stringify(payload),
        headers,
        timeout: this.timeout,
      });
      const data = await response.json();
      this.log.info("Cerbos.check: Response", data);
      return new CerbosResponseWrapper(data);
    } catch (e) {
      this.log.error("Cerbos.check Error", e);
      throw new AuthorizationError(
        `Could not connect to Cerbos PDP at ${this.host}`
      );
    }
  }

  // async authorizeBatch(data: IBatchAuthorize): Promise<ICerbosBatchResponse[]> {
  //   const payload = {
  //     requestId: uuidv4(),
  //     principal: {
  //       policyVersion: data.principal.policyVersion || "default",
  //       ...data.principal,
  //     },
  //     resources: data.resources.map((r) => {
  //       return {
  //         actions: r.actions,
  //         resource: {
  //           policyVersion: r.resource.policyVersion || "default",
  //           ...r.resource,
  //         },
  //       };
  //     }),
  //   };

  //   try {
  //     const response = await axios.post<IAuthorizeBatchResponse>(
  //       `${this.host}/api/x/check_resource_batch`,
  //       payload
  //     );

  //     return response.data.results;
  //   } catch (e) {
  //     throw new AuthorizationError("Error authorizing");
  //   }
  // }
}
