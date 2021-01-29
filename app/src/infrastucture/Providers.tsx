import { FC } from 'react';
import { DribbleProvider } from './dribble';
import { ReactQueryProvider } from './react-query';
import { ReduxProvider } from './redux';

const Providers: FC<{ root: any }> = ({ root, children }) => {
  return (
    <ReduxProvider root={root}>
      <ReactQueryProvider>
        <DribbleProvider
          clientId={process.env.REACT_APP_DRIBBLE_CLIENT_ID}
          state={process.env.REACT_APP_DRIBBLE_STATE}
          scopes={process.env.REACT_APP_DRIBBLE_SCOPES}
        >
          {children}
        </DribbleProvider>
      </ReactQueryProvider>
    </ReduxProvider>
  );
};

export { Providers };
