import { useLocation, useRouteMatch } from 'react-router';
import { LinkButton } from '../../../../components';
import css from './Pagination.module.css';
import { stringify, parse } from 'query-string';

type Props = { total: number };

function Pagination({ total }: Props) {
  const { search } = useLocation();
  const { url } = useRouteMatch();
  const searchObject = parse(search);
  const page = searchObject['p']
    ? Number.parseInt(searchObject['p'] as string)
    : 1;

  const size = 20;
  searchObject['ps'] = String(size);

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
    <div className={css.root}>
      {page > 1 && (
        <div className={css.previous}>
          <LinkButton secondary={true} to={`${previousPageUrl}`}>
            previous
          </LinkButton>
        </div>
      )}

      <div className={css.count}>
        {page} of {Math.ceil(total / size)}
      </div>
      <div className={css.next}>
        <LinkButton secondary={true} to={`${nextPageUrl}`}>
          next
        </LinkButton>
      </div>
    </div>
  );
}
export { Pagination };
