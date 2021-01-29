import { FC } from 'react';
import { Body, Header, Section } from '../Section';
import { Maker } from '../../models';

const Author: FC<{
  author: Maker | null | undefined;
  className?: string;
}> = function ({ className = '', author }) {
  if (!author) {
    return null;
  }

  const { name, placeOfBirth, dateOfBirth } = author;

  return (
    <Section className={className}>
      <Header>Author</Header>
      <Body>
        <p>{name}</p>
        {(dateOfBirth || placeOfBirth) && (
          <p>
            Born {dateOfBirth} {placeOfBirth ? `in ${placeOfBirth}` : ''}
          </p>
        )}
      </Body>
    </Section>
  );
};
export { Author };
