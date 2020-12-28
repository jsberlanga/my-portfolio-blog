import * as React from 'react';
import { Sun, Moon } from '../Icons';
import { useThemeDispatch, useThemeState } from '@juliosoto/utils/context';

const ThemeSwitch = () => {
  const theme = useThemeState();
  const toggleTheme = useThemeDispatch();

  return (
    <a href="#" onClick={toggleTheme}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </a>
  );
};

export default ThemeSwitch;
