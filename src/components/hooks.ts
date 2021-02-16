import { useEffect } from 'react';

export function useCurrentHeight(): number {
  let height;

  useEffect(() => {
    let timeoutId = null;
    const resize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => height = window.innerHeight, 256);
    };
    
    height = window.innerHeight;

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    }
  }, [])

  return height;
}
