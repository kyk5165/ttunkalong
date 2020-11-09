import { authService, firebaseInstance } from "services/fbase";
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
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
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
    await authService.signInWithPopup(provider);
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
          {error}
        </form>
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
