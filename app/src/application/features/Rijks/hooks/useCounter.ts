import { useState } from 'react';

function useConter(
  initialValue: number,
  { min = 0, max = Infinity }: { min?: number; max?: number } = {},
): [value: number, increment: () => void, decrement: () => void] {
  const [value, setValue] = useState(initialValue);
  const increment = () => {
    setValue((p) => (p + 1 > max ? max : p + 1));
  };
  const decrement = () => {
    setValue((p) => (p - 1 < min ? min : p - 1));
  };

  return [value, increment, decrement] as [
    value: number,
    increment: () => void,
    decrement: () => void,
  ];
}
export { useConter };
