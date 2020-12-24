import { Sun, Moon } from '@components/Icons';
import { useThemePreference } from '@lib/hooks';
import * as React from 'react';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemePreference();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeSwitch;
