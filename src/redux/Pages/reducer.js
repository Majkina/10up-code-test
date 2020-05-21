import {
  GET_PAGES_ERROR,
  GET_PAGES_REQUEST,
  GET_PAGES_SUCCESS,
} from "./actionTypes";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAGES_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case GET_PAGES_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PAGES_SUCCESS: {
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
