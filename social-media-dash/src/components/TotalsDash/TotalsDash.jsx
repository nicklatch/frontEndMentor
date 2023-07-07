import TotalsCard from './TotalsCard';

const TotalsDash = () => {
  const cards = [1, 2, 3, 4];

  return (
    <div className="totals__dash-grid">
      {cards.map((card) => (
        <TotalsCard key={card} data={card} />
      ))}
    </div>
  );
};

export default TotalsDash;
