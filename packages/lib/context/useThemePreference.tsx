import * as React from 'react';

type Theme = 'light' | 'dark';

const useThemePreference = () => {
  const [theme, setTheme] = React.useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const storeUserSetPreference = (pref) => localStorage.setItem('theme', pref);

  const root = typeof document !== 'undefined' && document.documentElement;

  React.useEffect(() => {
    const initialTheme = root.style.getPropertyValue('--initial-color-mode');
    setTheme(initialTheme === 'dark' ? 'dark' : 'light');
  }, [root.style]);

  React.useEffect(() => {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      storeUserSetPreference('dark');
    }
    if (theme === 'light') {
      root.removeAttribute('data-theme');
      storeUserSetPreference('light');
    }
  }, [theme, root]);

  return { theme, toggleTheme };
};

export { useThemePreference };
