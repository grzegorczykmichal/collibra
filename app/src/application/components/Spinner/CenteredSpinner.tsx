import css from './CenteredSpinner.module.css';
import { Spinner } from './Spinner';

function CenteredSpinner() {
  return (
    <div className={css.centered}>
      <Spinner />
    </div>
  );
}

export { CenteredSpinner };
