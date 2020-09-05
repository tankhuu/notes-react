import React, { Fragment } from "react";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/not-found" component={NotFound} />
          {/* <Route path="/" exact component={Dashboard} /> */}
          {/* Redirect to create tag for services page for now */}
          <Redirect from="/" exact to="/home" />
          {/* All unHandled Routes will be redirected to NotFound Page */}
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
