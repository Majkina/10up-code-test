import { combineReducers } from "redux";

import LoginReducer from "./Login/reducer";
import PagesReducer from "./Pages/reducer";
import PostsReducer from "./Posts/reducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  pages: PagesReducer,
  posts: PostsReducer,
});

export default rootReducer;
