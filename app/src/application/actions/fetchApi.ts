import { apiCall } from '../../infrastucture';

function fetchApi(url = 'https://pokeapi.co/api/v2/pokemon') {
  return apiCall({
    url,
    prefix: 'POKEMON',
  });
}

export { fetchApi };
