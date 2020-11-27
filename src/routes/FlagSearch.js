import Flag from "components/Flag";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { dbService } from "services/fbase";
import "styles/FlagSearch.css";

const FlagSearch = ({ userObj, authority }) => {
  const history = useHistory();
  const [searchType, setSearchType] = useState("all");
  const [flags, setFlags] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const checkAuthority = useCallback(() => {
    if (authority !== "master" && authority !== "submaster") {
      history.push("/");
    }
  }, [authority]);

  const onSearchMenuClick = (event) => {
    const {
      target: { innerHTML },
    } = event;
    if (innerHTML === "전체보기") {
      setSearchType("all");
    } else if (innerHTML === "유저별") {
      setSearchType("user");
    }
  };

  const searchAll = () => {
    setUsers([]);
    setSelectedUser("");
    dbService
      .collection("flag")
      .orderBy("createdAt", "desc")
      .get()
      .then((snapshot) => {
        let flagArray = [];
        snapshot.forEach((doc) => {
          flagArray.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setFlags(flagArray);
      });
  };
  const getUserList = () => {
    setFlags([]);
    dbService
      .collection("userList")
      .orderBy("displayName", "asc")
      .get()
      .then((snapshot) => {
        let userArray = [];
        snapshot.forEach((doc) => {
          userArray.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setUsers(userArray);
      });
  };
  const onSelectUser = (event) => {
    const {
      target: { innerHTML },
    } = event;
    setSelectedUser(innerHTML);
    dbService
      .collection("flag")
      .where("creatorDisplayName", "==", innerHTML)
      .orderBy("createdAt", "desc")
      .get()
      .then((snapshot) => {
        let flagArray = [];
        snapshot.forEach((doc) => {
          flagArray.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setFlags(flagArray);
      });
  };

  useEffect(() => {
    checkAuthority();
  }, [checkAuthority]);

  useEffect(() => {
    if (searchType === "all") {
      searchAll();
    } else if (searchType === "user") {
      getUserList();
    }
  }, [searchType]);

  return (
    <div className="flagSearch">
      <div className="fs_header">
        <div onClick={onSearchMenuClick} className="fs_menu">
          전체보기
        </div>
        <div onClick={onSearchMenuClick} className="fs_menu">
          유저별
        </div>
        <div onClick={onSearchMenuClick} className="fs_menu">
          시간별
        </div>
        <form>
          <input type="text" required className="search_box" />
          <input type="submit" value="검색" className="search_btn" />
        </form>
      </div>
      <div>
        {users.map((user) => (
          <span key={user.id} onClick={onSelectUser} className="userList">
            {user.displayName}
          </span>
        ))}
        {selectedUser && <div className="selectedUser">{selectedUser}</div>}
        {flags.map((flag) => (
          <Flag
            key={flag.id}
            flagObj={flag}
            isOwner={flag.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default FlagSearch;
