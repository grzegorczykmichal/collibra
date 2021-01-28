import css from './Rijks.module.css';
import { useQuery } from 'react-query';
import { rjiksApi } from '../lib/rjiksApi';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { RjikApiResponseCollection } from '../models';
import { Spinner } from '../../../components';
import { stringify, parse } from 'query-string';

function Rijks() {
  const { search } = useLocation();
  const { url } = useRouteMatch();
  const searchObject = parse(search);
  const page = searchObject['p']
    ? Number.parseInt(searchObject['p'] as string)
    : 1;

  const size = 20;
  searchObject['ps'] = String(size);

  const { isLoading, isSuccess, data } = useQuery<RjikApiResponseCollection>(
    ['rjik_objects', search],
    async () => {
      const response = await rjiksApi.get(
        `/collection?${stringify(searchObject)}`,
      );
      return response.data;
    },
  );

  const previousPageUrl =
    page > 1
      ? `${url}?${stringify({
          ...searchObject,
          p: page - 1,
        })}`
      : '';

  const nextPageUrl = `${url}?${stringify({
    ...searchObject,
    p: page + 1,
  })}`;

  return (
    <div className={css.page}>
      <h1 className={css.title}>
        Rijksmuseum
        <span>Amsterdam</span>
      </h1>
      <div>
        <div className={css.buttons}>
          {page > 1 && <Link to={`${previousPageUrl}`}>previous</Link>}
          <Link to={`${nextPageUrl}`}>next</Link>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          isSuccess &&
          data && (
            <div>
              <ul className={css.list}>
                {data.artObjects.map((t, i, a) => {
                  return (
                    <li className={css.item} key={t.objectNumber}>
                      <Link to={`${url}/${t.objectNumber}`}>
                        {t.title} by {t.principalOrFirstMaker}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div>
                page {page + 1} of {Math.ceil(data.count / size)}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export { Rijks };
