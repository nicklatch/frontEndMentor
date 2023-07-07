import fbIcon from '../../assets/images/icon-facebook.svg';

const TotalsCard = () => {
  return (
    <div className="totals__card">
      <section className='totals__card-icon-handle'>
        <img src={fbIcon} alt="Facebook Logo" />
        <label htmlFor="">@dude</label>
      </section>
      <section>
        <span>1987</span>
        <p>FOLLOWERS</p>
      </section>
      <section>
        <p>^ 12 today</p>
      </section>
    </div>
  );
};

export default TotalsCard;
