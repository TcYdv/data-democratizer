
import React from 'react';
import QueryInput from './QueryInput';
import QueryHistory from './QueryHistory';
import ResultVisualization from './ResultVisualization';
import { Database, BarChart3, BrainCircuit } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 bg-analytics-primary rounded-lg flex items-center justify-center mr-3">
            <BrainCircuit className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Data Democratizer</h1>
        </div>
        <p className="text-gray-600">Ask questions about your data in plain English and get instant insights</p>
      </header>
      
      <main>
        <QueryInput />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left sidebar */}
          <div className="md:col-span-1">
            <QueryHistory />
          </div>
          
          {/* Main content */}
          <div className="md:col-span-2">
            <ResultVisualization />
          </div>
        </div>
      </main>
      
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>Data Democratizer © 2023 - Making data insights accessible for everyone</p>
      </footer>
    </div>
  );
};

export default Dashboard;
