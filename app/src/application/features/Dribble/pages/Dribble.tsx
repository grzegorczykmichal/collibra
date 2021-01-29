import { DribbleLoginButton } from '../../../../infrastucture';
import css from './Dribble.module.css';

function Dribble() {
  return (
    <div className={css.page}>
      <DribbleLoginButton />
    </div>
  );
}

export { Dribble };
