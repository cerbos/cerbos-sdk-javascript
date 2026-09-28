import { valid as semverValid } from "semver";
import type {
  ZodArray,
  ZodPipe,
  ZodRecord,
  ZodString,
  ZodTransform,
  ZodType,
} from "zod";
import { z } from "zod";
import type { JSONSchema } from "zod/v4/core";

const registry = z.registry<JSONSchema.BaseSchema>();

function registerJSONSchema<T extends ZodPipe>(
  schema: T,
  { $schema, ...jsonSchema }: JSONSchema.BaseSchema,
): T {
  registry.add(schema.out, jsonSchema);
  return schema;
}

export function toJSONSchema(schema: ZodType): JSONSchema.BaseSchema {
  return schema.toJSONSchema({
    unrepresentable: (ctx) => {
      const jsonSchema = registry.get(ctx.zodSchema);
      if (jsonSchema) {
        return jsonSchema;
      }

      throw new Error(`${ctx.message} (at ${ctx.path.join(".")})`);
    },
  });
}

export function sortedArray<T extends ZodType>(
  schema: T,
  compare?: (a: z.output<T>, b: z.output<T>) => number,
): ZodPipe<ZodArray<T>, ZodTransform<z.output<T>[], z.output<T>[]>> {
  const array = z.array(schema).min(1);

  return registerJSONSchema(
    array.transform((array) => array.sort(compare)),
    toJSONSchema(array),
  );
}

export function sortedRecord<T extends ZodType>(
  schema: T,
): ZodPipe<
  ZodRecord<ZodString, T>,
  ZodTransform<Record<string, z.output<T>>, Record<string, z.output<T>>>
> {
  const record = z.record(z.string(), schema);

  return registerJSONSchema(
    record.transform((value, ctx) => {
      const entries = Object.entries(value).sort(([a], [b]) =>
        a.localeCompare(b),
      );

      if (entries.length === 0) {
        ctx.addIssue({
          code: "custom",
          message: "Record must contain at least one entry",
        });
      }

      return Object.fromEntries(entries);
    }),
    toJSONSchema(record),
  );
}

export const semverSchema = z
  .string()
  .refine((value) => value === semverValid(value), {
    error: ({ input }) => ({
      message: `"${input as string}" is not a valid semantic version number`,
    }),
  });

export const isoDateSchema = z.iso.date();
