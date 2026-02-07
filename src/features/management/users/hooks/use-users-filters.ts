import { parseAsInteger, parseAsString, parseAsStringEnum, useQueryStates } from "nuqs";

export const LIMITS = ["10", "25", "50", "100"];

export const useUsersFilters = () => {
  return useQueryStates({
    search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),

    page: parseAsInteger.withDefault(1).withOptions({ clearOnDefault: true }),

    limit: parseAsStringEnum(LIMITS).withDefault("10").withOptions({
      clearOnDefault: true,
      shallow: true,
    }),

    sortBy: parseAsString.withDefault("created_at").withOptions({ clearOnDefault: true }),

    sortOrder: parseAsString.withDefault("desc").withOptions({ clearOnDefault: true }),
  });
};
