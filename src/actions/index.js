import axios from "axios";
import { GET_WORKS } from "./types.js";

const baseAPI = "https://mindyksi.firebaseio.com";

export const getWorks = (works) => {
  return {
    type: GET_WORKS,
    payload: works
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