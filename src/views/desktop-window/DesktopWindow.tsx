import React, { FC } from "react";
import DesktopHeader from "./DesktopHeader";
import { HashRouter as Router, Switch } from "react-router-dom";
import RouteGuard from "./RouteGuard";

const DesktopWindow: FC = () => {
  return (
    <div className="bg-d00">
      <DesktopHeader />
      <Router>
        <Switch>
          <RouteGuard />
        </Switch>
      </Router>
    </div>
  );
};

export default DesktopWindow;
