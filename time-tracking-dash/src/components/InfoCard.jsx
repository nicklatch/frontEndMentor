/* eslint-disable react/prop-types */
import ellipsis from '../assets/images/icon-ellipsis.svg';
import { bgSvgs } from '../sevices/imageService';
import { useTimeframeValue } from './TimeframeContext';

const InfoCard = ({ data }) => {
  const state = useTimeframeValue();
  const prevTimeData = [
    { daily: 'Yesterday' },
    { weekly: 'Last Week' },
    { monthly: 'Last Month' },
  ];

  const prevTime = Object.values(prevTimeData.find((obj) => obj[state]))[0];
  const category =
    data.title !== 'Self Care' ? data.title.toLowerCase() : 'self-care';

  const cardAccent = `info info--${category}`;

  return (
    <div className={cardAccent}>
      <span className='info__image-container'>
        <img
          className='info__image'
          src={bgSvgs[category]}
          alt='kajshdf;lkja'
        />
      </span>
      <div className='info__fg'>
        <span className='info__header'>
          <p className='info__title'>{data.title}</p>
          <img
            src={ellipsis}
            alt='three dots - ellipsis'
            className='ellipsis'
          />
        </span>
        <div className='info__fg-stat-container'>
          <p className='info__fg-current'>
            {data.timeframes[state].current}hrs
          </p>
          <p className='light-font'>
            {prevTime} - {data.timeframes[state].previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
