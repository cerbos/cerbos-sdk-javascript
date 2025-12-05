import type {
  DescMessage,
  DescService,
  MessageShape,
  MessageValidType,
} from "@bufbuild/protobuf";
import { toJson, toJsonString } from "@bufbuild/protobuf";
import { stringify as queryStringify } from "qs";

import type { ListAuditLogEntriesRequestSchema } from "@cerbos/api/cerbos/request/v1/request_pb";
import {
  ListAuditLogEntriesRequest_Kind,
  ListAuditLogEntriesRequest_KindSchema,
} from "@cerbos/api/cerbos/request/v1/request_pb";
import {
  CerbosAdminService as admin,
  CerbosService as cerbos,
} from "@cerbos/api/cerbos/svc/v1/svc_pb";
import { Health as health } from "@cerbos/api/grpc/health/v1/health_pb";
import { methodName } from "@cerbos/core/~internal";

export interface RequestInitWithUrl extends RequestInit {
  url: string;
}

type HttpMethod = "GET" | "POST" | "DELETE";

type Serialize<I extends DescMessage = DescMessage> = (
  request: MessageValidType<I>,
  init: RequestInitWithUrl,
) => RequestInitWithUrl;

interface DescEndpoint<I extends DescMessage> {
  method: HttpMethod;
  path: string;
  serialize: (schema: I) => Serialize<I>;
}

type DescEndpoints<Service extends DescService> = {
  [Method in keyof Service["method"]]:
    | DescEndpoint<Service["method"][Method]["input"]>
    | undefined;
};

interface Endpoint {
  method: HttpMethod;
  path: string;
  serialize: Serialize;
}

export const endpoints = new Map<string, Endpoint>();

function defineEndpoints<Service extends DescService>(
  service: Service,
  descs: DescEndpoints<Service>,
): void {
  for (const method of service.methods) {
    const endpoint = descs[method.localName];
    if (endpoint) {
      endpoints.set(methodName(method), {
        method: endpoint.method,
        path: endpoint.path,
        serialize: endpoint.serialize(method.input),
      });
    }
  }
}

defineEndpoints(admin, {
  addOrUpdatePolicy: {
    method: "POST",
    path: "/admin/policy",
    serialize: serializeToBody,
  },
  addOrUpdateSchema: {
    method: "POST",
    path: "/admin/schema",
    serialize: serializeToBody,
  },
  deleteSchema: {
    method: "DELETE",
    path: "/admin/schema",
    serialize: serializeToQueryString,
  },
  disablePolicy: {
    method: "DELETE",
    path: "/admin/policy",
    serialize: serializeToQueryString,
  },
  enablePolicy: {
    method: "POST",
    path: "/admin/policy/enable",
    serialize: serializeToQueryString,
  },
  getPolicy: {
    method: "GET",
    path: "/admin/policy",
    serialize: serializeToQueryString,
  },
  getSchema: {
    method: "GET",
    path: "/admin/schema",
    serialize: serializeToQueryString,
  },
  inspectPolicies: {
    method: "GET",
    path: "/admin/policies/inspect",
    serialize: serializeToQueryString,
  },
  listAuditLogEntries: {
    method: "GET",
    path: "/admin/auditlog/list/",
    serialize: serializeListAuditLogEntriesRequest,
  },
  listPolicies: {
    method: "GET",
    path: "/admin/policies",
    serialize: serializeToQueryString,
  },
  listSchemas: {
    method: "GET",
    path: "/admin/schemas",
    serialize: serializeToQueryString,
  },
  reloadStore: {
    method: "GET",
    path: "/admin/store/reload",
    serialize: serializeToQueryString,
  },
});

defineEndpoints(cerbos, {
  checkResourceBatch: undefined,
  checkResourceSet: undefined,
  checkResources: {
    method: "POST",
    path: "/api/check/resources",
    serialize: serializeToBody,
  },
  planResources: {
    method: "POST",
    path: "/api/plan/resources",
    serialize: serializeToBody,
  },
  serverInfo: {
    method: "GET",
    path: "/api/server_info",
    serialize: serializeToQueryString,
  },
});

defineEndpoints(health, {
  check: {
    method: "GET",
    path: "/_cerbos/health",
    serialize: serializeToQueryString,
  },
  list: undefined,
  watch: undefined,
});

function serializeToBody<I extends DescMessage>(schema: I): Serialize<I> {
  return (request, init) => ({
    ...init,
    body: toJsonString(schema, request as MessageShape<I>),
  });
}

function serializeToQueryString<I extends DescMessage>(
  schema: I,
): Serialize<I> {
  return (request, { url, ...init }) => ({
    ...init,
    url: `${url}?${toQueryString(schema, request)}`,
  });
}

function serializeListAuditLogEntriesRequest(
  schema: typeof ListAuditLogEntriesRequestSchema,
): Serialize<typeof ListAuditLogEntriesRequestSchema> {
  return ({ kind, ...rest }, { url, ...init }) => {
    const path = ListAuditLogEntriesRequest_KindSchema.value[kind].name;

    const queryString = toQueryString(schema, {
      kind: ListAuditLogEntriesRequest_Kind.UNSPECIFIED,
      ...rest,
    });

    return {
      ...init,
      url: `${url}${path}?${queryString}`,
    };
  };
}

function toQueryString<I extends DescMessage>(
  schema: I,
  request: MessageValidType<I>,
): string {
  return queryStringify(toJson(schema, request as MessageShape<I>), {
    allowDots: true,
    arrayFormat: "repeat",
  });
}
