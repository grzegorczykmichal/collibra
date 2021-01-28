import css from './Spinner.module.css';

function Spinner() {
  return (
    <div className={css.spinner}>
      <div className={css.doubleBounce1}></div>
      <div className={css.doubleBounce2}></div>
    </div>
  );
}

export { Spinner };
