import {
  GET_PAGES_ERROR,
  GET_PAGES_REQUEST,
  GET_PAGES_SUCCESS,
} from "./actionTypes";

export const getPagesError = (error) => ({
  type: GET_PAGES_ERROR,
  payload: error,
});

export const getPagesRequest = () => ({
  type: GET_PAGES_REQUEST,
});

export const getPagesSuccess = (data) => ({
  type: GET_PAGES_SUCCESS,
  payload: data,
});
