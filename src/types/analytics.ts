
export interface SuggestionType {
  id: string;
  text: string;
}

export interface QueryType {
  id: string;
  text: string;
  timestamp: number;
}

export interface DataPoint {
  label: string;
  value: number;
}

export interface ChartData {
  title: string;
  description: string;
  type: 'bar' | 'line' | 'pie' | 'area';
  data: DataPoint[];
}

export interface ResultType {
  id: string;
  queryId: string;
  summary: string;
  chartData: ChartData;
  timestamp: number;
}

export interface AnalyticsState {
  queries: QueryType[];
  results: ResultType[];
  suggestions: SuggestionType[];
  currentQuery: string;
  loading: boolean;
  error: string | null;
  activeResult: string | null;
}
