import UpSVG from './UpSVG';
import DownSVG from './DownSVG';

const UpDown = ({ data, message = '' }) => {
  const upDown = data > 0 ? 'diff-up' : 'diff-down';

  return (
    <section className={`totals__card-diff ${upDown}`}>
      {data > 0 ? <UpSVG /> : <DownSVG />}
      <p className="keep-that-arrow-away-from-me">
        {Math.abs(data)}
        {message}
      </p>
    </section>
  );
};

export default UpDown;
