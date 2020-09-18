export interface AutosuggestDto {
  q: string;
  suggested_queries: SuggestedQuery[];
}

interface SuggestedQuery {
  q: string;
  match_start: number;
  match_end: number;
  filters: Filter[];
}

interface Filter {
  id: string;
  name: string;
  values: Value[];
}

interface Value {
  id: string;
  name: string;
}
