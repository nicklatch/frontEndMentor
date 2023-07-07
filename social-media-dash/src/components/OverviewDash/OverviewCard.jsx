/* eslint-disable react/prop-types */
import { icons } from '../../utils';

const OverviewCard = ({ data }) => {
  console.log('FROM: overviewcard', data);
  return (
    <div className='overview__card card-rounded '>
      <section>
        <h4>Page Views</h4>
        <img src={icons[data.platform]} alt={`${data.platform}'s logo`} />
      </section>
      <section>
        <p>87</p>
        <p>^3%</p>
      </section>
    </div>
  );
};

export default OverviewCard;
