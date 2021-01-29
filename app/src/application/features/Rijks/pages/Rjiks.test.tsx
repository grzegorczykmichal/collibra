import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { App } from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router';

const testRender = () => {
  const queryClient = new QueryClient();
  return render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </MemoryRouter>,
  );
};

test('renders learn react link', async () => {
  const wfs = jest.spyOn(window, 'fetch');

  wfs.mockImplementationOnce(() => {
    const body = {
      results: [{ name: 'TESTNAME' }],
    };
    const res = new Response(JSON.stringify(body));
    return Promise.resolve(res);
  });

  // const expectation = nock('https://pokeapi.co')
  //   .get('/api/v2/pokemon')
  //   .reply(200, {
  //     results: [{ name: 'Pokename' }],
  //   });

  const { getByText, debug } = testRender();

  await waitForElementToBeRemoved(getByText(/Loading.../));

  expect(wfs).toHaveBeenCalledTimes(1);
  debug();
  // expect(wfs).toHaveBeenCalledWith('asd');
  // expect(wfs).toHaveBeenCalledWith('asd');

  // expect(getByText('Pokename')).toBeInTheDocument();
});
