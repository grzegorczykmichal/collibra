import React from 'react';

type User = { name: string; avatar: string };
type Login = (loginData: any) => void;
type Logout = () => void;

type ContextType = { user: User | null; login: Login; logout: Logout };

const UserContext = React.createContext<ContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

UserContext.displayName = 'UserContext';

const UserProvider: React.FC<{ user: User | null }> = ({ user, ...props }) => {
  const login = () => {};
  const logout = () => {};

  return <UserContext.Provider value={{ user, login, logout }} {...props} />;
};

function useUser() {
  return React.useContext(UserContext);
}

export { UserProvider, useUser };
