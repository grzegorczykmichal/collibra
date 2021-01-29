import { useState } from 'react';
import { useMutation } from 'react-query';
import css from './Description.module.css';
import { Body, Header, Section } from '../Section';
import { DescriptionForm } from './DescriptionForm';
import { Button } from '../../../../components';
import { rjiksApi } from '../../lib/rjiksApi';
import { Snackbar } from '@material-ui/core';
import { AddDescription } from './AddDescription';

type Props = { description: string; className: string };

function Description({ description, className }: Props) {
  const [isEditMode, setEditMode] = useState(false);
  function startEdit() {
    setEditMode(true);
  }
  function cancelEdit() {
    setEditMode(false);
  }

  const { mutate, isLoading, isError, error, reset } = useMutation<
    void,
    { message: string },
    { description: string }
  >((data) => {
    return rjiksApi.post('https://httpstat.us/400/cors', data);
  });

  return (
    <>
      <Snackbar
        autoHideDuration={4000}
        open={isError}
        message={error?.message}
        onClose={reset}
      />
      <Section className={className}>
        <Header>Description</Header>
        <Body>
          {isEditMode ? (
            <DescriptionForm
              disabled={isLoading}
              initialDescription={description}
              onClose={cancelEdit}
              onSubmit={mutate}
            />
          ) : !description || description === '' ? (
            <AddDescription onClick={startEdit} />
          ) : (
            <>
              <p className={css.description}>{description}</p>
              <Button onClick={startEdit}>edit</Button>
            </>
          )}
        </Body>
      </Section>
    </>
  );
}
export { Description };
