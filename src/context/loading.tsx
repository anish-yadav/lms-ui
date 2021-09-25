import { createContext, ReactNode, useState } from "react";
import LoadingComponent from "../components/Animations/Loading";

type LoadingContextType = {
  setLoading: (val: boolean) => any;
  isLoading: boolean;
};

export const LoadingContext = createContext<LoadingContextType>({
  setLoading: (val: boolean) => {},
  isLoading: true,
});

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, load] = useState<boolean>(false);

  const setLoading = (val: boolean) => {
    load(val);
  };
  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {isLoading ? <LoadingComponent /> : children}
    </LoadingContext.Provider>
  );
};
