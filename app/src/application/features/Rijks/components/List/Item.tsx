import css from './Item.module.css';
import { FC } from 'react';

const Item: FC<{ className?: string }> = function ({ className, children }) {
  return <li className={className}>{children}</li>;
};
export { Item };
