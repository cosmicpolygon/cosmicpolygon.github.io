import { useEffect } from 'react';

export function useCurrentHeight(): number {
  let height = typeof window !== 'undefined' ? window.innerHeight : 0;

  useEffect(() => {
    let timeoutId = null;
    const resize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => height = window.innerHeight, 256);
    };

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    }
  }, [])

  return height;
}
