import { FC, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import css from './Portal.module.css';

const Portal: FC = function ({ children }) {
  const root = useRef(
    (() => {
      const id = 'portal-root';
      if (document.getElementById(id)) {
        return document.getElementById(id);
      }
      const r = document.createElement('div');
      r.setAttribute('id', id);
      return r;
    })(),
  );

  useEffect(() => {
    const r = root.current;
    r && document.body.append(r);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
      r && document.body.removeChild(r);
    };
  }, [root]);

  return root.current
    ? ReactDOM.createPortal(
        <div className={css.root}>{children}</div>,
        root.current,
      )
    : null;
};
export { Portal };
