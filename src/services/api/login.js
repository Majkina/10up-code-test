import { doPost } from "./base";

export const login = (username, password) =>
  doPost("jwt-auth/v1/token", {
    username,
    password,
  });

export const validate = () => doPost("jwt-auth/v1/token/validate");
