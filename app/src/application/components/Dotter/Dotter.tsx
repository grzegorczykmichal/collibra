import css from './Dotter.module.css';

function Dotter() {
  return (
    <span className={css.dotter}>
      <span className={css.dot1}>.</span>
      <span className={css.dot2}>.</span>
      <span className={css.dot3}>.</span>
    </span>
  );
}

export { Dotter };
