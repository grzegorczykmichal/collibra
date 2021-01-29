import { FC, SyntheticEvent } from 'react';
import { Button } from '../../../../components';
import css from './DescriptionForm.module.css';

const DescriptionForm: FC<{
  initialDescription: string;
  disabled: boolean;
  onSubmit: (data: { description: string }) => void;
  onClose: () => void;
}> = function ({ disabled, initialDescription, onSubmit, onClose, ...props }) {
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const form = e.target as typeof e.target & {
      description: HTMLTextAreaElement;
    };
    const description = form.description;
    onSubmit({ description: description.value });
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={disabled} className={css.fieldset}>
        <textarea
          className={css.textarea}
          name="description"
          id="description"
          rows={10}
          defaultValue={initialDescription}
        ></textarea>
        <Button type="submit">Save</Button>
        <Button type="button" secondary={true} onClick={() => onClose()}>
          Cancel
        </Button>
      </fieldset>
    </form>
  );
};
export { DescriptionForm };
