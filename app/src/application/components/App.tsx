import './App.css';
import { useQuery } from 'react-query';
import { Route, Link, useParams } from 'react-router-dom';
import { connect, ResolveThunks } from 'react-redux';
import { fetchApi } from '../actions';
import { AppState } from '../reducers';

function Pokemon() {
  const { name } = useParams<{ name: string }>();
  return (
    <h2>
      <Link to="/">back</Link>
      {name}
    </h2>
  );
}

type Props = ReturnType<typeof mapStateToProps> &
  ResolveThunks<typeof mapDispatchToProps>;

function App({ count, next, pokemons, fetchApi, fetchNext }: Props) {
  const { error, isLoading, data } = useQuery<{ name: string }[]>(
    'pokemon',
    async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const json = await response.json();
      return json.results;
    },
  );

  if (isLoading) return <h1>'Loading...'</h1>;

  if (error) return <p>An error has occurred: {String(error)}</p>;

  return (
    <>
      <button onClick={() => fetchApi && fetchApi()}>Call api ({count})</button>
      <ul className="App">
        {data!.map(({ name }) => (
          <li key={name}>
            <Link to={`/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <ul className="App">
        {pokemons!.map(({ name }) => (
          <li key={name}>
            <Link to={`/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
      {next && <button onClick={() => fetchNext(next)}>Next</button>}
      <Route path="/:name" component={Pokemon} />
    </>
  );
}

const mapStateToProps = (store: AppState) => {
  return {
    count: store.pokemons.count,
    next: store.pokemons.next,
    pokemons: store.pokemons.results,
  };
};

const mapDispatchToProps = {
  fetchApi,
  fetchNext: (url: string) => fetchApi(url),
};

const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);

export { AppConnected as App };
