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
        <h3>
          Jeremy
          <br />
          Robinson
        </h3>
      </div>
      <div>Daily</div>
      <div>Weekly</div>
      <div>Monthly</div>
    </div>
  );
};

export default ProfileCard;
