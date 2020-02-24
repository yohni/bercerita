import { GET_WORKS } from "../actions/types.js";

const initState = {
  works : []
}

export default function worksReducer(state = initState, action){

  if(action.type === GET_WORKS){
    return Object.assign({}, state, {
      works: state.works
    });
  }
  return state;
}