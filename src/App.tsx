import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Authentication/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import { UserProvider } from "./context/user";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forgot from "./pages/Authentication/Forgot";
import Reset from "./pages/Authentication/Reset";

export const App = () => (
  <Router>
    <ChakraProvider>
      <UserProvider>
        <Sidebar>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/forgot">
              <Forgot />
            </Route>
            <Route path="/reset">
              <Reset />
            </Route>
            <Route path="/">
              <h1>This is homepage.</h1>
            </Route>
          </Switch>
        </Sidebar>
      </UserProvider>
    </ChakraProvider>
  </Router>
);
