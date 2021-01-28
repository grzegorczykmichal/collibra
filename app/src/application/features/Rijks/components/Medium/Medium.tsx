import { FC } from 'react';
import { Body, Header, Section } from '../Section';

const Medium: FC<{
  medium: string;
  className?: string;
}> = function ({ className = '', medium }) {
  return (
    <Section className={className}>
      <Header>Medium</Header>
      <Body>
        <p>{medium}</p>
      </Body>
    </Section>
  );
};
export { Medium };
