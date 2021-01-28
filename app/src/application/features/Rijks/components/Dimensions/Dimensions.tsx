import { FC, useState } from 'react';
import { Dimension } from '../../models';
import { Body, Header, Section } from '../Section';
import classnames from 'classnames';
import css from './Dimensions.module.css';

const Unit: FC<{ isActive: boolean; onClick: () => void }> = ({
  isActive,
  onClick,
  children,
}) => {
  return (
    <span
      onClick={onClick}
      className={classnames({
        [css.active]: isActive,
      })}
    >
      {children}
    </span>
  );
};

const Dimensions: FC<{
  className?: string;
  units: string[];
  dimensions: Dimension[];
}> = function ({ className = '', dimensions = [], units = [] }) {
  const [unit, setUnit] = useState(units[0] || '');
  const dimensionsByUnit = dimensions.filter((d) => d.unit === unit);
  return (
    <Section className={className}>
      <Header>Dimensions [{unit}]</Header>
      <Body>
        {units.map((u, i) => {
          return (
            <Unit key={i} isActive={u === unit} onClick={() => setUnit(u)}>
              {u}
            </Unit>
          );
        })}
        {dimensionsByUnit.map((dimension, i) => {
          return (
            <p key={i}>
              {dimension.type} - {dimension.value}
              {unit}
            </p>
          );
        })}
      </Body>
    </Section>
  );
};
export { Dimensions };
