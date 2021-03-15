import React, { FC } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import _ from "lodash";
import { desktopRouters } from "../../utils/routers";
import { getToken } from "../../utils/authStorage";

const RouteGuard: FC = () => {
  const isLogin = !_.isEmpty(getToken());

  const renderRoutes = () => {
    if (!isLogin && window.location.hash !== "#/sign-in") {
      return <Redirect to="/sign-in" />;
    } else {
      return desktopRouters.map((_) => <Route key={_.path} {..._} />);
    }
  };
  return <Switch>{renderRoutes()}</Switch>;
};

export default RouteGuard;
