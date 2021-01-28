import { FC } from 'react';
import css from './Body.module.css';
import { Theme } from './ThemeType';
import classnames from 'classnames';

const Body: FC<{ theme?: Theme }> = function ({ theme = 'light', ...props }) {
  return (
    <div
      className={classnames(css.root, {
        [css.light]: theme === 'light',
        [css.dark]: theme === 'dark',
      })}
      {...props}
    />
  );
};
export { Body };
