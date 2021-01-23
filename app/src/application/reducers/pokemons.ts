import { Reducer, Action } from 'redux';
import { Pokemons } from '../models';

type PokemonsResponse = {
  count: number;
  results: {
    name: string;
  }[];
  next: string | null;
  previous: string | null;
};

type Payload<T> = {
  payload: T;
};

type DataAction = Action<'API_CALL_SUCCESS_POKEMON'> &
  Payload<PokemonsResponse>;

const pokemons: Reducer<Pokemons, DataAction> = (
  state = {
    count: 0,
    results: [],
    next: null,
    previous: null,
  },
  action,
) => {
  if (action.type === 'API_CALL_SUCCESS_POKEMON') {
    return {
      ...action.payload,
    };
  }
  return state;
};

export { pokemons };
