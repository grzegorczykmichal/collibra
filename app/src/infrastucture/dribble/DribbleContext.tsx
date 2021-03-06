import React, { useEffect, useMemo } from 'react';
import axios, { AxiosInstance } from 'axios';
import cookie from 'js-cookie';

type DribbleContextType = {
  authenticationUrl: string;
  token: string | null;
  callApi: AxiosInstance;
  isLoggedIn: () => boolean;
};

const DribbleContext = React.createContext<DribbleContextType>({
  authenticationUrl: '',
  token: null,
  callApi: axios,
  isLoggedIn: () => false,
});

DribbleContext.displayName = 'DribbleContext';

function useLocalStorage(
  key: string,
  defaultValue: string,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
) {
  const prevKeyRef = React.useRef(key);
  const [name, setName] = React.useState<string>(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return defaultValue;
  });

  React.useEffect(() => {
    const prevkey = prevKeyRef.current;
    if (prevkey !== key) {
      window.localStorage.removeItem(prevkey);
      prevKeyRef.current = key;
    }
    window.localStorage.setItem(key, serialize(name));
  }, [key, name, serialize]);

  return [name, setName] as [
    string,
    React.Dispatch<React.SetStateAction<string>>,
  ];
}

const DribbleProvider: React.FC<{
  clientId?: string;
  state?: string;
  scopes?: string;
}> = ({ clientId = '', state = '', scopes = 'upload+public', children }) => {
  const authenticationUrl = useMemo(() => {
    const queryString = `client_id=${clientId}&state=${state}&scope=${scopes}`;
    return `${process.env.REACT_APP_DRIBBLE_AUTHORIZE_URL}?${queryString}`;
  }, [clientId, state, scopes]);

  const [token, setToken] = useLocalStorage('dribble', '');

  useEffect(() => {
    const tokenData = cookie.get('auth_token_data');
    if (tokenData) {
      const tokenDataJson = JSON.parse(tokenData);
      setToken(tokenDataJson.access_token as string);
    } else {
      setToken('');
    }
  }, [setToken]);

  const dribbleAxios = axios.create({
    baseURL: process.env.REACT_APP_DRIBBLE_API_URL,
  });
  dribbleAxios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return (
    <DribbleContext.Provider
      value={{
        authenticationUrl,
        token: token as string,
        callApi: dribbleAxios,
        isLoggedIn: () => token !== '',
      }}
    >
      {children}
    </DribbleContext.Provider>
  );
};

function useDribble() {
  return React.useContext(DribbleContext);
}

export { DribbleProvider, useDribble };
