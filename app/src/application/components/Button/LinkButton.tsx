import { FC, ComponentProps } from 'react';
import css from './Button.module.css';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

type Props = ComponentProps<Link> & { secondary?: boolean };

const LinkButton: FC<Props> = function ({ className, secondary, ...props }) {
  return (
    <Link
      className={classnames(css.root, className, {
        [css.secondary]: secondary,
      })}
      {...props}
    />
  );
};
export { LinkButton };
