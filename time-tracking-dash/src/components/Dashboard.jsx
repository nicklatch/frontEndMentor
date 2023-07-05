import ProfileCard from './ProfileCard';
import InfoCard from './InfoCard';
import { useResource } from '../hooks';
import { useEffect } from 'react';
import { TimeframeContextProvider } from './TimeframeContext';

const Dashboard = () => {
  const [userData, dataService] = useResource('data');

  useEffect(() => {
    if (!userData) {
      dataService.getAll();
    }
  }, [userData]);

  return !userData ? (
    <div>loading</div>
  ) : (
    <TimeframeContextProvider>
      <div className='dashboard-grid'>
        {' '}
        <ProfileCard />
        {userData.map((data) => (
          <InfoCard key={data.title} data={data} />
        ))}
      </div>
    </TimeframeContextProvider>
  );
};

export default Dashboard;
