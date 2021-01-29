import { store } from './store';
import { Provider } from 'react-redux';

const ReduxProvider = ({ root, ...props }: any) => (
  <Provider store={store(root)} {...props} />
);

export { ReduxProvider };
