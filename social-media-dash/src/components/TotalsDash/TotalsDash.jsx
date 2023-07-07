import TotalsCard from './TotalsCard';

const TotalsDash = ({ data }) => {
  return (
    <div className='totals__dash-grid'>
      {data.map((card) => (
        <TotalsCard key={card} data={card} />
      ))}
    </div>
  );
};

export default TotalsDash;
