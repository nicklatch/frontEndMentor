import profilePicture from '../assets/images/image-jeremy.png';

const ProfileCard = () => {
  return (
    <div className="profile">
      <div className="profile__upper">
        <img
          className="profile__picture"
          src={profilePicture}
          alt="Jeremy Robinsons Picture"
        />
        <h5>Report for</h5>
        <h3 className="profile__name">
          Jeremy
          <br />
          Robinson
        </h3>
      </div>
      <ul className="profile__timeframes">
        <li>Daily</li>
        <li>Weekly</li>
        <li>Monthly</li>
      </ul>
    </div>
  );
};

export default ProfileCard;
