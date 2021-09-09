import { ChakraProvider, Text } from "@chakra-ui/react";
import Login from "./components/Authentication/Login";
import Sidebar from "./components/Sidebar/Sidebar";

export const App = () => (
  <ChakraProvider>
    <Sidebar>
      <Login></Login>
    </Sidebar>
  </ChakraProvider>
);
