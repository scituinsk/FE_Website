import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";

const DEFAULT_PAGE = 1;

export const useProjectsFilters = () => {
  return useQueryStates({
    search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
    page: parseAsInteger.withDefault(DEFAULT_PAGE).withOptions({ clearOnDefault: true }),
  });
};
