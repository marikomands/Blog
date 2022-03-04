import { combineReducers } from "redux";
import postReducer from "./postReducer";

export default combineReducers({
  posts: postReducer,
  // replaceMe: () => "Hi There"
});
