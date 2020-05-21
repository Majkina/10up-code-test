import * as actions from "./actions";
import * as postsService from "../../services/api/posts";

/** Disabling eslint for next line as pressumably in
the future there'll be more requests exported */

// eslint-disable-next-line import/prefer-default-export
export const getPostsFromApi = () => async (dispatch) => {
  dispatch(actions.getPostsRequest());
  const response = await postsService.getPosts();
  dispatch(actions.getPostsSuccess(response));
  if (response.error) {
    dispatch(actions.getPostsError(response.error.message));
  }
};
