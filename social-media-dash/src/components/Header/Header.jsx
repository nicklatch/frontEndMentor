/* eslint-disable react/prop-types */
// TODO: implement toggle for light/dark
import Toggle from './Toggle';
const Header = ({ total }) => {
  return (
    <header>
      <div className="header__title">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: {total.toLocaleString()}</p>
      </div>
      <div>
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
