/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AccessLogEntry, DecisionLogEntry } from "../../audit/v1/audit";

export const protobufPackage = "cerbos.response.v1";

export interface ListAuditLogEntriesResponse {
  entry?:
    | { $case: "accessLogEntry"; accessLogEntry: AccessLogEntry }
    | {
        $case: "decisionLogEntry";
        decisionLogEntry: DecisionLogEntry;
      }
    | undefined;
}

function createBaseListAuditLogEntriesResponse(): ListAuditLogEntriesResponse {
  return { entry: undefined };
}

export const ListAuditLogEntriesResponse = {
  encode(
    message: ListAuditLogEntriesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    switch (message.entry?.$case) {
      case "accessLogEntry":
        AccessLogEntry.encode(
          message.entry.accessLogEntry,
          writer.uint32(10).fork(),
        ).ldelim();
        break;
      case "decisionLogEntry":
        DecisionLogEntry.encode(
          message.entry.decisionLogEntry,
          writer.uint32(18).fork(),
        ).ldelim();
        break;
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListAuditLogEntriesResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAuditLogEntriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entry = {
            $case: "accessLogEntry",
            accessLogEntry: AccessLogEntry.decode(reader, reader.uint32()),
          };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entry = {
            $case: "decisionLogEntry",
            decisionLogEntry: DecisionLogEntry.decode(reader, reader.uint32()),
          };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListAuditLogEntriesResponse {
    return {
      entry: isSet(object.accessLogEntry)
        ? {
            $case: "accessLogEntry",
            accessLogEntry: AccessLogEntry.fromJSON(object.accessLogEntry),
          }
        : isSet(object.decisionLogEntry)
          ? {
              $case: "decisionLogEntry",
              decisionLogEntry: DecisionLogEntry.fromJSON(
                object.decisionLogEntry,
              ),
            }
          : undefined,
    };
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
