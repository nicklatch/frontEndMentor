import { useTimeframeDispatch } from './TimeframeContext';
import profilePicture from '../assets/images/image-jeremy.png';

const ProfileCard = () => {
  const dispatch = useTimeframeDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: e.target.value });
  };

  return (
    <div className='profile'>
      <div className='profile__upper'>
        <img
          className='profile__picture'
          src={profilePicture}
          alt='Jeremy Robinsons Picture'
        />
        <span>
          <h5 className='light-font'>Report for</h5>
          <h3 className='profile__name'>Jeremy Robinson</h3>
        </span>
      </div>
      <nav className='profile__timeframes'>
        <button
          id='dailyButton'
          value='DAILY'
          type='button'
          onClick={handleClick}
        >
          Daily
        </button>
        <button
          id='weeklyButton'
          value='WEEKLY'
          type='button'
          onClick={handleClick}
        >
          Weekly
        </button>
        <button
          id='monthlyButton'
          value='MONTHLY'
          type='button'
          onClick={handleClick}
        >
          Monthly
        </button>
      </nav>
    </div>
  );
};

export default ProfileCard;
