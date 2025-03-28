
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AnalyticsState, ChartData, QueryType, ResultType } from '@/types/analytics';
import { generateMockChartData } from '@/utils/mockData';

// Mock API call that simulates processing a query
export const processQuery = createAsyncThunk(
  'analytics/processQuery',
  async (query: string, { rejectWithValue }) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock error for demonstration (10% chance)
      if (Math.random() < 0.1) {
        throw new Error('Failed to process query. Please try again.');
      }
      
      const id = Date.now().toString();
      const queryObj: QueryType = {
        id,
        text: query,
        timestamp: Date.now()
      };
      
      const chartData = generateMockChartData(query);
      
      const result: ResultType = {
        id: `result-${id}`,
        queryId: id,
        summary: `Analysis based on "${query}"`,
        chartData,
        timestamp: Date.now()
      };
      
      return { query: queryObj, result };
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

// Initial suggestions
const initialSuggestions = [
  { id: '1', text: 'Show me sales performance by region for Q2' },
  { id: '2', text: 'Compare customer acquisition costs across marketing channels' },
  { id: '3', text: 'What were our top-performing products last month?' },
  { id: '4', text: 'Analyze customer churn trends over the past year' },
  { id: '5', text: 'Show employee productivity metrics by department' }
];

const initialState: AnalyticsState = {
  queries: [],
  results: [],
  suggestions: initialSuggestions,
  currentQuery: '',
  loading: false,
  error: null,
  activeResult: null
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setCurrentQuery: (state, action: PayloadAction<string>) => {
      state.currentQuery = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setActiveResult: (state, action: PayloadAction<string | null>) => {
      state.activeResult = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(processQuery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(processQuery.fulfilled, (state, action) => {
        state.loading = false;
        state.queries.unshift(action.payload.query);
        state.results.unshift(action.payload.result);
        state.activeResult = action.payload.result.id;
        state.currentQuery = '';
        
        // Generate new suggestions based on the query
        state.suggestions = [
          { id: (Date.now() + 1).toString(), text: `Compare ${action.payload.query.text.split(' ').pop()} to previous period` },
          { id: (Date.now() + 2).toString(), text: `Show trends for ${action.payload.query.text.split(' ').slice(0, 3).join(' ')}` },
          { id: (Date.now() + 3).toString(), text: `Forecast ${action.payload.query.text.split(' ').slice(0, 2).join(' ')} for next quarter` },
          ...initialSuggestions.slice(0, 2)
        ];
      })
      .addCase(processQuery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export const { setCurrentQuery, clearError, setActiveResult } = analyticsSlice.actions;
export default analyticsSlice.reducer;
