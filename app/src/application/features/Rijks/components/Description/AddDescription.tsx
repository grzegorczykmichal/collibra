import { Button } from '../../../../components';
import css from './AddDescription.module.css';

type Props = {
  onClick: () => void;
};

function AddDescription({ onClick }: Props) {
  return (
    <div className={css.root}>
      <p>This art has no description yet</p>
      <Button onClick={onClick}>Add Description</Button>
    </div>
  );
}
export { AddDescription };
