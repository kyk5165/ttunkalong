import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Flag from "routes/Flag";
import Home from "routes/Home";
import NoticeBorder from "routes/NoticeBorder";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn, userObj, authority }) => {
  return (
    <Router>
      <div className="contents">
        {isLoggedIn && <Navigation />}
        <Switch>
          {isLoggedIn ? (
            <>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route exact path="/notice">
                <NoticeBorder userObj={userObj} authority={authority} />
              </Route>
              <Route exact path="/flag">
                <Flag />
              </Route>
            </>
          ) : (
            <Route exact path="/">
              <Auth />
            </Route>
          )}
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
