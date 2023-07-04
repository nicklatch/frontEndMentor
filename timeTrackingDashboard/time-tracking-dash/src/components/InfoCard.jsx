import ellipsis from '../assets/images/icon-ellipsis.svg';

const InfoCard = ({ data }) => {
  let color;
  const cardAccent = `info info--${color}`;

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

  return (
    <div className="info info--orange">
      <div className="info__bg">
        <div className="info__fg">
          <span>{data.title}</span>
          <span>
            <img src={ellipsis} alt="ellipsis" />
          </span>
        </div>
        <div>{data.timeframes.weekly.current}hrs</div>
        <div>Last week - {data.timeframes.weekly.previous}</div>
      </div>
    </div>
  );
};

export default InfoCard;
