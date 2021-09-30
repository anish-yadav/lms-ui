import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../context/user";
import LoadingComponent from "../Animations/Loading";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const RouterRenderer = ({ component: Component, ...rest }) => {
  const { refresh } = useContext(UserContext);
  const [isAuthorized, authorize] = useState<any>(null);

  useEffect(() => {
    if (!isAuthorized) {
      refresh().then((res) => {
        if (res) {
          authorize("true");
        } else {
          authorize("false");
        }
      });
    }
  });

  if (isAuthorized === "true") {
    return <Component {...rest} />;
  } else if (isAuthorized === "false") {
    return <Redirect to="/login" />;
  }
  return <LoadingComponent />;
};

export default RouterRenderer;
