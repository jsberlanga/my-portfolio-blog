import * as React from 'react';

type Theme = 'light' | 'dark';

const useThemePreference = () => {
  const [theme, setTheme] = React.useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const storeUserSetPreference = (pref: Theme) =>
    localStorage.setItem('theme', pref);

  React.useEffect(() => {
    const root = typeof document !== 'undefined' && document.documentElement;

    if (!root) return;

    const initialTheme = root.style.getPropertyValue('--initial-color-mode');
    setTheme(initialTheme === 'dark' ? 'dark' : 'light');
  }, []);

  React.useEffect(() => {
    const root = typeof document !== 'undefined' && document.documentElement;

    if (!root) return;

    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      storeUserSetPreference('dark');
    }
    if (theme === 'light') {
      root.removeAttribute('data-theme');
      storeUserSetPreference('light');
    }
  }, [theme]);

  return { theme, toggleTheme };
};

export { useThemePreference };
