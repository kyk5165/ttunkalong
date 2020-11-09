import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import FlagBorder from "routes/FlagBorder";
import FlagSearch from "routes/FlagSearch";
import Home from "routes/Home";
import NoticeBorder from "routes/NoticeBorder";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ refreshUser, userObj, authority }) => {
  return (
    <Router>
      <div className="contents">
        {userObj && <Navigation userObj={userObj} authority={authority} />}
        <Switch>
          {userObj ? (
            <>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/profile">
                <Profile userObj={userObj} refreshUser={refreshUser} />
              </Route>
              <Route exact path="/notice">
                <NoticeBorder userObj={userObj} authority={authority} />
              </Route>
              <Route exact path="/flag">
                <FlagBorder userObj={userObj} />
              </Route>
              <Route exact path="/flagSearch">
                <FlagSearch userObj={userObj} authority={authority} />
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
