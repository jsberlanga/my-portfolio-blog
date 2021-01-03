import * as React from 'react';
import { useThemePreference } from './useThemePreference';

const ThemeStateContext = React.createContext({ theme: null });
const ThemeDispatchContext = React.createContext({ dispatch: null });

const ThemeContextProvider = ({ children }) => {
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
