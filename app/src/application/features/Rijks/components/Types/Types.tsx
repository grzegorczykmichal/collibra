import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Chip } from '../../../../components';
import { Body, Header, Section } from '../Section';

const Types: FC<{
  className?: string;
  types?: string[];
}> = function ({ className = '', types = [] }) {
  if (types.length === 0) {
    return null;
  }

  return (
    <Section className={className}>
      <Header>Types</Header>
      <Body>
        {types.map((type) => {
          return (
            <Chip key={type}>
              <Link to={`/rijks?type=${encodeURIComponent(type)}`}>{type}</Link>
            </Chip>
          );
        })}
      </Body>
    </Section>
  );
};
export { Types };
