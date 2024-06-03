import type { ReadableStream } from "stream/web";

import { stringify as queryStringify } from "qs";

import type {
  _AbortHandler,
  _Method,
  _MethodKind,
  _Request,
  _Response,
  _Service,
  _Transport,
} from "@cerbos/core";
import { NotOK, Status, _isObject } from "@cerbos/core";

import {
  AddOrUpdatePolicyRequest,
  AddOrUpdateSchemaRequest,
  CheckResourcesRequest,
  DeleteSchemaRequest,
  DisablePolicyRequest,
  EnablePolicyRequest,
  GetPolicyRequest,
  GetSchemaRequest,
  ListAuditLogEntriesRequest,
  ListAuditLogEntriesRequest_Kind,
  ListPoliciesRequest,
  ListSchemasRequest,
  PlanResourcesRequest,
  ReloadStoreRequest,
  ServerInfoRequest,
} from "./protobuf/cerbos/request/v1/request";
import {
  AddOrUpdatePolicyResponse,
  AddOrUpdateSchemaResponse,
  CheckResourcesResponse,
  DeleteSchemaResponse,
  DisablePolicyResponse,
  EnablePolicyResponse,
  GetPolicyResponse,
  GetSchemaResponse,
  ListAuditLogEntriesResponse,
  ListPoliciesResponse,
  ListSchemasResponse,
  PlanResourcesResponse,
  ReloadStoreResponse,
  ServerInfoResponse,
} from "./protobuf/cerbos/response/v1/response";

interface Endpoint<
  Service extends _Service,
  MethodKind extends _MethodKind,
  Method extends _Method<Service, MethodKind>,
> {
  method: "GET" | "POST" | "DELETE";
  path: string;
  requestType: RequestType<Service, MethodKind, Method>;
  responseType: ResponseType<Service, MethodKind, Method>;
  serializeRequest: SerializeRequest<Service, MethodKind, Method>;
}

interface RequestType<
  Service extends _Service,
  MethodKind extends _MethodKind,
  Method extends _Method<Service, MethodKind>,
> {
  toJSON: (request: _Request<Service, MethodKind, Method>) => unknown;
}

interface ResponseType<
  Service extends _Service,
  MethodKind extends _MethodKind,
  Method extends _Method<Service, MethodKind>,
> {
  fromJSON: (response: unknown) => _Response<Service, MethodKind, Method>;
}

type SerializeRequest<
  Service extends _Service,
  MethodKind extends _MethodKind,
  Method extends _Method<Service, MethodKind>,
> = (
  request: _Request<Service, MethodKind, Method>,
  requestType: RequestType<Service, MethodKind, Method>,
  init: RequestInitWithURL,
) => RequestInitWithURL;

interface RequestInitWithURL extends RequestInit {
  url: string;
}

type Services = {
  [Service in _Service]: {
    [MethodKind in _MethodKind]: {
      [Method in _Method<Service, MethodKind>]: Endpoint<
        Service,
        MethodKind,
        Method
      >;
    };
  }[_MethodKind];
};

const services: Services = {
  admin: {
    addOrUpdatePolicy: {
      method: "POST",
      path: "/admin/policy",
      requestType: AddOrUpdatePolicyRequest,
      responseType: AddOrUpdatePolicyResponse,
      serializeRequest: serializeRequestToBody,
    },
    addOrUpdateSchema: {
      method: "POST",
      path: "/admin/schema",
      requestType: AddOrUpdateSchemaRequest,
      responseType: AddOrUpdateSchemaResponse,
      serializeRequest: serializeRequestToBody,
    },
    deleteSchema: {
      method: "DELETE",
      path: "/admin/schema",
      requestType: DeleteSchemaRequest,
      responseType: DeleteSchemaResponse,
      serializeRequest: serializeRequestToQueryString,
    },
    disablePolicy: {
      method: "DELETE",
      path: "/admin/policy",
      requestType: DisablePolicyRequest,
      responseType: DisablePolicyResponse,
      serializeRequest: serializeRequestToQueryString,
    },
    enablePolicy: {
      method: "POST",
      path: "/admin/policy/enable",
      requestType: EnablePolicyRequest,
      responseType: EnablePolicyResponse,
      serializeRequest: serializeRequestToQueryString,
    },
    getPolicy: {
      method: "GET",
      path: "/admin/policy",
      requestType: GetPolicyRequest,
      responseType: GetPolicyResponse,
      serializeRequest: serializeRequestToQueryString,
    },
    getSchema: {
      method: "GET",
      path: "/admin/schema",
      requestType: GetSchemaRequest,
      responseType: GetSchemaResponse,
      serializeRequest: serializeRequestToQueryString,
    },
    listAuditLogEntries: {
      method: "GET",
      path: "/admin/auditlog/list/",
      requestType: ListAuditLogEntriesRequest,
      responseType: ListAuditLogEntriesResponse,
      serializeRequest: serializeListAuditLogEntriesRequest,
    },
    listPolicies: {
      method: "GET",
      path: "/admin/policies",
      requestType: ListPoliciesRequest,
      responseType: ListPoliciesResponse,
      serializeRequest: serializeRequestToQueryString,
    },
    listSchemas: {
      method: "GET",
      path: "/admin/schemas",
      requestType: ListSchemasRequest,
      responseType: ListSchemasResponse,
      serializeRequest: serializeRequestToQueryString,
    },
    reloadStore: {
      method: "GET",
      path: "/admin/store/reload",
      requestType: ReloadStoreRequest,
      responseType: ReloadStoreResponse,
      serializeRequest: serializeRequestToQueryString,
    },
  },
  cerbos: {
    checkResources: {
      method: "POST",
      path: "/api/check/resources",
      requestType: CheckResourcesRequest,
      responseType: CheckResourcesResponse,
      serializeRequest: serializeRequestToBody,
    },
    planResources: {
      method: "POST",
      path: "/api/plan/resources",
      requestType: PlanResourcesRequest,
      responseType: PlanResourcesResponse,
      serializeRequest: serializeRequestToBody,
    },
    serverInfo: {
      method: "GET",
      path: "/api/server_info",
      requestType: ServerInfoRequest,
      responseType: ServerInfoResponse,
      serializeRequest: serializeRequestToQueryString,
    },
  },
};

export class Transport implements _Transport {
  public constructor(
    private readonly baseUrl: string,
    private readonly userAgent: string,
  ) {}

  public async unary<
    Service extends _Service,
    Method extends _Method<Service, "unary">,
  >(
    service: Service,
    method: Method,
    request: _Request<Service, "unary", Method>,
    headers: Headers,
    abortHandler: _AbortHandler,
  ): Promise<_Response<Service, "unary", Method>> {
    const { response, responseType } = await this.fetch(
      service,
      method,
      request,
      headers,
      abortHandler,
    );

    if (!response.ok) {
      throw NotOK.fromJSON(await response.text());
    }

    return responseType.fromJSON(await response.json());
  }

  public async *serverStream<
    Service extends _Service,
    Method extends _Method<Service, "serverStream">,
  >(
    service: Service,
    method: Method,
    request: _Request<Service, "serverStream", Method>,
    headers: Headers,
    abortHandler: _AbortHandler,
  ): AsyncGenerator<
    _Response<Service, "serverStream", Method>,
    void,
    undefined
  > {
    const { response, responseType } = await this.fetch(
      service,
      method,
      request,
      headers,
      abortHandler,
    );

    try {
      const lines = response.body
        ? eachLine(response.body as ReadableStream<Uint8Array>)
        : [];

      for await (const line of lines) {
        const message = JSON.parse(line) as unknown;

        if (!_isObject(message)) {
          throw new Error(`Unexpected message: wanted object, got ${line}`);
        }

        const { result, error } = message;

        if (error) {
          throw NotOK.fromJSON(JSON.stringify(error));
        }

        if (!result) {
          throw new Error(`Missing result in ${line}`);
        }

        yield responseType.fromJSON(result);
      }
    } catch (error) {
      response.body?.cancel().catch(() => {
        // ignore failure to cancel
      });

      abortHandler.throwIfAborted();

      if (error instanceof NotOK) {
        throw error;
      }

      throw new NotOK(
        Status.INTERNAL,
        error instanceof Error
          ? `Invalid stream: ${error.message}`
          : "Invalid stream",
        { cause: error },
      );
    }
  }

  private async fetch<
    Service extends _Service,
    MethodKind extends _MethodKind,
    Method extends _Method<Service, MethodKind>,
  >(
    service: Service,
    method: Method,
    request: _Request<Service, MethodKind, Method>,
    headers: Headers,
    abortHandler: _AbortHandler,
  ): Promise<{
    response: Response;
    responseType: ResponseType<Service, MethodKind, Method>;
  }> {
    const {
      method: requestMethod,
      path,
      requestType,
      responseType,
      serializeRequest,
    } = services[service][method] as Endpoint<Service, MethodKind, Method>; // https://github.com/microsoft/TypeScript/issues/30581

    headers.set("User-Agent", this.userAgent);

    const init: RequestInitWithURL = {
      url: this.baseUrl + path,
      method: requestMethod,
      headers,
    };

    if (abortHandler.signal) {
      init.signal = abortHandler.signal;
    }

    const { url, ...rest } = serializeRequest(request, requestType, init);

    try {
      return {
        response: await fetch(url, rest),
        responseType,
      };
    } catch (error) {
      abortHandler.throwIfAborted();

      throw new NotOK(
        Status.UNKNOWN,
        error instanceof Error
          ? `Request failed: ${error.message}`
          : "Request failed",
        { cause: error },
      );
    }
  }
}

function serializeRequestToBody<
  Service extends _Service,
  MethodKind extends _MethodKind,
  Method extends _Method<Service, MethodKind>,
>(
  request: _Request<Service, MethodKind, Method>,
  requestType: RequestType<Service, MethodKind, Method>,
  init: RequestInitWithURL,
): RequestInitWithURL {
  return {
    ...init,
    body: JSON.stringify(requestType.toJSON(request)),
  };
}

function serializeRequestToQueryString<
  Service extends _Service,
  MethodKind extends _MethodKind,
  Method extends _Method<Service, MethodKind>,
>(
  request: _Request<Service, MethodKind, Method>,
  requestType: RequestType<Service, MethodKind, Method>,
  { url, ...init }: RequestInitWithURL,
): RequestInitWithURL {
  return {
    ...init,
    url: `${url}?${queryStringifyRequest(requestType, request)}`,
  };
}

function serializeListAuditLogEntriesRequest(
  { kind, ...rest }: _Request<"admin", "serverStream", "listAuditLogEntries">,
  requestType: RequestType<"admin", "serverStream", "listAuditLogEntries">,
  { url, ...init }: RequestInitWithURL,
): RequestInitWithURL {
  return {
    ...init,
    url: `${url}${ListAuditLogEntriesRequest_Kind[kind]}?${queryStringifyRequest(requestType, { kind: 0, ...rest })}`,
  };
}

function queryStringifyRequest<
  Service extends _Service,
  MethodKind extends _MethodKind,
  Method extends _Method<Service, MethodKind>,
>(
  requestType: RequestType<Service, MethodKind, Method>,
  request: _Request<Service, MethodKind, Method>,
): string {
  return queryStringify(requestType.toJSON(request), {
    allowDots: true,
    arrayFormat: "repeat",
  });
}

export async function* eachLine(
  stream: ReadableStream<Uint8Array>,
): AsyncGenerator<string, void, undefined> {
  const utf8Decoder = new TextDecoder("utf-8", { fatal: true });

  let buffer = "";
  let start = 0;

  for await (const chunk of stream) {
    buffer += utf8Decoder.decode(chunk, { stream: true });

    let end: number;
    while ((end = buffer.indexOf("\n", start)) >= 0) {
      yield buffer.slice(start, end);
      start = end + 1;
    }

    buffer = buffer.slice(start);
    start = 0;
  }

  if (buffer.length > 0) {
    yield buffer;
  }
}
