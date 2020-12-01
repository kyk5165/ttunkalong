import React, { useEffect, useState } from "react";
import AppRouter from "components/Routes";
import { authService, dbService } from "services/fbase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [authority, setAuthority] = useState("user");

  const getRoles = async (uid) => {
    const roles = await (await dbService.collection("role").get()).docs.map(
      (doc) => ({
        id: doc.id,
        ...doc.data(),
      })
    );
    const {
      0: { master, submaster, outsider, user },
    } = roles;

    if (user.includes(uid)) {
      setAuthority("user");
    } else if (submaster.includes(uid)) {
      setAuthority("submaster");
    } else if (master.includes(uid)) {
      setAuthority("master");
    } else if (outsider.includes(uid)) {
      setAuthority("outsider");
    } else {
      setAuthority("noting");
    }
  };
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
        getRoles(user.uid);
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          userObj={userObj}
          authority={authority}
        />
      ) : (
        "Loding..."
      )}
    </>
  );
}

export default App;
