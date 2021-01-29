import { Body, Header, Section } from '../Section';

type Props = {
  year: string;
  className?: string;
};

function Year({ className = '', year }: Props) {
  return (
    <Section className={className}>
      <Header>Year</Header>
      <Body>
        <p>{year}</p>
      </Body>
    </Section>
  );
}
export { Year };
