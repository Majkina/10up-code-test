import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Login from "./Login";

import { login } from "../../redux/Login/effects";

const LoginContainer = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(login(username, password));
    }
  };

  return (
    <Login
      handleFormSubmit={handleFormSubmit}
      handlePasswordChange={handlePasswordChange}
      handleUsernameChange={handleUsernameChange}
      usernameValue={username}
      passwordValue={password}
    />
  );
};

export default LoginContainer;
