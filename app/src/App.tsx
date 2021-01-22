import './App.css';
import { useQuery } from 'react-query';
import { Route, Link, useParams } from 'react-router-dom';

function Pokemon() {
  const { name } = useParams<{ name: string }>();
  return (
    <h2>
      <Link to="/">back</Link>
      {name}
    </h2>
  );
}

function App() {
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

  console.log(data);

  return (
    <>
      <ul className="App">
        {data!.map(({ name }) => (
          <li>
            <Link to={`/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Route path="/:name" component={Pokemon} />
    </>
  );
}

export default App;
