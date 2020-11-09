import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "styles/FlagSearch.css";

const FlagSearch = ({ userObj, authority }) => {
  const history = useHistory();

  const checkAuthority = useCallback(() => {
    if (authority !== "master" && authority !== "submaster") {
      history.push("/");
    }
  }, [authority]);

  useEffect(() => {
    checkAuthority();
  }, [checkAuthority]);

  return (
    <div className="flagSearch">
      <div>
        <div>전체보기</div>
        <div>유저별</div>
        <div>시간별</div>
        <form>
          <input type="text" required />
          <input type="submit" value="검색" />
        </form>
      </div>
    </div>
  );
};

export default FlagSearch;
