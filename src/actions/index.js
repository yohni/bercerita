import axios from "axios";
import { GET_WORKS, POST_STORY } from "./types.js";

const baseAPI = "https://mindyksi.firebaseio.com";

export const getWorks = (works) => {
  return {
    type: GET_WORKS,
    payload: works
  }
}

export const postStory = (story) => {
  return {
    type: POST_STORY,
    payload: story
  }
}

export const getAllWorks = () => {
  return (dispatch) => {
    return axios.get(`${baseAPI}/exp.json`)
      .then(res => {
        dispatch(getWorks(res.data))
      })
      .catch(err =>{
        throw(err);
      })
  }
}

export const postStories = (payload) => {
  return (dispatch) => {
    return axios.post(`${baseAPI}/stories.json`, payload)
    .then(res => {
      dispatch(postStory(res.data))
    })
    .catch(err =>{
      throw(err);
    })
  }
}
