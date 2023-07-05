import ProfileCard from './ProfileCard';
import InfoCard from './InfoCard';
import { useResource } from '../hooks';
import { useEffect } from 'react';

const Dashboard = () => {
  const [userData, dataService] = useResource('data');

  useEffect(() => {
    if (!userData) {
      dataService.getAll();
    }
  }, [userData]);

  console.log(userData);

  return !userData ? (
    <div>loading</div>
  ) : (
    <div className='dashboard-grid'>
      {' '}
      <ProfileCard />
      {userData.map((data) => (
        <InfoCard key={data.title} data={data} />
      ))}
    </div>
  );
};

export default Dashboard;
