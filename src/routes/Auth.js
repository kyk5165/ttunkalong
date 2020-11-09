import { authService, dbService, firebaseInstance } from "services/fbase";
import React, { useState } from "react";
import "styles/Auth.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const logindbAdd = async (user) => {
    await dbService.collection("userList").doc(`${user.uid}`).set({
      createdAt: Date.now(),
      email: user.email,
      displayName: user.displayName,
    });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        await authService
          .createUserWithEmailAndPassword(email, password)
          .then((snapshot) => logindbAdd(snapshot.user));
      } else {
        await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setError("비밀번호가 틀렸습니다.");
      } else if (error.code === "auth/user-not-found") {
        setError("아이디를 찾을 수 없습니다.");
      } else if (error.code === "auth/email-already-in-use") {
        setError("이미 존재하는 아이디입니다.");
      } else if (error.code === "auth/weak-password") {
        setError("비밀번호는 6글자 이상으로 해주세요.");
      } else {
        setError(error.message);
      }
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    await authService.signInWithPopup(provider).then((snapshot) => {
      if (snapshot.additionalUserInfo.isNewUser) {
        logindbAdd(snapshot.user);
      }
    });
  };

  return (
    <div className="login_filed">
      <div className="login_div">
        <form onSubmit={onSubmit} className="login_form">
          <input
            name="email"
            type="Email"
            placeholder="Email"
            required
            value={email}
            onChange={onChange}
            className="login_id"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
            className="login_pw"
          />
          <input
            type="submit"
            value={newAccount ? "Sing up" : "Log In"}
            className="login_submit"
          />
        </form>
        {error && <div className="login_error">{error}</div>}
        <span onClick={toggleAccount} className="changeAccount">
          {newAccount ? "Log In" : "Create Account"}
        </span>
        <div className="atherBtn">
          <button
            name="google"
            onClick={onSocialClick}
            className="login_google"
          >
            With Google
          </button>
          <button>With None</button>
        </div>
      </div>
    </div>
  );
};
export default Auth;
