const Toggle = () => {
  const theme = document.querySelector('html').classList;

  const handleToggle = () => {
    theme.toggle('dark');
    theme.toggle('light');
    console.log(theme);
  };

  return (
    <label className='toggle'>
      <span className='toggle-label'>Dark Mode</span>
      <input
        className='toggle-checkbox'
        type='checkbox'
        onChange={handleToggle}
      />
      <div className='toggle-switch '></div>
    </label>
  );
};

export default Toggle;
