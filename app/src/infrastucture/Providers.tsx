import { FC } from 'react';
import { DribbleProvider } from './dribble';
import { ReactQueryProvider } from './react-query';
import { ReduxProvider } from './redux';

const Providers: FC<{ root: any }> = ({ root, children }) => {
  return (
    <ReduxProvider root={root}>
      <ReactQueryProvider>
        <DribbleProvider
          clientId="4a75e32c2cc0d4220b0935d3a0c69914b541395f403f70f2a44fbbe256c8924f"
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
