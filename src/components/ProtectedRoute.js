import React, { useEffect, useState } from "react";
import { withRouter, Route, Redirect } from "react-router-dom";
import { routes } from "../services";

const ProtectedRoute = (props) => {
  const [ token, setToken ] = useState();
  const { component: Component, ...rest } = props;

  useEffect(() => {
    let tok = localStorage.getItem('token');
    setToken(tok);
  }, [])

  return (
    <Route
      {...rest}
      render={(props) => {
        return token ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: routes.login,
                state: { from: props.history.location },
              }}
            />
          );
      }}
    />
  );
};

export default withRouter(ProtectedRoute);