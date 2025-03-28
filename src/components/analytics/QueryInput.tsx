
import React, { useState, KeyboardEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setCurrentQuery, processQuery } from '@/store/analyticsSlice';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Brain, Send, Sparkles } from 'lucide-react';

const QueryInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentQuery, loading, suggestions } = useAppSelector(state => state.analytics);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = () => {
    if (!currentQuery.trim() || loading) return;
    dispatch(processQuery(currentQuery.trim()));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    dispatch(setCurrentQuery(suggestion));
    setShowSuggestions(false);
  };

  return (
    <div className="w-full">
      <div className="relative mb-8">
        <div className="flex items-center">
          <div className="absolute left-3 text-gray-400">
            <Brain size={20} />
          </div>
          <Input
            className="pl-10 pr-24 py-6 text-base rounded-xl border-gray-300 focus:border-analytics-primary focus:ring-analytics-primary"
            placeholder="Ask a question about your data..."
            value={currentQuery}
            onChange={(e) => dispatch(setCurrentQuery(e.target.value))}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowSuggestions(true)}
            disabled={loading}
          />
          <Button
            className="absolute right-2 bg-analytics-primary hover:bg-analytics-primary/90"
            size="sm"
            onClick={handleSubmit}
            disabled={!currentQuery.trim() || loading}
          >
            {loading ? 'Processing...' : 'Ask'}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        {showSuggestions && !loading && suggestions.length > 0 && (
          <div className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-md border border-gray-200 py-2 max-h-60 overflow-y-auto">
            <div className="px-3 py-2 text-xs text-gray-500 font-semibold flex items-center">
              <Sparkles className="h-3 w-3 mr-1" /> SUGGESTED QUERIES
            </div>
            <ul>
              {suggestions.map((suggestion) => (
                <li 
                  key={suggestion.id}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  onClick={() => handleSuggestionClick(suggestion.text)}
                >
                  {suggestion.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default QueryInput;
