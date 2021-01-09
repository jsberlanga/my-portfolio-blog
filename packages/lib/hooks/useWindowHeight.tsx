import * as React from 'react';

const windowExists = typeof window !== 'undefined';

export const useWindowHeight = () => {
  const [height, setHeight] = React.useState(
    windowExists ? window.innerHeight : 0,
  );

  React.useEffect(() => {
    if (!windowExists) return undefined;

    const updateHeight = () => setHeight(window.innerHeight);

    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return height;
};
