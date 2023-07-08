import { icons, numberFormatter } from '../../utils';
import PropTypes from 'prop-types';
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
          <section className="totals__card-dif">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
              <path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z" />
            </svg>
            <p>12 Today</p>
          </section>
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
