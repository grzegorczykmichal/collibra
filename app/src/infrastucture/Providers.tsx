import { FC } from 'react';
import { DribbleProvider } from './dribble';
import { ReactQueryProvider } from './react-query';
import { ReduxProvider } from './redux';

const Providers: FC<{ root: any }> = ({ root, children }) => {
  return (
    <ReduxProvider root={root}>
      <ReactQueryProvider>
        <DribbleProvider
          clientId="99ddd8c588de9d8fcca6ba56ac5d1f48a4f5e8fcebb1376b2b4d385d9efa232c"
          state="state_1234"
          scope={['public']}
        >
          {children}
        </DribbleProvider>
      </ReactQueryProvider>
    </ReduxProvider>
  );
};

export { Providers };
