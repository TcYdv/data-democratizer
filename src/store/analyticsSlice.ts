import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnalyticsState, SuggestionType, QueryType, ResultType } from '@/types/analytics';

const initialState: AnalyticsState = {
  queries: [],
  results: [],
  suggestions: [],
  currentQuery: '',
  loading: false,
  error: null,
  activeResult: null,
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setQueries: (state, action: PayloadAction<QueryType[]>) => {
      state.queries = action.payload;
    },
    addQuery: (state, action: PayloadAction<QueryType>) => {
      state.queries = [...state.queries, action.payload];
    },
    setResults: (state, action: PayloadAction<ResultType[]>) => {
      state.results = action.payload;
    },
    addResult: (state, action: PayloadAction<ResultType>) => {
      state.results = [...state.results, action.payload];
    },
    setSuggestions: (state, action: PayloadAction<SuggestionType[]>) => {
      state.suggestions = action.payload;
    },
    setCurrentQuery: (state, action: PayloadAction<string>) => {
      state.currentQuery = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setActiveResult: (state, action: PayloadAction<string | null>) => {
      state.activeResult = action.payload;
    },
  },
});

export const {
  setQueries,
  addQuery,
  setResults,
  addResult,
  setSuggestions,
  setCurrentQuery,
  setLoading,
  setError,
  setActiveResult,
} = analyticsSlice.actions;

export default analyticsSlice.reducer;

