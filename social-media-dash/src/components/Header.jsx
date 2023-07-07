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

export default Header;
