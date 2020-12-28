import * as React from 'react';
import { Sun, Moon } from '../Icons';
import { useThemeDispatch, useThemeState } from '@juliosoto/utils/context';

interface ThemeSwitchProps {
  fill?: string;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ fill }) => {
  const theme = useThemeState();
  const toggleTheme = useThemeDispatch();

  return (
    <a href="#" onClick={toggleTheme}>
      {theme === 'light' ? <Sun fill={fill} /> : <Moon />}
    </a>
  );
};

export default ThemeSwitch;
