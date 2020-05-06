import { combineReducers } from "redux";
import works from "./worksReducer";
import story from "./storyReducer";

export default combineReducers({
  works: works,
  story: story
});