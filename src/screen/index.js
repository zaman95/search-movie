import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { routes } from "../services/routes"
import ProtectedRoute from "../components/ProtectedRoute"
import Home from "./home"
import Detail from "./detail"

function Screen () {
  return (
    <BrowserRouter>
      <Switch>
        {/* <ProtectedRoute exact path={routes.root} component={Home} /> */}
        <Route exact path={routes.root} component={Home} />
        <Route exact path={routes.detail} component={Detail} />
        <Redirect from="*" to={routes.root} />
      </Switch>
    </BrowserRouter>
  )
}

export default Screen