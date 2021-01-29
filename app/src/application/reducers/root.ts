import { combineReducers } from 'redux';
import { pokemons } from './pokemons';

const root = combineReducers({
  pokemons,
});

export type AppState = ReturnType<typeof root>;

export { root };
