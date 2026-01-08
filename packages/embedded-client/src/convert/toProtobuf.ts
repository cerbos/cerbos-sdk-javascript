import type { ConfigValid } from "@cerbos/api/cerbos/cloud/epdp/v2/epdp_pb";
import { Config_Schema_Enforcement } from "@cerbos/api/cerbos/cloud/epdp/v2/epdp_pb";
import type { AuxDataValid as EngineAuxData } from "@cerbos/api/cerbos/engine/v1/engine_pb";
import type { DecodedAuxData } from "@cerbos/core";
import { valuesToProtobuf } from "@cerbos/core/~internal";

import type { Options } from "../options.js";
import { SchemaEnforcement } from "../options.js";

export function configToProtobuf({
  defaultPolicyVersion = "",
  defaultScope = "",
  globals = {},
  lenientScopeSearch = false,
  schemaEnforcement,
}: Pick<
  Options,
  | "defaultPolicyVersion"
  | "defaultScope"
  | "globals"
  | "lenientScopeSearch"
  | "schemaEnforcement"
>): ConfigValid {
  return {
    $typeName: "cerbos.cloud.epdp.v2.Config",
    evaluator: {
      $typeName: "cerbos.cloud.epdp.v2.Config.Evaluator",
      defaultPolicyVersion,
      defaultScope,
      globals: valuesToProtobuf(globals),
      lenientScopeSearch,
    },
    schema: {
      $typeName: "cerbos.cloud.epdp.v2.Config.Schema",
      enforcement: schemaEnforcementToProtobuf(schemaEnforcement),
    },
  };
}

function schemaEnforcementToProtobuf(
  enforcement: SchemaEnforcement | undefined,
): Config_Schema_Enforcement {
  switch (enforcement) {
    case undefined:
      return Config_Schema_Enforcement.UNSPECIFIED;

    case SchemaEnforcement.NONE:
      return Config_Schema_Enforcement.NONE;

    case SchemaEnforcement.WARN:
      return Config_Schema_Enforcement.WARN;

    case SchemaEnforcement.REJECT:
      return Config_Schema_Enforcement.REJECT;
  }
}

export function decodedAuxDataToProtobuf(
  auxData: DecodedAuxData | undefined,
): EngineAuxData | undefined {
  if (!auxData) {
    return undefined;
  }

  return {
    $typeName: "cerbos.engine.v1.AuxData",
    jwt: valuesToProtobuf(auxData.jwt),
  };
}
