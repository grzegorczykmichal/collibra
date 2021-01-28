import { FC, Children, isValidElement, cloneElement } from 'react';
import css from './Section.module.css';
import { Theme } from './ThemeType';
import classnames from 'classnames';

const Section: FC<{
  className?: string;
  theme?: Theme;
}> = function ({ className = '', theme = 'light', children }) {
  return (
    <section
      className={classnames(css.root, className, {
        [css.light]: theme === 'light',
        [css.dark]: theme === 'dark',
      })}
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null;
        return cloneElement(child, { theme });
      })}
    </section>
  );
};
export { Section };
