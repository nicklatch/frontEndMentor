/* eslint-disable react/prop-types */
import OverviewCard from './OverviewCard';

const OverviewDash = ({ data }) => {
  return (
    <div className="overview__grid">
      {data.map((card) => {
        return card.overview.today.map((ele) => (
          <OverviewCard
            key={Math.random() * 10000}
            icon={card.platform}
            today={ele}
          />
        ));
      })}
    </div>
  );
};

export default OverviewDash;
