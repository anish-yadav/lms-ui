import { Route } from "react-router-dom";
import RouterRenderer from "./RouterRenderer";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => <RouterRenderer {...props} component={Component} />} />
  );
};

export default ProtectedRoute;
