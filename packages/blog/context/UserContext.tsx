import * as React from 'react';

interface UserState {
  user?: {
    _id?: string;
    votes?: string[];
  };
}

type UserDispatchAction =
  | {
      type: 'VOTE';
      payload: { postId: string };
    }
  | { type: 'SET_USER'; payload: { user: UserState } };

const initialState: UserState = { user: null };

const UserStateContext = React.createContext<UserState>(initialState);

const UserDispatchContext = React.createContext<{
  handleVote: React.Dispatch<UserDispatchAction>;
}>({
  handleVote: () => null,
});

const userReducer: React.Reducer<UserState, UserDispatchAction> = (
  state,
  action,
) => {
  switch (action.type) {
    case 'VOTE':
      return {
        ...state,
        votes: [...state.user.votes, action.payload.postId],
      };
    case 'SET_USER':
      return {
        ...state,
        ...action.payload.user,
      };
    default:
      return state;
  }
};

const userVoteAction = async (
  dispatch: React.Dispatch<UserDispatchAction>,
  postId: string,
) => dispatch({ type: 'VOTE', payload: { postId } });

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(userReducer, initialState);

  React.useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/user', { method: 'GET' });

      if (response.ok && response.status === 200) {
        const data = await response.json();

        dispatch({ type: 'SET_USER', payload: { user: data } });
      }
    };
    fetchUser();
  }, []);

  const memoizedState = React.useMemo(() => state, [state]);

  return (
    <UserStateContext.Provider value={{ ...memoizedState }}>
      <UserDispatchContext.Provider value={{ handleVote: dispatch }}>
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

export { UserContextProvider, useUserState, useUserDispatch, userVoteAction };
