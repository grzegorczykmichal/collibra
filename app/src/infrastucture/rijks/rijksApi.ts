import axios from 'axios';

const rijksApi = axios.create({
  baseURL: process.env.REACT_APP_RIJKS_API_URL,
});

rijksApi.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['key'] = process.env.REACT_APP_RIJKS_API_KEY;
  return config;
});

export { rijksApi };
