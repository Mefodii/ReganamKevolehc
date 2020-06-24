import axios from "axios";

import {
  GET_VIDEOS,
  GET_SERIALS,
  GET_MOVIES,
  GET_ANIME,
  ADD_VIDEO,
  DELETE_VIDEO,
} from "./types";

import { VIDEO_TYPE_CHOICES } from "../backend/videos";

// GET VIDEOS
export const getVideos = (video_type = GET_VIDEOS) => (dispatch) => {
  var url = "watching/api/video_type/";
  switch (video_type) {
    case GET_SERIALS:
      url += VIDEO_TYPE_CHOICES.VIDEO_TYPE_SERIAL + "/";
      break;
    case GET_MOVIES:
      url += VIDEO_TYPE_CHOICES.VIDEO_TYPE_MOVIE + "/";
      break;
    case GET_ANIME:
      url += VIDEO_TYPE_CHOICES.VIDEO_TYPE_ANIME + "/";
      break;
    default:
      break;
  }

  axios
    .get(url)
    .then((res) => {
      dispatch({
        type: video_type,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// ADD VIDEO
export const addVideo = (video) => (dispatch) => {
  axios
    .post(`watching/api/videos/`, video)
    .then((res) => {
      dispatch({
        type: ADD_VIDEO,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE VIDEO
export const deleteVideo = (id) => (dispatch) => {
  axios
    .delete(`/watching/api/videos/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_VIDEO,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
