export type Pokemon = {
  name: string;
};

export type Pokemons = {
  count: number;
  results: Pokemon[];
  next: string | null;
  previous: string | null;
};
