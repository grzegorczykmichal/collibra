import { DribbleLoginButton, useDribble } from '../../../../infrastucture';
import css from './Dribble.module.css';
import { DribbleUser, DribbleShots } from '../components';

function Dribble() {
  const { isLoggedIn } = useDribble();

  return (
    <div className={css.page}>
      {isLoggedIn() ? (
        <>
          <DribbleUser />
          <a href="/.netlify/functions/logout">Logout</a>
          <DribbleShots />
        </>
      ) : (
        <DribbleLoginButton />
      )}
    </div>
  );
}

export { Dribble };
