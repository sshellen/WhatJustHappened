import React, { Suspense, lazy } from "react";
const { BrowserRouter, Route, Switch } = require("react-router-dom");
import ReactDOM from "react-dom";

const Home = lazy(() => import("./pages/Home"));

const Routes = (
  <BrowserRouter>
    <Suspense fallback="">
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

ReactDOM.render(Routes, document.getElementById("app"));
