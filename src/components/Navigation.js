import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj, authority }) => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">{userObj.displayName}의 프로필</Link>
      </li>
      <li>
        <Link to="/notice">Notice</Link>
      </li>
      <li>
        <Link to="/flag">Flag</Link>
      </li>
      {(authority === "master" || authority === "submaster") && (
        <li>
          <Link to="/flagSearch">FlagSearch</Link>
        </li>
      )}
    </ul>
  </nav>
);
export default Navigation;
