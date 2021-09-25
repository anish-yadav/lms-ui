import { createContext, ReactNode, useMemo, useState } from "react";
import { getMe, loginUser } from "../service/user";
import { User } from "../types/user";

type UserContextType = {
  user: null | User;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => any;
  refresh: () => any;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  login: async (email: string, password: string): Promise<boolean> => false,
  logout: () => {},
  refresh: async () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    const { error, data } = await loginUser(email, password);
    if (error !== null) {
      return false;
    }
    sessionStorage.setItem("token", data!.token);
    setUser(data!.user);
    return true;
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.reload();
  };

  const refresh = async () => {
    const token = sessionStorage.getItem("token");
    // console.log(token);
    if (token == null) {
      return false;
    }
    const { error, data } = await getMe(token);
    if (error != null) {
      // console.log(error);
      return false;
    }
    // console.log(data);
    sessionStorage.setItem("token", data!.token);
    setUser(data!.user);
    return true;
  };

  // change values only when user or set user changes
  const value = useMemo(() => ({ user, login, logout, refresh }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
