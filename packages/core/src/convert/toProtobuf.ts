import { v4 as uuidv4 } from "uuid";

import {
  PlanResourcesRequest_Resource,
  Principal as PrincipalProtobuf,
  Resource as ResourceProtobuf,
} from "../protobuf/cerbos/engine/v1/engine";
import {
  AuxData as AuxDataProtobuf,
  AuxData_JWT,
  CheckResourcesRequest as CheckResourcesRequestProtobuf,
  CheckResourcesRequest_ResourceEntry,
  PlanResourcesRequest as PlanResourcesRequestProtobuf,
} from "../protobuf/cerbos/request/v1/request";
import {
  AuxData,
  CheckResourcesRequest,
  JWT,
  PlanResourcesRequest,
  Principal,
  Resource,
  ResourceCheck,
  ResourceQuery,
} from "../types";

export const checkResourcesRequestToProtobuf = ({
  principal,
  resources,
  auxData,
  includeMetadata = false,
  requestId = uuidv4(),
}: CheckResourcesRequest): CheckResourcesRequestProtobuf => ({
  principal: principalToProtobuf(principal),
  resources: resources.map(resourceCheckToProtobuf),
  auxData: auxData && auxDataToProtobuf(auxData),
  includeMeta: includeMetadata,
  requestId,
});

const principalToProtobuf = ({
  id,
  roles,
  attributes = {},
  policyVersion = "",
  scope = "",
}: Principal): PrincipalProtobuf => ({
  id,
  roles,
  attr: attributes,
  policyVersion,
  scope,
});

const resourceCheckToProtobuf = ({
  resource,
  actions,
}: ResourceCheck): CheckResourcesRequest_ResourceEntry => ({
  resource: resourceToProtobuf(resource),
  actions,
});

const resourceToProtobuf = ({
  kind,
  id,
  attributes = {},
  policyVersion = "",
  scope = "",
}: Resource): ResourceProtobuf => ({
  kind,
  id,
  attr: attributes,
  policyVersion,
  scope,
});

const auxDataToProtobuf = ({ jwt }: AuxData): AuxDataProtobuf => ({
  jwt: jwt && jwtToProtobuf(jwt),
});

const jwtToProtobuf = ({ token, keySetId = "" }: JWT): AuxData_JWT => ({
  token,
  keySetId,
});

export const planResourcesRequestToProtobuf = ({
  principal,
  resource,
  action,
  auxData,
  includeMetadata = false,
  requestId = uuidv4(),
}: PlanResourcesRequest): PlanResourcesRequestProtobuf => ({
  principal: principalToProtobuf(principal),
  resource: resourceQueryToProtobuf(resource),
  action,
  auxData: auxData && auxDataToProtobuf(auxData),
  includeMeta: includeMetadata,
  requestId,
});

const resourceQueryToProtobuf = ({
  kind,
  attributes = {},
  policyVersion = "",
  scope = "",
}: ResourceQuery): PlanResourcesRequest_Resource => ({
  kind,
  attr: attributes,
  policyVersion,
  scope,
});
