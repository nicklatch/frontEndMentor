import { useEffect } from 'react';
import Header from './components/Header';
import OverviewDash from './components/OverviewDash/OverviewDash';
import TotalsDash from './components/TotalsDash/TotalsDash';
import { useResource } from './hooks';
import { parseAndReduce } from './utils';

const App = () => {
  const [userData, dataService] = useResource('data');

  useEffect(() => {
    if (!userData) {
      dataService.getAll();
    }
  }, [userData, dataService]);

  return !userData ? (
    <div className="loading">Loading...</div>
  ) : (
    <>
      <Header total={parseAndReduce(userData)} />
      <main>
        <TotalsDash data={userData} />
        <h2>Overview - Today</h2>
        <OverviewDash data={userData} />
      </main>
    </>
  );
};

export default App;
