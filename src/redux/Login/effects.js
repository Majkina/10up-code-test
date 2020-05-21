import * as actions from "./actions";
import * as loginService from "../../services/api/login";
import * as localStorageService from "../../services/localStorage";

export const login = (username, password) => async (dispatch) => {
  dispatch(actions.loginRequest());
  const response = await loginService.login(username, password);
  // eslint-disable-next-line camelcase
  const { token, user_display_name, user_email } = response;
  localStorageService.setToken(token);
  localStorageService.setProfile({
    email: user_email,
    username: user_display_name,
  });
  dispatch(actions.loginSuccess(user_email, user_display_name));
  if (response.error) {
    dispatch(actions.loginError(response.error.message));
  }
};

export const logout = () => (dispatch) => {
  localStorageService.clearToken();
  localStorageService.clearProfile();
  dispatch(actions.logout());
};

export const validate = () => async (dispatch) => {
  const response = await loginService.validate();
  if (response.code === "jwt_auth_valid_token") {
    const profile = localStorageService.getProfile();
    const { email, username } = profile;
    dispatch(actions.loginSuccess(email, username));
    return;
  }
  /** no need to handle error here, log out regardless */
  dispatch(logout());
};
