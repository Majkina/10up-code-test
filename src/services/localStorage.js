const ACCESS_TOKEN = "ACCESS_TOKEN";
const PROFILE = "PROFILE";

const browserStorage = (() => {
  if (window.localStorage) {
    return window.localStorage;
  }

  /** if under no time constraints I would implement a
   * localstorage like API immitating cookies functionality
   * */
  return {};
})();

export const setToken = (token) => browserStorage.setItem(ACCESS_TOKEN, token);
export const getAccessToken = () => browserStorage.getItem(ACCESS_TOKEN);
export const clearToken = () => browserStorage.removeItem(ACCESS_TOKEN);

export const setProfile = (profile) =>
  browserStorage.setItem(PROFILE, JSON.stringify(profile));
export const getProfile = () => JSON.parse(browserStorage.getItem(PROFILE));
export const clearProfile = () => browserStorage.removeItem(PROFILE);
