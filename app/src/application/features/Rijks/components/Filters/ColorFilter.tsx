import { useBackgroundColor } from '../../hooks';
import { Filter } from './Filter';

function ColorFilter({ color = 'transparent' }: { color?: string }) {
  useBackgroundColor([{ hex: color, percentage: 100 }]);

  return <Filter name={'color'} value={color} />;
}
export { ColorFilter };
