import { Color } from '../../models';
import css from './Title.module.css';

type Props = {
  colors?: Color[];
  title: string;
};

function Title({ colors = [], title }: Props) {
  return <h1 className={css.root}>{title}</h1>;
}
export { Title };
