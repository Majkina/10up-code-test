import {
  GET_POSTS_ERROR,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from "./actionTypes";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case GET_POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
