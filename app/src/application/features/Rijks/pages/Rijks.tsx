import { parse, stringify } from 'query-string';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { CenteredSpinner } from '../../../components';
import { ArtObjectsList, Filters, Pagination } from '../components';
import { rjiksApi } from '../lib/rjiksApi';
import { RjikApiResponseCollection } from '../models';
import css from './Rijks.module.css';
import classnames from 'classnames';

function Rijks() {
  const { search } = useLocation();
  const searchObject = parse(search);
  const size = 20;
  searchObject['ps'] = String(size);

  const { isLoading, isFetching, data } = useQuery<RjikApiResponseCollection>(
    ['rjik_objects', search],
    async () => {
      const response = await rjiksApi.get(
        `/collection?${stringify(searchObject)}`,
      );
      return response.data;
    },
  );

  const total = data?.count || 0;

  return (
    <div className={css.page}>
      <h1 className={css.title}>
        Rijksmuseum
        <span>Amsterdam</span>
      </h1>
      {<Pagination total={total} />}
      <Filters />
      {isLoading && <CenteredSpinner />}
      {data && (
        <ArtObjectsList
          className={classnames({ [css.fade]: isLoading })}
          artObjects={data.artObjects}
        />
      )}
      {!isFetching && total > 0 && <Pagination total={total} />}
    </div>
  );
}

export { Rijks };
