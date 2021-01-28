import { FC } from 'react';
import styles from './TopBar.module.css';

const TopBar: FC = ({ children }) => {
  return <nav className={styles.root}>{children}</nav>;
};

export { TopBar };
