import { useState } from 'react';
import { useQuery } from 'react-query';
import { rjiksApi } from '../lib/rjiksApi';
import { useParams, Link, useHistory } from 'react-router-dom';
import css from './RijksObject.module.css';
import { RjikApiResponseArtObject } from '../models';
import { Spinner, Portal } from '../../../components';
import {
  ColorsGraph,
  Section,
  Header,
  Body,
  Materials,
  Types,
  Dimensions,
  Author,
  Medium,
} from '../components';
import { useBodyBackgroundColor } from '../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RijksObject() {
  const { goBack } = useHistory();
  const [editDescription, setEditDescription] = useState<boolean>(false);
  const { objectNumber } = useParams<{ objectNumber: string }>();

  const {
    isLoading,
    isError,
    error,
    data,
  } = useQuery<RjikApiResponseArtObject>(
    ['rjik_objects', objectNumber],
    async () => {
      const response = await rjiksApi.get(`/collection/${objectNumber}`);
      return response.data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    },
  );

  const colors = data?.artObject.normalized32Colors || [];
  useBodyBackgroundColor(colors);
  if (isLoading) {
    return (
      <div className={css.centered}>
        <Spinner />
      </div>
    );
  }

  if (isError) {
    const { message = 'Unknown Error' } = error as { message: string };
    return (
      <div className={css.centered}>
        <div className={css.errorMessage}>{message}</div>
        <Link to="/rijks">back</Link>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const { artObject } = data;

  const [author] = artObject.principalMakers || [];

  return (
    <div className={css.page}>
      {/* {editDescription && <Portal>asdasd</Portal>} */}
      <div className={css.title}>
        <button role="link" onClick={() => goBack()}>
          <FontAwesomeIcon icon="arrow-left" />
          back
        </button>
        <h1
          style={{
            color: colors.length > 0 ? colors[0].hex : 'initial',
          }}
        >
          {artObject.title}
        </h1>
      </div>
      {artObject.webImage && (
        <div className={css.image}>
          <img src={artObject.webImage.url} alt="" />
        </div>
      )}
      <ColorsGraph className={css.colors} colors={colors} />
      <div />
      <Author className={css.author} author={author} />
      <Medium className={css.medium} medium={artObject.physicalMedium} />

      <Section className={css.description}>
        <Header>Description</Header>
        <Body>
          {editDescription ? (
            <textarea
              style={{ width: '100%' }}
              name="description"
              id="description"
              rows={10}
              defaultValue={artObject.plaqueDescriptionEnglish}
            ></textarea>
          ) : (
            <p>{artObject.plaqueDescriptionEnglish}</p>
          )}
          {editDescription ? (
            <>
              <button
                onClick={() => {
                  setEditDescription(false);
                }}
              >
                Save
              </button>
              <button
                onClick={() => {
                  setEditDescription(false);
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setEditDescription(true);
              }}
            >
              edit
            </button>
          )}
        </Body>
      </Section>

      <Materials className={css.materials} materials={artObject.materials} />

      <Dimensions
        className={css.dimensions}
        units={['cm', 'inch']}
        dimensions={artObject.dimensions}
      />
      <Types className={css.types} types={artObject.objectTypes} />
    </div>
  );
}

export { RijksObject };
