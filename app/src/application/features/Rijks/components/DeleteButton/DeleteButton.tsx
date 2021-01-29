import { Button } from '../../../../components';
import css from './DeleteButton.module.css';
import classnames from 'classnames';
import { Snackbar } from '@material-ui/core';
import { useMutation } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rijksApi } from '../../../../../infrastucture/rijks';

type Props = { className?: string; objectNumber: string };

function DeleteButton({ className, objectNumber }: Props) {
  const { mutate, isLoading, isError, error, reset: deleteReset } = useMutation<
    void,
    { message: string },
    { objectNumber: string }
  >(async (data) => {
    return rijksApi.post('https://httpstat.us/401/cors');
  });

  return (
    <>
      <Snackbar
        autoHideDuration={4000}
        open={isError}
        message={error?.message}
        onClose={deleteReset}
      />
      <Button
        className={classnames(css.root, className)}
        onClick={() => mutate({ objectNumber })}
        disabled={isLoading}
      >
        <FontAwesomeIcon icon="trash" /> Remove art :(
      </Button>
    </>
  );
}
export { DeleteButton };
