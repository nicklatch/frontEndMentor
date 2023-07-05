import profilePicture from '../assets/images/image-jeremy.png';

const ProfileCard = () => {
  return (
    <div className='profile'>
      <div className='profile__upper'>
        <img
          className='profile__picture'
          src={profilePicture}
          alt='Jeremy Robinsons Picture'
        />
        <h5 className='light-font'>Report for</h5>
        <h3 className='profile__name'>
          Jeremy
          <br />
          Robinson
        </h3>
      </div>
      <nav className='profile__timeframes'>
        <a href='/daily'>Daily</a>
        <a href='/weekly'>Weekly</a>
        <a href='/monthly'>Monthly</a>
      </nav>
    </div>
  );
};

export default ProfileCard;
