import { formatISO, parseISO } from "date-fns";
import { valid as semverValid } from "semver";
import type {
  ZodArray,
  ZodEffects,
  ZodRecord,
  ZodString,
  ZodTypeAny,
} from "zod";
import { ZodIssueCode, z } from "zod";

export function sortedArray<T extends ZodTypeAny>(
  schema: T,
  compare?: (a: z.infer<T>, b: z.infer<T>) => number,
): ZodEffects<ZodArray<T>> {
  return z
    .array(schema)
    .min(1)
    .transform((array) => array.sort(compare));
}

export function sortedRecord<T extends ZodTypeAny>(
  schema: T,
): ZodEffects<ZodRecord<ZodString, T>> {
  return z.record(schema).transform((value, ctx) => {
    const entries = Object.entries(value).sort(([a], [b]) =>
      a.localeCompare(b),
    );

    if (entries.length === 0) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: "Record must contain at least one entry",
      });
    }

    return Object.fromEntries(entries);
  });
}

export const semverSchema = z.string().refine(
  (value) => value === semverValid(value),
  (value) => ({ message: `"${value}" is not a valid semantic version number` }),
);

export const isoDateSchema = z.string().refine(
  (value) => {
    try {
      return value === formatISO(parseISO(value), { representation: "date" });
    } catch (error) {
      return false;
    }
  },
  (value) => ({ message: `"${value}" is not a valid ISO 8601 date` }),
);
