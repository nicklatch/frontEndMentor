import { useState } from 'react';

const Toggle = () => {
  const [darkTheme, setDarkTheme] = useState('dark');
  const dark = document.querySelector('html');

  const handleToggle = () => {
    setDarkTheme('light');
    console.log(dark);
  };

  return (
    <label className="toggle">
      <span className="toggle-label">Dark Mode</span>
      <input
        className="toggle-checkbox"
        type="checkbox"
        onChange={handleToggle}
      />
      <div className="toggle-switch "></div>
    </label>
  );
};

export default Toggle;
