import ellipsis from '../assets/images/icon-ellipsis.svg';

const InfoCard = ({ data }) => {
  let color;

  switch (data.title) {
    case 'Work':
      color = 'work';
      break;
    case 'Play':
      color = 'play';
      break;
    case 'Study':
      color = 'study';
      break;
    case 'Exercise':
      color = 'exercise';
      break;
    case 'Social':
      color = 'social';
      break;
    case 'Self Care':
      color = 'self-care';
      break;
    default:
      color = 'white';
  }

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
          <p className="info__fg--current">
            {data.timeframes.weekly.current}hrs
          </p>
          <p className="info__fg--previous">
            Last week - {data.timeframes.weekly.previous}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
