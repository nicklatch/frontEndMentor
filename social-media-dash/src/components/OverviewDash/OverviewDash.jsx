import OverviewCard from './OverviewCard';

const OverviewDash = ({data}) => {
  return (
    <div className='overview__grid'>
      {data.map((card) => {
        return <OverviewCard key={Math.random() * 10000} data={card} />;
      })}
    </div>
  );
};

export default OverviewDash;
