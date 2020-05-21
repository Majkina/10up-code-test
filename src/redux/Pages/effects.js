import * as actions from "./actions";
import * as pagesService from "../../services/api/pages";

/** Disabling eslint for next line as pressumably in
the future there'll be more requests exported */

// eslint-disable-next-line import/prefer-default-export
export const getPagesFromApi = () => async (dispatch) => {
  dispatch(actions.getPagesRequest());
  const response = await pagesService.getPages();
  dispatch(actions.getPagesSuccess(response));
  if (response.error) {
    dispatch(actions.getPagesError(response.error.message));
  }
};
