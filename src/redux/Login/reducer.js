import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";

const initialState = {
  data: {
    email: null,
    username: null,
  },
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_SUCCESS: {
      const { email, username } = action.payload;
      return {
        ...state,
        data: {
          email,
          username,
        },
        error: null,
        loading: false,
      };
    }
    case LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
