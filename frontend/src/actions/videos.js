import axios from "axios";

import {
  GET_VIDEOS,
  GET_SERIALS,
  GET_MOVIES,
  GET_ANIME,
  DELETE_VIDEO,
  ADD_VIDEO,
  GET_WATCHIO_INFO,
} from "./types";

import {
  API_CRUD_VIDEO,
  API_GET_VIDEOS,
  API_GET_ANIME,
  API_GET_MOVIES,
  API_GET_SERIALS,
  API_GET_WATCHIO_INFO,
} from "../api/urls";
import { defaultGet, defaultPost } from "./default";

// GETs
export const getVideos = () => (dispatch) => {
  defaultGet(API_GET_VIDEOS, GET_VIDEOS)(dispatch);
};

export const getMovies = () => (dispatch) => {
  defaultGet(API_GET_MOVIES, GET_MOVIES)(dispatch);
};

export const getAnime = () => (dispatch) => {
  defaultGet(API_GET_ANIME, GET_ANIME)(dispatch);
};

export const getSerials = () => (dispatch) => {
  defaultGet(API_GET_SERIALS, GET_SERIALS)(dispatch);
};

// ADD VIDEO
export const addVideo = (video) => (dispatch) => {
  defaultPost(API_CRUD_VIDEO, ADD_VIDEO, video)(dispatch);
};

export const getInfo = () => (dispatch) => {
  defaultGet(API_GET_WATCHIO_INFO, GET_WATCHIO_INFO)(dispatch);
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
