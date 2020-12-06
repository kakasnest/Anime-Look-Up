import { Switch, Route, Redirect } from "react-router-dom";
import React, { Suspense } from "react";

/* const Home = React.lazy(() => import("./Home"));
const Favourites = React.lazy(() => import("./Favourites")); */

import Home from "./Home";
import Favourites from "./Favourites";

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
