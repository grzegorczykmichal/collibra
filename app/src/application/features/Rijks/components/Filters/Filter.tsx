import { useRouteMatch } from 'react-router-dom';
import { LinkButton } from '../../../../components';
import css from './Filter.module.css';

type Props = {
  name: string;
  value: string;
};

function Filter({ name, value }: Props) {
  const { url } = useRouteMatch();

  return (
    <div className={css.root}>
      By {name}: <span className={css.value}>{value}</span>
      <LinkButton secondary={true} to={url}>
        &times;
      </LinkButton>
    </div>
  );
}
export { Filter };
