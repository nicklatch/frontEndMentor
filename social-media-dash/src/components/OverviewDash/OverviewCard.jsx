/* eslint-disable react/prop-types */
import { icons, numberFormatter } from '../../utils';

const OverviewCard = ({ icon, data }) => {
  console.log(data);

  return (
    <div className='overview__card card-rounded '>
      <section>
        <h4>{String(Object.keys(data))}</h4>
        <img src={icons[icon]} alt={`${data.platform}'s logo`} />
      </section>
      <section>
        <p>{numberFormatter(Object.values(data))}</p>
        <p>^3%</p>
      </section>
    </div>
  );
};

export default OverviewCard;
