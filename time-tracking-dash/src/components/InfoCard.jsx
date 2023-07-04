/* eslint-disable react/prop-types */
import ellipsis from '../assets/images/icon-ellipsis.svg';
import exercise from '../assets/images/icon-exercise.svg';
import play from '../assets/images/icon-play.svg';
import selfCare from '../assets/images/icon-self-care.svg';
import social from '../assets/images/icon-social.svg';
import study from '../assets/images/icon-study.svg';
import work from '../assets/images/icon-work.svg';
import { useTimeframeValue } from './TimeframeContext';

const InfoCard = ({ data }) => {
  const state = useTimeframeValue();

  const bgImages = {
    exercise: exercise,
    play: play,
    'self-care': selfCare,
    social: social,
    study: study,
    work: work,
  };

  const category =
    data.title !== 'Self Care' ? data.title.toLowerCase() : 'self-care';

  const image = bgImages[category];

  const cardAccent = `info info--${category}`;

  return (
    <div className={cardAccent}>
      <span className="info__image-container">
        <img className="info__image" src={image} alt="kajshdf;lkja" />
      </span>
      <div className="info__fg">
        <span className="info__header">
          <p className="info__title">{data.title}</p>
          <img
            src={ellipsis}
            alt="three dots - ellipsis"
            className="ellipsis"
          />
        </span>
        <div className="info__fg-stat-container">
          <p className="info__fg-current">
            {data.timeframes[state].current}hrs
          </p>
          <p className="light-font">
            Last week - {data.timeframes[state].previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
