import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';
import { Button } from '../../../../components';

function GoBack({ className = '' }: { className?: string }) {
  const { goBack } = useHistory();
  return (
    <Button
      className={classnames(className)}
      role="link"
      onClick={() => goBack()}
    >
      <FontAwesomeIcon icon="arrow-left" />
      &nbsp;back
    </Button>
  );
}
export { GoBack };
