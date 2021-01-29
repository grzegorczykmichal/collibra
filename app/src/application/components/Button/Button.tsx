import { FC, ButtonHTMLAttributes } from 'react';
import css from './Button.module.css';
import classnames from 'classnames';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { secondary?: boolean };

const Button: FC<Props> = function ({
  className,
  secondary = false,
  ...props
}) {
  return (
    <button
      className={classnames(css.root, className, {
        [css.secondary]: secondary,
      })}
      {...props}
    />
  );
};
export { Button };
