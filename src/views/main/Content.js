import { Switch, Route, Redirect } from "react-router-dom";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("../sub/Home"));
const Favourites = React.lazy(() => import("../sub/Favourites"));

const Content = () => {
  return (
    <Suspense fallback={<div className="loading"></div>}>
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
