import Header from './components/Header';
import OverviewDash from './components/OverviewDash/OverviewDash';
import TotalsDash from './components/TotalsDash/TotalsDash';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <TotalsDash />
        <h2>Overview - Today</h2>
        <OverviewDash />
      </main>
    </>
  );
};

export default App;
