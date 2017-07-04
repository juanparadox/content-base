import { combineReducers } from "redux";
import post from "./postReducer";
import view from "./viewReducer";

export default combineReducers({
  post, view
});
