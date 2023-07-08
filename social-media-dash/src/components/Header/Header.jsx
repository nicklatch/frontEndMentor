/* eslint-disable react/prop-types */
// TODO: implement toggle for light/dark
import Toggle from './Toggle';
const Header = ({ total }) => {
  return (
    <header>
      <div>
        <h1>Social Media Dashboard</h1>
        <Toggle />
      </div>
      <span>
        <p>Total Followers: {total.toLocaleString()}</p>
      </span>
    </header>
  );
};

export default Header;
