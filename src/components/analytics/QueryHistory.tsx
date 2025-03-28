
import React from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { setActiveResult } from '@/store/analyticsSlice';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Clock, BarChart3 } from 'lucide-react';

const QueryHistory: React.FC = () => {
  const dispatch = useAppDispatch();
  const { queries, results, activeResult } = useAppSelector(state => state.analytics);

  const handleSelectQuery = (resultId: string) => {
    dispatch(setActiveResult(resultId));
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (queries.length === 0) {
    return (
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex items-center text-gray-500 mb-2">
          <Clock className="mr-2 h-4 w-4" />
          <h3 className="font-medium">Query History</h3>
        </div>
        <p className="text-sm text-gray-400 italic">No queries yet. Try asking a question!</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex items-center text-gray-500 mb-4">
        <Clock className="mr-2 h-4 w-4" />
        <h3 className="font-medium">Query History</h3>
      </div>
      <ScrollArea className="h-[250px] pr-4">
        {queries.map((query) => {
          const associatedResult = results.find(r => r.queryId === query.id);
          return (
            <div 
              key={query.id}
              className={`mb-3 p-3 rounded-md cursor-pointer border transition-colors ${
                associatedResult && activeResult === associatedResult.id 
                  ? 'bg-analytics-primary/10 border-analytics-primary/30' 
                  : 'bg-white border-gray-200 hover:border-analytics-primary/30'
              }`}
              onClick={() => associatedResult && handleSelectQuery(associatedResult.id)}
            >
              <p className="text-sm font-medium truncate">{query.text}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">{formatDate(query.timestamp)}</span>
                {associatedResult && (
                  <div className="flex items-center text-xs text-analytics-primary">
                    <BarChart3 className="h-3 w-3 mr-1" />
                    <span>{associatedResult.chartData.type} chart</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </ScrollArea>
    </div>
  );
};

export default QueryHistory;
