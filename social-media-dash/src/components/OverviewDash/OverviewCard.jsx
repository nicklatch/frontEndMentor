/* eslint-disable react/prop-types */
import fbIcon from '../../assets/images/icon-facebook.svg';

//! remove rule below when data gets piped
// eslint-disable-next-line no-unused-vars
const OverviewCard = ({ data }) => {
  return (
    <div className="overview__card">
      <section>
        <p>Page Views</p>
        <img src={fbIcon} />
      </section>
    </div>
  );
};

export default OverviewCard;
