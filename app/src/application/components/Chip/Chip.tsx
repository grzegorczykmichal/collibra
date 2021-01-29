import { FC } from 'react';
import css from './Chip.module.css';

const Chip: FC = (props) => {
  return <span className={css.root} {...props} />;
};

export { Chip };
