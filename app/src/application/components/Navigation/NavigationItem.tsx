import { ComponentProps, FC } from 'react';
import styles from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItem: FC<ComponentProps<NavLink>> = (props) => {
  return (
    <NavLink
      activeClassName={styles.active}
      className={styles.root}
      {...props}
    />
  );
};

export { NavigationItem };
