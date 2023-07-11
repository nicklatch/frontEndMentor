const InfoInput = () => {
  return (
    <form className='newsletter__input'>
      <label htmlFor='email__input'>Email adress</label>
      <input id='email__input' type='text' />
      <button type='submit'>Subscribe to monthly newsletter</button>
    </form>
  );
};

export default InfoInput;
