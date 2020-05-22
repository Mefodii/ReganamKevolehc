import axios from "axios";

import { GET_VIDEOS } from "./types";

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
