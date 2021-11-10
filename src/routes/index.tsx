import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Clients } from "../pages/Clients";
import { Documents } from "../pages/Documents";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Routes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login">
          {!isAuthenticated ? <Login /> : <Redirect to={"/dashboard"} />}
        </Route>
        <Route exact path="/register">
          {!isAuthenticated ? <Register /> : <Redirect to={"/dashboard"} />}
        </Route>

        <Route
          exact
          path="/dashboard"
          component={isAuthenticated ? Dashboard : Login}
        />
        <Route
          exact
          path="/clients"
          component={isAuthenticated ? Clients : Login}
        />
        <Route
          exact
          path="/documents"
          component={isAuthenticated ? Documents : Login}
        />
      </Switch>
    </BrowserRouter>
  );
};
