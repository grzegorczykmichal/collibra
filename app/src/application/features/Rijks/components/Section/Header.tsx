import { FC, ElementType } from 'react';
import css from './Header.module.css';
import { Theme } from './ThemeType';
import classnames from 'classnames';

const Header: FC<{ as?: ElementType; theme?: Theme }> = function ({
  as = 'h3',
  theme = 'light',
  children,
}) {
  const Component = as;
  return (
    <Component
      className={classnames(css.root, {
        [css.light]: theme === 'light',
        [css.dark]: theme === 'dark',
      })}
    >
      <span className={css.text}>{children}</span>
    </Component>
  );
};
export { Header };
