import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import Compiler from "views/examples/Compiler.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Upcoming from "views/examples/upcoming.js";
import { AuthProvider } from "views/Provider";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <Switch>
        <Route path="/components" render={(props) => <Index {...props} />} />
        <Route
          path="/compiler-page"
          render={(props) => <Compiler {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/upcoming-page"
          render={(props) => <Upcoming {...props} />}
        />
        <Route
          path="/register-page"
          render={(props) => <RegisterPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Redirect from="/" to="/components" />
      </Switch>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
