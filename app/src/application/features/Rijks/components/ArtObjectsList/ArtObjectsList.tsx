import { Link } from 'react-router-dom';
import { ArtObjectCollectionItem } from '../../models';
import classnames from 'classnames';
import { List, Item } from '../List';
import css from './ArtObjectsList.module.css';

type Props = {
  artObjects: ArtObjectCollectionItem[];
  className?: string;
};

function EmptyList() {
  return (
    <div className={css.emptyList}>
      <p>Sorry there is no art so fine.</p>
      <br />
      <Link className={css.buttonLink} to={`/rijks`}>
        Go back to the list
      </Link>
    </div>
  );
}

function ArtObjectsList({ artObjects, className }: Props) {
  if (artObjects.length === 0) {
    return <EmptyList />;
  }

  return (
    <List className={classnames(css.list, className)}>
      {artObjects.map((art, i) => {
        return (
          <Item className={css.item} key={art.objectNumber}>
            <Link
              data-testid={`artObject:item:${art.objectNumber}`}
              className={css.link}
              to={`/rijks/${art.objectNumber}`}
            >
              <div className={css.artObjectItem}>
                <p className={css.title}>{art.title}</p>
                <p className={css.author}> by {art.principalOrFirstMaker}</p>
              </div>
            </Link>
          </Item>
        );
      })}
    </List>
  );
}

export { ArtObjectsList };
