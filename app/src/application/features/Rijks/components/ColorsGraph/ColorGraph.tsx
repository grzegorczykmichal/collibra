import { FC } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { Color } from '../../models';
import css from './ColorsGraph.module.css';

function ColorBlock({ width, color }: { width: number; color: string }) {
  return (
    <Link
      className={css.colorBlock}
      style={{ flexBasis: `${width}%`, background: color }}
      to={`/rijks?f.normalized32Colors.hex=${encodeURIComponent(color)}`}
    ></Link>
  );
}

const ColorsGraph: FC<{ className?: string; colors: Color[] }> = ({
  className = '',
  colors = [],
}) => {
  if (colors.length === 0) {
    return null;
  }

  return (
    <div className={classnames(css.root, className)}>
      {colors.map((c, i) => (
        <ColorBlock key={i} width={c.percentage} color={c.hex} />
      ))}
    </div>
  );
};
export { ColorsGraph };
