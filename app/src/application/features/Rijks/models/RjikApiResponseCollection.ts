import { ArtObjectCollectionItem } from './ArtObjectCollectionItem';

export type RjikApiResponseCollection = {
  elapsedMilliseconds: number;
  count: number;
  artObjects: ArtObjectCollectionItem[];
};
