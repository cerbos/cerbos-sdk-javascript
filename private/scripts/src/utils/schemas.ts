import { formatISO, parseISO } from "date-fns";
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

export function sortedArray<T extends ZodType>(
  schema: T,
  compare?: (a: z.output<T>, b: z.output<T>) => number,
): ZodPipe<ZodArray<T>, ZodTransform<z.output<T>[], z.output<T>[]>> {
  return z
    .array(schema)
    .min(1)
    .transform((array) => array.sort(compare));
}

export function sortedRecord<T extends ZodType>(
  schema: T,
): ZodPipe<
  ZodRecord<ZodString, T>,
  ZodTransform<Record<string, z.output<T>>, Record<string, z.output<T>>>
> {
  return z.record(z.string(), schema).transform((value, ctx) => {
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
  });
}

export const semverSchema = z
  .string()
  .refine((value) => value === semverValid(value), {
    error: ({ input }) => ({
      message: `"${input as string}" is not a valid semantic version number`,
    }),
  });

export const isoDateSchema = z.string().refine(
  (value) => {
    try {
      return value === formatISO(parseISO(value), { representation: "date" });
    } catch {
      return false;
    }
  },
  {
    error: ({ input }) => ({
      message: `"${input as string}" is not a valid ISO 8601 date`,
    }),
  },
);
