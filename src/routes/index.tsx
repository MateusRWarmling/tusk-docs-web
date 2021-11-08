import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Clients } from "../pages/Clients";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Routes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/login">
          {isAuthenticated ? <Redirect to="/dashboard" /> : <Login />}
        </Route>

        <Route exact path="/dashboard">
          {!isAuthenticated ? <Redirect to="/login" /> : <Dashboard />}
        </Route>

        <Route exact path="/clients">
          {!isAuthenticated ? <Redirect to="/login" /> : <Clients />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
