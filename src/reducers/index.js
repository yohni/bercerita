import { combineReducers } from "redux";
import works from "./worksReducer";

export default combineReducers({
  works: works
});