import Graphic from './Graphic';
import Info from './Info';
import InfoInput from './InfoInput';

const NewsletterSignUp = () => {
  return (
    <div className='newsletter'>
      <section className='newsletter__info'>
        <Info />
        <InfoInput />
      </section>
      <section className='newsletter__graphic'>
        <Graphic />
      </section>
    </div>
  );
};

export default NewsletterSignUp;
