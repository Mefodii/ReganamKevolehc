import axios from "axios";

import { GET_VIDEOS, ADD_VIDEO } from "./types";

// GET VIDEOS
export const getVideos = () => (dispatch) => {
  axios
    .get("watching/api/videos/")
    .then((res) => {
      dispatch({
        type: GET_VIDEOS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// ADD VIDEO
export const addVideo = (video) => (dispatch) => {
  axios
    .post(`/api/videos/`, video)
    .then((res) => {
      dispatch({
        type: ADD_VIDEO,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
