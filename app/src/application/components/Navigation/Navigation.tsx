import { FC } from 'react';
import styles from './Navigation.module.css';

const Navigation: FC = ({ children }) => {
  return <nav className={styles.root}>{children}</nav>;
};

export { Navigation };
