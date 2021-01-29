import { parse } from 'query-string';
import { useLocation } from 'react-router-dom';
import { ColorFilter } from './ColorFilter';
import { Filter } from './Filter';

function Filters() {
  const { search } = useLocation();
  const searchObject = parse(search);

  const {
    'f.normalized32Colors.hex': colorFilter,
    material,
    type,
  } = searchObject as {
    'f.normalized32Colors.hex': string;
    material: string;
    type: string;
  };

  return (
    <div>
      {colorFilter && <ColorFilter color={colorFilter} />}
      {material && <Filter name={'material'} value={material} />}
      {type && <Filter name={'type'} value={type} />}
    </div>
  );
}
export { Filters };
