
import { Provider } from 'react-redux';
import { store } from '@/store';
import Dashboard from '@/components/analytics/Dashboard';

const Index = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};

export default Index;
