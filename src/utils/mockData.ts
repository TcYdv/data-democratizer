
import { ChartData } from '@/types/analytics';

// Generate random numbers for mock data
const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate mock chart data based on the query text
export const generateMockChartData = (query: string): ChartData => {
  // Default to bar chart
  let chartType: 'bar' | 'line' | 'pie' | 'area' = 'bar';
  
  // Determine chart type based on query keywords
  if (query.toLowerCase().includes('trend') || query.toLowerCase().includes('over time')) {
    chartType = 'line';
  } else if (query.toLowerCase().includes('distribution') || query.toLowerCase().includes('breakdown')) {
    chartType = 'pie';
  } else if (query.toLowerCase().includes('cumulative') || query.toLowerCase().includes('total')) {
    chartType = 'area';
  }
  
  // Generate categories and data based on query
  let categories: string[] = [];
  
  if (query.toLowerCase().includes('region')) {
    categories = ['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Oceania'];
  } else if (query.toLowerCase().includes('department')) {
    categories = ['Sales', 'Marketing', 'Engineering', 'Support', 'Operations', 'HR'];
  } else if (query.toLowerCase().includes('product')) {
    categories = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'];
  } else if (query.toLowerCase().includes('channel')) {
    categories = ['Social Media', 'Email', 'SEO', 'Paid Ads', 'Referrals', 'Direct'];
  } else {
    categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
  }
  
  // Generate data points
  const data = categories.map(category => ({
    label: category,
    value: getRandomNumber(10, 100)
  }));
  
  // Generate a title and description based on the query
  let title = 'Data Analysis Results';
  let description = 'Data breakdown based on your query.';
  
  if (query.toLowerCase().includes('sales')) {
    title = 'Sales Performance Analysis';
    description = 'Breakdown of sales performance across different dimensions.';
  } else if (query.toLowerCase().includes('customer')) {
    title = 'Customer Metrics Analysis';
    description = 'Analysis of customer-related metrics and KPIs.';
  } else if (query.toLowerCase().includes('marketing')) {
    title = 'Marketing Channel Performance';
    description = 'Effectiveness and ROI of different marketing channels.';
  } else if (query.toLowerCase().includes('employee') || query.toLowerCase().includes('productivity')) {
    title = 'Employee Productivity Metrics';
    description = 'Analysis of productivity metrics across the organization.';
  }
  
  return {
    title,
    description,
    type: chartType,
    data
  };
};
