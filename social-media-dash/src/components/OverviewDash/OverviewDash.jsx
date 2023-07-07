import OverviewCard from './OverviewCard';

const OverviewDash = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="overview__grid">
      {cards.map((card) => {
        return <OverviewCard key={Math.random() * 10000} data={card} />;
      })}
    </div>
  );
};

export default OverviewDash;
