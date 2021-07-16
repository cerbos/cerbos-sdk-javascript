interface IPrincipal {
    id: string;
    policyVersion?: any;
    roles: [string];
    attr: {
        [key: string]: any;
    };
}
interface IAuthorize {
    actions: [string];
    resource: {
        policyVersion?: any;
        kind: string;
        instances: {
            [resourceKey: string]: {
                attr: {
                    [key: string]: any;
                };
            };
        };
    };
    principal: IPrincipal;
}
export interface ICerbosBatchAuthorizeResource {
    actions: [string];
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
export declare enum AuthorizeEffect {
    ALLOW = "EFFECT_ALLOW",
    DENY = "EFFECT_DENY"
}
export declare class AuthorizationError extends Error {
    constructor(message: string);
}
export interface ICerbosResponse {
    isAuthorized: (resourceKey: string, action: string) => boolean;
}
export declare class Cerbos {
    private host;
    constructor({ hostname }: {
        hostname: string;
    });
    check(data: IAuthorize): Promise<ICerbosResponse>;
}
export {};
