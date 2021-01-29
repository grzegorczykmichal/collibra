import css from './List.module.css';
import { FC } from 'react';
import classnames from 'classnames';

const List: FC<{ className?: string }> = function ({ className, children }) {
  return <ul className={classnames(css.root, className)}>{children}</ul>;
};
export { List };
