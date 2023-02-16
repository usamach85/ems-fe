import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { WEB_PAGES } from "../components";
import { PATH } from "../config";
import PublicRoute from "./Auth/PublicRoute";
import { useLocation } from 'react-router-dom';
export const RouterConfig = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Switch>
       
        <Route path={PATH.NOPAGE} component={WEB_PAGES.EMPLOYEEREGISTER} />
      </Switch>
    </div>
  );
};
