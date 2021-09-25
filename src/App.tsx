import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Authentication/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import { UserProvider } from "./context/user";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forgot from "./pages/Authentication/Forgot";
import Reset from "./pages/Authentication/Reset";
import ProtectedRoute from "./components/Authentication/Protected";
import { NotificationProvider } from "./context/notification";
import { LoadingProvider } from "./context/loading";

const HomeComponent = () => {
  return <h1>Homepage</h1>;
};

export const App = () => (
  <Router>
    <ChakraProvider>
      <LoadingProvider>
        <NotificationProvider>
          <UserProvider>
            <Sidebar>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/forgot" component={Forgot} />
                <Route path="/reset" component={Reset} />
                <ProtectedRoute path="/" component={HomeComponent} />
              </Switch>
            </Sidebar>
          </UserProvider>
        </NotificationProvider>
      </LoadingProvider>
    </ChakraProvider>
  </Router>
);
