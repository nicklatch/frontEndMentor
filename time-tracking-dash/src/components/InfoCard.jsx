import ellipsis from '../assets/images/icon-ellipsis.svg';

const InfoCard = ({ data }) => {
  const color =
    data.title !== 'Self Care' ? data.title.toLowerCase() : 'self-care';

  const cardAccent = `info info--${color}`;

  return (
    <div className={cardAccent}>
      <div className="info__bg">
        <div className="info__fg">
          <span className="info__header">
            <p className="info__title">{data.title}</p>
            <img
              src={ellipsis}
              alt="three dots - ellipsis"
              className="ellipsis"
            />
          </span>
          <p className="info__fg-current">
            {data.timeframes.weekly.current}hrs
          </p>
          <p className="info__fg-previous">
            Last week - {data.timeframes.weekly.previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
