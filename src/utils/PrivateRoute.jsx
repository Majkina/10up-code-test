import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { getUserDetails } from "../redux/Login/selectors";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => getUserDetails(state));
  return (
    <Route
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
