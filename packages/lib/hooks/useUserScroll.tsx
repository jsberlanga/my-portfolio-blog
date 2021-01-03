import { useState, useEffect } from 'react';

interface UserUserScroll {
  show?: number;
  hide?: number;
}

export const useUserScroll = ({ show = 1000, hide = 0 }: UserUserScroll) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!scroll && window.scrollY >= show) {
        setScroll(true);
      }
      if (scroll && window.scrollY <= hide) {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [show, hide, scroll]);

  return scroll;
};
