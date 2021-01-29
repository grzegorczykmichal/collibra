import React from 'react';
import {
  render,
  waitForElementToBeRemoved,
  fireEvent,
} from '@testing-library/react';
import { Rijks } from './Rijks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter, Route } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(
    'https://www.rijksmuseum.nl/api/en/collection*',
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          elapsedMilliseconds: 0,
          count: 711153,
          countFacets: { hasimage: 455596, ondisplay: 8517 },
          artObjects: [
            {
              links: {
                self: 'http://www.rijksmuseum.nl/api/en/collection/BK-AM-33-G',
                web: 'http://www.rijksmuseum.nl/en/collection/BK-AM-33-G',
              },
              id: 'en-BK-AM-33-G',
              objectNumber: 'BK-AM-33-G',
              title: 'Ten weepers from the tomb of Isabella of Bourbon 1',
              hasImage: true,
              principalOrFirstMaker: 'Borman workshop, Renier van Thienen (I)',
              longTitle:
                'Ten weepers from the tomb of Isabella of Bourbon, Borman workshop (attributed to), Renier van Thienen (I) (attributed to), c. 1475 - c. 1476',
              showImage: true,
              permitDownload: true,
              webImage: {
                guid: '403eee98-65fa-4532-99a1-714b022aaa82',
                offsetPercentageX: 0,
                offsetPercentageY: 0,
                width: 1656,
                height: 2500,
                url:
                  'https://lh3.ggpht.com/BaIwY8pOBetOdRlZSJRPE1M2Z4KxkU9aOoKphqig0aMK9KhnlvN03AFYBaQxXV5ejHNNcaaSwQMmzeprmZhpFUy7pg=s0',
              },
              headerImage: {
                guid: '85a7b8a2-5418-4eaa-8eec-f5186554d89f',
                offsetPercentageX: 0,
                offsetPercentageY: 0,
                width: 1920,
                height: 460,
                url:
                  'https://lh5.ggpht.com/yW_KqRG6QRPHw3uGr341o6UL0tIJdafJecy79SmO4bGraMZKTwpG2fwW7jMQflTwg_qEKjMdb808XEFyKVfI8PmDmyk=s0',
              },
              productionPlaces: ['Brussels'],
            },
            {
              links: {
                self: 'http://www.rijksmuseum.nl/api/en/collection/BK-AM-33-D',
                web: 'http://www.rijksmuseum.nl/en/collection/BK-AM-33-D',
              },
              id: 'en-BK-AM-33-D',
              objectNumber: 'BK-AM-33-D',
              title: 'Ten weepers from the tomb of Isabella of Bourbon 2',
              hasImage: true,
              principalOrFirstMaker: 'Borman workshop, Renier van Thienen (I)',
              longTitle:
                'Ten weepers from the tomb of Isabella of Bourbon, Borman workshop (attributed to), Renier van Thienen (I) (attributed to), c. 1475 - c. 1476',
              showImage: true,
              permitDownload: true,
              webImage: {
                guid: 'cc0d028f-2bc5-4770-b378-1afa99e1bf77',
                offsetPercentageX: 0,
                offsetPercentageY: 0,
                width: 1655,
                height: 2500,
                url:
                  'https://lh6.ggpht.com/zEY5JwpbGa7M7ueF5Nyqx3N0xeCXrQ_Ck83xIws2OxWScEOdOfxv-jZwRqSoxfz4Kqq4o96XKkIggCx3_JUjpYolsw=s0',
              },
              headerImage: {
                guid: '6311e38e-9b26-49ac-b9b9-c091b0de510a',
                offsetPercentageX: 0,
                offsetPercentageY: 0,
                width: 1920,
                height: 460,
                url:
                  'https://lh4.ggpht.com/DDe9S-BYnr8N63J-X3alws5KziMq_QAeLPgTBzH2XDXTjlzQQAzHCV7FeaQi1_yaGd4j_MP8ef2y4whbUNZsY7nzihj-=s0',
              },
              productionPlaces: ['Brussels'],
            },
          ],
        }),
      );
    },
  ),
);

beforeAll(() => server.listen());
afterAll(() => server.close());

const testRender = (context = {}) => {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Route path="/">
          <Rijks />
        </Route>
        <Route
          path="/rijks/:objectNumber"
          render={({ location }) => {
            context.location = location;
            return <div>mock details page</div>;
          }}
        />
      </MemoryRouter>
      ,
    </QueryClientProvider>,
  );
};

test('Should render art objects item fetched from rinks api', async () => {
  const { getByTestId, getAllByText, getByText } = testRender();

  await waitForElementToBeRemoved(getByTestId('spinner'));

  expect(
    getByText('Ten weepers from the tomb of Isabella of Bourbon 1'),
  ).toBeInTheDocument(1);
  expect(
    getByText('Ten weepers from the tomb of Isabella of Bourbon 2'),
  ).toBeInTheDocument(1);
  expect(
    getAllByText('by Borman workshop, Renier van Thienen (I)'),
  ).toHaveLength(2);
});

test('Should redirect to art object details when item clicked', async () => {
  const context = { location: '' };
  const { getByTestId, getByText } = testRender(context);

  await waitForElementToBeRemoved(getByTestId('spinner'));

  const artObjectLink = getByTestId(`artObject:item:BK-AM-33-D`);

  fireEvent.click(artObjectLink);

  expect(context.location.pathname).toBe('/rijks/BK-AM-33-D');
  expect(getByText('mock details page')).toBeInTheDocument();
});
