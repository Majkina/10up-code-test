import {
  GET_POSTS_ERROR,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from "./actionTypes";

export const getPostsError = (error) => ({
  type: GET_POSTS_ERROR,
  payload: error,
});

export const getPostsRequest = () => ({
  type: GET_POSTS_REQUEST,
});

export const getPostsSuccess = (data) => ({
  type: GET_POSTS_SUCCESS,
  payload: data,
});
