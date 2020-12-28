import * as React from 'react';
import { Sun, Moon } from '../Icons';
import { useThemePreference } from './useThemePreference';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemePreference();

  return (
    <a href="#" onClick={toggleTheme}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </a>
  );
};

export default ThemeSwitch;
