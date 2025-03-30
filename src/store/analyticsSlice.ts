import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AnalyticsState, SuggestionType, QueryType, ResultType } from '@/types/analytics';
import { v4 as uuidv4 } from 'uuid';

const generateMockChartData = (query: string) => {
  const types = ['bar', 'line', 'pie', 'area'] as const;
  const randomType = types[Math.floor(Math.random() * types.length)];
  
  const dataPoints = Array.from({ length: 5 }, (_, i) => ({
    label: `Category ${i+1}`,
    value: Math.floor(Math.random() * 100) + 10
  }));
  
  return {
    title: `Results for: ${query}`,
    description: `Visualization of data based on your query about ${query.toLowerCase().includes('sales') ? 'sales' : 'performance metrics'}.`,
    type: randomType,
    data: dataPoints
  };
};

const mockSuggestions: SuggestionType[] = [
  { id: '1', text: 'How did our sales perform last quarter?' },
  { id: '2', text: 'Show me customer retention rates by region' },
  { id: '3', text: 'What were our top performing products in 2023?' },
  { id: '4', text: 'Compare marketing spend vs revenue for Q1-Q4' },
  { id: '5', text: 'What is the trend of monthly active users?' }
];

const initialState: AnalyticsState = {
  queries: [],
  results: [],
  suggestions: mockSuggestions,
  currentQuery: '',
  loading: false,
  error: null,
  activeResult: null,
};

export const processQuery = createAsyncThunk(
  'analytics/processQuery',
  async (query: string, { dispatch, getState }) => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const queryId = uuidv4();
      const newQuery: QueryType = {
        id: queryId,
        text: query,
        timestamp: Date.now()
      };
      
      dispatch(addQuery(newQuery));
      
      const result: ResultType = {
        id: uuidv4(),
        queryId: queryId,
        summary: `Analysis of ${query}`,
        chartData: generateMockChartData(query),
        timestamp: Date.now()
      };
      
      dispatch(addResult(result));
      dispatch(setActiveResult(result.id));
      
      return result;
    } catch (error) {
      dispatch(setError('Failed to process your query. Please try again.'));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(processQuery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(processQuery.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(processQuery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  }
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
