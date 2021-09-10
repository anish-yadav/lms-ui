import { ChakraProvider, Text } from "@chakra-ui/react";
import Login from "./components/Authentication/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import { UserContext, UserProvider } from "./context/user";

export const App = () => (
  <ChakraProvider>
    <UserProvider>
      <Sidebar>
        <Login />
      </Sidebar>
    </UserProvider>
  </ChakraProvider>
);
