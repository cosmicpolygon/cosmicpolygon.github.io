import { useState, useEffect } from 'react';

const getHeight = (): number => {
  if (typeof window === `undefined` || typeof document === `undefined`) {
    return 0;
  }

  return (
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  );
};

export function useCurrentHeight(): number {
  let [height, setHeight] = useState(getHeight());

  useEffect(() => {
    let timeoutId = null;
    const resize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setHeight(getHeight()), 256);
    };

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    }
  }, [])

  return height;
}
