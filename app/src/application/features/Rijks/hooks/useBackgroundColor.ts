import { useLayoutEffect, useRef } from 'react';
import { Color } from '../models';

const setColorVarialbe = (element: HTMLElement, value: string) => {
  element.style.setProperty('--backgroundColor', value);
};

const getColorVarialbe = (element: HTMLElement) =>
  getComputedStyle(element).getPropertyValue('--backgroundColor');

function useBodyBackgroundColor(colors: Color[] = []) {
  const backgroundColorRef = useRef(getColorVarialbe(document.documentElement));

  useLayoutEffect(() => {
    if (colors.length === 0) {
      return;
    }

    const originalBackgroundColor = backgroundColorRef.current;

    const [mostFrequentColorOlot] = colors;
    setColorVarialbe(document.documentElement, mostFrequentColorOlot.hex);

    return () => {
      setColorVarialbe(document.documentElement, originalBackgroundColor);
    };
  }, [colors, backgroundColorRef]);
  return null;
}

function useBackgroundColor<T extends HTMLElement>(colors: Color[]) {
  const elementRef = useRef<T>(null);
  useLayoutEffect(() => {
    if (colors.length === 0) {
      return;
    }
    if (!elementRef.current) {
      return;
    }

    const originalBackgroundColor = getColorVarialbe(elementRef.current);
    const restore = () =>
      setColorVarialbe(elementRef.current!, originalBackgroundColor);
    const [mostFrequentColorOlot] = colors;
    setColorVarialbe(elementRef.current, mostFrequentColorOlot.hex);
    return () => {
      restore();
    };
  }, [colors]);
  return elementRef;
}

export { useBodyBackgroundColor, useBackgroundColor };
