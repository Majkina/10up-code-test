import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  payload: error,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (email, username) => ({
  type: LOGIN_SUCCESS,
  payload: {
    email,
    username,
  },
});

export const logout = () => ({
  type: LOGOUT,
});
