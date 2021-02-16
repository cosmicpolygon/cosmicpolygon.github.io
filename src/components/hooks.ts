import { useState, useEffect } from 'react';

const getHeight = () => window.innerHeight 
  || document.documentElement.clientHeight 
  || document.body.clientHeight;

export function useCurrentHeight() {
  let [height, setHeight] = useState(getHeight());

  useEffect(() => {
    let timeoutId = null;
    const resize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setHeight(getHeight()), 256);
    };

    resize();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    }
  }, [])

  return height;
}
