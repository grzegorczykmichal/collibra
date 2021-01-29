import { FC } from 'react';
import { Body, Header, Section } from '../Section';

const Dimensions: FC<{
  className?: string;
  dimensions: string;
}> = function ({ className = '', dimensions }) {
  return (
    <Section className={className}>
      <Header>Dimensions</Header>
      <Body>{dimensions}</Body>
    </Section>
  );
};
export { Dimensions };
