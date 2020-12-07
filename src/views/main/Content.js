import { Switch, Route, Redirect } from "react-router-dom";
import React, { Suspense } from "react";

/* const Home = React.lazy(() => import("../sub/Home"));
const Favourites = React.lazy(() => import("../sub/Favourites")); */

import Home from "../sub/Home";
import Favourites from "../sub/Favourites";

const Content = () => {
  return (
    <Suspense>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Redirect to="/" path="*" />
      </Switch>
    </Suspense>
  );
};

export default Content;
