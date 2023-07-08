const Toggle = () => {
  const leToggle = document.getElementsByClassName('toggle-checkbox');
  console.log(leToggle);

  return (
    <label className="toggle">
      <span className="toggle-label">Dark Mode{'  '}</span>
      <input
        className="toggle-checkbox"
        type="checkbox"
        onChange={() => console.log('switched')}
      />
      <div className="toggle-switch"></div>
    </label>
  );
};

export default Toggle;
