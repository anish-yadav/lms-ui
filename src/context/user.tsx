import { createContext, ReactNode, useMemo, useState } from "react";

type UserContextType = {
  user: null | string;
  setUser: React.Dispatch<React.SetStateAction<null>>;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: (): any => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<null>(null);

  // change values only when user or set user changes
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
