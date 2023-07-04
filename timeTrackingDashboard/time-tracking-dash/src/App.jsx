import ProfileCard from './components/ProfileCard';
import InfoCard from './components/InfoCard';
import Dashboard from './components/Dashboard';
import { useResource } from './hooks';
import { useEffect } from 'react';

const App = () => {
  const [userData, dataService] = useResource('data');

  useEffect(() => {
    dataService.getAll();
  }, []);

  console.log(userData);

  return !userData ? (
    <div>loading</div>
  ) : (
    <main>
      <Dashboard>
        <ProfileCard />
        {userData.map((data) => (
          <InfoCard key={data.title} data={data} />
        ))}
      </Dashboard>
    </main>
  );
};

export default App;
