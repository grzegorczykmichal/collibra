import { QueryClient, QueryClientProvider } from 'react-query';

function ReactQueryProvider(props: any) {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient} {...props} />;
}

export { ReactQueryProvider };
