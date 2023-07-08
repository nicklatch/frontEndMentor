import { icons, numberFormatter } from '../../utils';
import PropTypes from 'prop-types';
import UpDown from '../UpDown.jsx';
const TotalsCard = ({ data }) => {
  return (
    <>
      <div className={`totals__card-border-${data.platform}`}>
        <div className="totals__card card-rounded">
          <section className="totals__card-handle">
            <img src={icons[data.platform]} alt="Facebook Logo" />
            <p>{data.handle}</p>
          </section>
          <section className="totals__card-followers">
            <p>{numberFormatter(Number(data.totalFollowers))}</p>
            <p>FOLLOWERS</p>
          </section>
          <UpDown data={data.newTodayFollowers} message=" Today" />
        </div>
      </div>
    </>
  );
};

TotalsCard.propTypes = {
  icon: PropTypes.string,
  data: PropTypes.shape({
    platform: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    totalFollowers: PropTypes.number.isRequired,
  }).isRequired,
};

export default TotalsCard;
