const InfoInput = () => {
  return (
    <form className='newsletter__input'>
      <label htmlFor='email__input'>email</label>
      <input id='email__input' type='text' />
      <button type='submit'>Subscribe to monthly newsletter</button>
    </form>
  );
};

export default InfoInput;
