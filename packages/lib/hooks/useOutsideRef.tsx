import * as React from 'react';

const useOutsideRef = (
  ref: React.RefObject<HTMLDivElement>,
  fn: () => void,
): void =>
  React.useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as HTMLDivElement))
        fn();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return (): void =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, fn]);

export { useOutsideRef };
