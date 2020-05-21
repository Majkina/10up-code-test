import React, { useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { validate } from "../../redux/Login/effects";
import { getUserDetails } from "../../redux/Login/selectors";
import * as localStorageService from "../../services/localStorage";

import About from "../About";
import Home from "../Home";
import Login from "../Login";
import NotFound from "../NotFound/NotFound";
import Header from "../Header/Header";

import PrivateRoute from "../../utils/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const user = useSelector((state) => getUserDetails(state));

  useEffect(() => {
    if (user.email) {
      history.replace(from);
    }
    /** disabling eslint hooks dependencies array to run hook
    only on user dependency change */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    const token = localStorageService.getAccessToken();
    if (token) {
      dispatch(validate());
    } else {
      history.push("/login");
    }
    /** disabling eslint hooks dependencies array to run hook only once */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default App;
