import { FC } from 'react';
import { Body, Header, Section } from '../Section';

const Origins: FC<{
  origins: string[];
  className?: string;
}> = function ({ className = '', origins }) {
  if (origins.length === 0) {
    return null;
  }

  return (
    <Section className={className}>
      <Header>Origins</Header>
      <Body>
        <p>{origins.join(',')}</p>
      </Body>
    </Section>
  );
};
export { Origins };
