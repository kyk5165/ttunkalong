import React from "react";
import { Link } from "react-router-dom";
import "styles/Nav.css";

const Navigation = ({ userObj, authority }) => (
  <nav>
    <ul>
      <li>
        <Link to="/">메인</Link>
      </li>
      <li>
        <Link to="/profile">{userObj.displayName}의 프로필</Link>
      </li>
      <li>
        <Link to="/notice">공지사항</Link>
      </li>
      <li>
        <Link to="/flag">플래그</Link>
      </li>
      {(authority === "master" || authority === "submaster") && (
        <li>
          <Link to="/flagSearch">플래그 조회</Link>
        </li>
      )}
    </ul>
  </nav>
);
export default Navigation;
