import axios from 'axios';

const rjiksApi = axios.create({
  baseURL: 'https://www.rijksmuseum.nl/api/en',
});

rjiksApi.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['key'] = 'nNPOC4k6';
  return config;
});

export { rjiksApi };
