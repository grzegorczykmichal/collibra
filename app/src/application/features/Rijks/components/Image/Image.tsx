import { Image as ImageType } from '../../models';
import css from './Image.module.css';
import classnames from 'classnames';
import { useState } from 'react';
import { Spinner } from '../../../../components';

type Props = { image?: ImageType; alt?: string; calssName?: string };
function Image({ image, alt, calssName }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);
  function handleLoad() {
    setIsLoaded(true);
  }

  if (!image) {
    return null;
  }

  const { url } = image;

  return (
    <div className={classnames(calssName, css.root)}>
      {!isLoaded && (
        <div className={css.centered}>
          <Spinner />
        </div>
      )}
      <img
        className={classnames(css.img, {
          [css.visible]: isLoaded,
        })}
        onLoad={handleLoad}
        src={url}
        alt={alt}
      />
    </div>
  );
}
export { Image };
