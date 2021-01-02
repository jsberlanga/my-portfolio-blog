import * as React from 'react';

interface UserState {
  user?: {
    _id?: string;
  };
}

type UserDispatchAction = { type: 'SET_USER'; payload: UserState };

const initialState: UserState = { user: null };

const UserStateContext = React.createContext<UserState>(initialState);

const UserDispatchContext = React.createContext<{
  dispatch: React.Dispatch<UserDispatchAction>;
}>({
  dispatch: () => null,
});

const userReducer: React.Reducer<UserState, UserDispatchAction> = (
  state,
  action,
) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(userReducer, initialState);

  React.useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/user', { method: 'GET' });

      if (response.ok && response.status === 200) {
        const { user } = await response.json();

        dispatch({ type: 'SET_USER', payload: { user } });
      }
    };
    fetchUser();
  }, []);

  const memoizedState = React.useMemo(() => state, [state]);

  return (
    <UserStateContext.Provider value={{ ...memoizedState }}>
      <UserDispatchContext.Provider value={{ dispatch }}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

const useUserState = () => {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserContextProvider');
  }
  return context;
};

const useUserDispatch = () => {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserContextProvider');
  }

  return context;
};

export { UserContextProvider, useUserState, useUserDispatch };
