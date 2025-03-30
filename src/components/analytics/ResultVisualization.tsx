
import React from 'react';
import { useAppSelector } from '@/hooks/redux';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell 
} from 'recharts';
import { Info, AlertCircle } from 'lucide-react';

// Array of colors for the charts
const COLORS = [
  '#3b82f6', // blue
  '#8b5cf6', // purple
  '#10b981', // green
  '#f59e0b', // amber
  '#ef4444', // red
  '#6366f1', // indigo
  '#ec4899', // pink
  '#14b8a6', // teal
];

const ResultVisualization: React.FC = () => {
  const { results, activeResult, loading, error } = useAppSelector(state => state.analytics);
  
  // Find the active result
  const currentResult = activeResult 
    ? results.find(r => r.id === activeResult) 
    : results[0];

  // Loading state
  if (loading) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 h-[400px] flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-analytics-primary border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-500">Processing your query...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-white border border-red-200 rounded-lg p-6 h-[400px] flex flex-col items-center justify-center">
        <div className="bg-red-50 text-red-600 p-4 rounded-full mb-4">
          <AlertCircle size={32} />
        </div>
        <p className="text-red-600 font-medium mb-2">Error</p>
        <p className="text-gray-500 text-center">{error}</p>
      </div>
    );
  }

  // No results yet
  if (!currentResult) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 h-[400px] flex flex-col items-center justify-center">
        <div className="bg-gray-100 text-gray-400 p-4 rounded-full mb-4">
          <Info size={32} />
        </div>
        <p className="text-gray-700 font-medium mb-2">No Data Yet</p>
        <p className="text-gray-500 text-center">Start by asking a question about your data</p>
      </div>
    );
  }

  // Render the appropriate chart based on the chart type
  const renderChart = () => {
    const { type, data } = currentResult.chartData;

    switch (type) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#3b82f6" name="Value" />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8b5cf6" name="Value" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                nameKey="label"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      
      case 'area':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.3} name="Value" />
            </AreaChart>
          </ResponsiveContainer>
        );
      
      default:
        return <div>No visualization available</div>;
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          {currentResult.chartData.title}
        </h2>
        <p className="text-gray-500">
          {currentResult.chartData.description}
        </p>
      </div>
      
      {renderChart()}
      
      <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
        <p>Generated based on query: "{currentResult.summary}"</p>
      </div>
    </div>
  );
};

export default ResultVisualization;
