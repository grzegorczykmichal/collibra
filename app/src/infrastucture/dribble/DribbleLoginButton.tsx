import { useDribble } from './DribbleContext';

function DribbleLoginButton() {
  const { authenticationUrl } = useDribble();
  return <a href={authenticationUrl}>Login with Dribble</a>;
}

export { DribbleLoginButton };
