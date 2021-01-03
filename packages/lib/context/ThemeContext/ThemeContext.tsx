import * as React from 'react';
import { ThemeContext } from '../../types';
import { useThemePreference } from './useThemePreference';

const ThemeStateContext = React.createContext<ThemeContext>({
  theme: undefined,
});

const ThemeDispatchContext = React.createContext<{
  dispatch: () => void;
}>({
  dispatch: () => null,
});

const ThemeContextProvider: React.FC = ({ children }) => {
  const { theme, toggleTheme } = useThemePreference();

  const memoizedTheme = React.useMemo(() => theme, [theme]);

  return (
    <ThemeStateContext.Provider value={{ theme: memoizedTheme }}>
      <ThemeDispatchContext.Provider value={{ dispatch: toggleTheme }}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};

const useThemeState = () => {
  const { theme } = React.useContext(ThemeStateContext);

  return theme;
};

const useThemeDispatch = () => {
  const { dispatch } = React.useContext(ThemeDispatchContext);

  return dispatch;
};

export { ThemeContextProvider, useThemeState, useThemeDispatch };
