/* eslint-disable react/prop-types */
// TODO: implement toggle for light/dark
const Header = ({ total }) => {
  return (
    <header>
      <div>
        <h1>Social Media Dashboard</h1>
        <span>Dark Mode [toggle]</span>
      </div>
      <span>
        <p>Total Followers: {total.toLocaleString()}</p>
      </span>
    </header>
  );
};

Header.propTypes = {};

export default Header;
