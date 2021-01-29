import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { rijksApi } from '../../../../infrastucture/rijks';
import { Spinner } from '../../../components';
import {
  Author,
  ColorsGraph,
  DeleteButton,
  Description,
  Dimensions,
  GoBack,
  Materials,
  Medium,
  Origins,
  Title,
  Types,
  Year,
} from '../components';
import { Image } from '../components/Image';
import { useBackgroundColor } from '../hooks';
import { RjikApiResponseArtObject } from '../models';
import css from './RijksObject.module.css';

type ErrorType = { message: string };

function Error({ error }: { error: ErrorType | null }) {
  const message = error ? error.message : 'Unknown Error';
  return (
    <div className={css.centered}>
      <div className={css.errorMessage}>{message}</div>
      <GoBack />
    </div>
  );
}

function RijksObject() {
  const { objectNumber } = useParams<{ objectNumber: string }>();

  const { isLoading, isError, error, data } = useQuery<
    RjikApiResponseArtObject,
    ErrorType
  >(
    ['rjik_objects', objectNumber],
    async () => {
      const response = await rijksApi.get(`/collection/${objectNumber}`);
      return response.data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    },
  );

  const colors = data?.artObject.colors || [];
  const normalizedColors = data?.artObject.colorsWithNormalization || [];
  useBackgroundColor(colors);

  if (isLoading) {
    return (
      <div className={css.centered}>
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return <Error error={error} />;
  }

  if (!data) {
    return null;
  }

  const { artObject } = data;
  return (
    <div className={css.page}>
      <div className={css.title}>
        <GoBack className={css.backButton} />
        <Title title={artObject.title} />
      </div>
      <Image
        image={artObject.webImage}
        alt={artObject.title}
        calssName={css.image}
      />
      <ColorsGraph
        className={css.colors}
        colors={colors}
        normalizedColors={normalizedColors}
      />
      <div className={css.delete}>
        <DeleteButton
          className={css.deleteButton}
          objectNumber={objectNumber}
        />
      </div>
      <Author className={css.author} author={artObject.principalMakers[0]} />
      <Year className={css.year} year="1987" />
      <Description
        className={css.description}
        description={artObject.plaqueDescriptionEnglish}
      />
      <Materials className={css.materials} materials={artObject.materials} />
      <Types className={css.types} types={artObject.objectTypes} />
      <Medium className={css.medium} medium={artObject.physicalMedium} />
      <Origins className={css.origins} origins={artObject.productionPlaces} />
      <Dimensions className={css.dimensions} dimensions={artObject.subTitle} />
    </div>
  );
}

export { RijksObject };
