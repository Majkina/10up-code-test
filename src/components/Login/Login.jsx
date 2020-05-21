import React from "react";

const Login = ({
  handleFormSubmit,
  handleUsernameChange,
  handlePasswordChange,
  passwordValue,
  usernameValue,
}) => (
  <>
    <h1>Login</h1>
    <div className="login">
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">
            Username
            <input
              id="username"
              name="username"
              onChange={handleUsernameChange}
              type="text"
              value={usernameValue}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input
              id="password"
              name="password"
              onChange={handlePasswordChange}
              type="password"
              value={passwordValue}
            />
          </label>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </>
);

export default Login;
