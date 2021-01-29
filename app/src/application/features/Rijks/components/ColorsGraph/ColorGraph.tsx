import { FC } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { Color, NormalizedColor } from '../../models';
import css from './ColorsGraph.module.css';

type Props = {
  width: number;
  color: string;
  normalizedColor: string;
};

function ColorBlock({ width, color, normalizedColor }: Props) {
  const url =
    normalizedColor === ''
      ? ''
      : `/rijks?f.normalized32Colors.hex=${encodeURIComponent(
          normalizedColor,
        )}`;

  return (
    <Link
      className={css.colorBlock}
      style={{ flexBasis: `${width}%`, background: color }}
      to={url}
      title={`${color} -> ${normalizedColor}`}
    ></Link>
  );
}

const ColorsGraph: FC<{
  className?: string;
  colors: Color[];
  normalizedColors: NormalizedColor[];
}> = ({ className = '', colors = [], normalizedColors }) => {
  if (colors.length === 0) {
    return null;
  }

  return (
    <div className={classnames(css.root, className)}>
      {colors.map((c, i) => {
        const match = normalizedColors.find((nc) => nc.originalHex === c.hex);
        const normalizedColor = match ? match.normalizedHex : '';
        return (
          <ColorBlock
            key={i}
            width={c.percentage}
            color={c.hex}
            normalizedColor={normalizedColor}
          />
        );
      })}
    </div>
  );
};
export { ColorsGraph };
