import { useLayoutEffect } from 'react';
import { Color } from '../models';

const setColorVarialbe = (element: HTMLElement, value: string) => {
  element.style.setProperty('--backgroundColor', value);
};

function useBackgroundColor(colors: Color[] = []) {
  useLayoutEffect(() => {
    if (colors.length === 0) {
      return;
    }

    const [mostFrequentColorOlot] = colors;
    setColorVarialbe(document.documentElement, mostFrequentColorOlot.hex);

    return () => {
      setColorVarialbe(document.documentElement, 'var(--light1)');
    };
  }, [colors]);
  return null;
}

export { useBackgroundColor };
