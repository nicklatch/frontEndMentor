/* eslint-disable react/prop-types */
import { icons, numberFormatter } from '../../utils';
import UpDown from '../UpDown.jsx';

const OverviewCard = ({ icon, today }) => {
  return (
    <div className="overview__card card-rounded ">
      <section>
        <h4>{String(Object.keys(today)[0])}</h4>
        <img src={icons[icon]} alt={`${icon}'s logo`} />
      </section>
      <section>
        <p>{numberFormatter(Object.values(today)[0])}</p>
        <UpDown data={today.diff} message="%" />
      </section>
    </div>
  );
};

export default OverviewCard;
