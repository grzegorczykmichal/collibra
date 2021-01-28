import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Chip } from '../../../../components';
import { Body, Header, Section } from '../Section';

const Materials: FC<{
  className?: string;
  materials?: string[];
}> = function ({ className = '', materials = [] }) {
  return (
    <Section className={className}>
      <Header>Materials</Header>
      <Body>
        {materials.map((material) => {
          return (
            <Chip key={material}>
              <Link to={`/rijks?material=${encodeURIComponent(material)}`}>
                {material}
              </Link>
            </Chip>
          );
        })}
      </Body>
    </Section>
  );
};
export { Materials };
