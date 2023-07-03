import ProfileCard from './components/ProfileCard';
import InfoCard from './components/InfoCard';
import Dashboard from './components/Dashboard';

const test = [1, 2, 3, 4, 5, 6];

const App = () => {
  return (
    <main>
      <Dashboard>
        <ProfileCard />
        {test.map((t) => (
          <InfoCard />
        ))}
      </Dashboard>
    </main>
  );
};

export default App;
