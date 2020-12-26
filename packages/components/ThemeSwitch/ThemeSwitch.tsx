import * as React from 'react';
import { Sun, Moon } from '../Icons';
import { useThemePreference } from '@juliosoto/utils/hooks';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemePreference();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeSwitch;
