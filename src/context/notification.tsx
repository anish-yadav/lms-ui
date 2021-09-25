import { useToast } from "@chakra-ui/toast";
import { createContext, ReactNode } from "react";

interface props {
  title: string;
  description: string;
}

interface toastProps extends props {
  status: "info" | "warning" | "success" | "error" | undefined;
}

type NotificationContextType = {
  showSuccess: (data: props) => void;
  showInfo: (data: props) => void;
  showError: (data: props) => void;
};

export const NotificationContext = createContext<NotificationContextType>({
  showSuccess: () => {},
  showInfo: () => {},
  showError: () => {},
});

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const toast = useToast();

  const showNotification = (data: toastProps) => {
    toast({
      ...data,
      duration: 2000,
      position: "bottom-right",
      isClosable: true,
    });
  };

  const showSuccess = (data: props) => {
    showNotification({ ...data, status: "success" });
  };
  const showInfo = (data: props) => {
    showNotification({ ...data, status: "info" });
  };
  const showError = (data: props) => {
    showNotification({ ...data, status: "error" });
  };

  return (
    <NotificationContext.Provider value={{ showSuccess, showInfo, showError }}>
      {children}
    </NotificationContext.Provider>
  );
};
