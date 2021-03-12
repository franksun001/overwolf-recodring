import React, { FC } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { desktopRouters } from "../../utils/routers";

const RouteGuard: FC = () => {
  console.log(window.location);
  // TODO
  const isLogin = Boolean(
    localStorage.getItem("isLogin") && Number(localStorage.getItem("isLogin")),
  );
  // TODO
  const renderRoutes = () => {
    console.log(isLogin, window.location.hash);
    if (!isLogin && window.location.hash !== "#/sign-in") {
      return <Redirect to="/sign-in" />;
    } else {
      return desktopRouters.map((_) => <Route key={_.path} {..._} />);
    }
  };
  return <Switch>{renderRoutes()}</Switch>;
};

export default RouteGuard;
