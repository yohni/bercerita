import { POST_STORY } from "../actions/types.js";

const initState = {
  story: []
}

export default function storyReducer(state = initState, action){
  if(action.type === POST_STORY){
    return Object.assign({}, state, {
      story: state.story.concat(action.payload)
    });
  }

  return state;
}