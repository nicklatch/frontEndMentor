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
      </div>
    </div>
  );
};

export default ProfileCard;
