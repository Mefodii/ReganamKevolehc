import {
  GET_VIDEOS,
  GET_SERIALS,
  GET_MOVIES,
  GET_ANIME,
  DELETE_VIDEO,
  DELETE_ANIME,
  DELETE_SERIAL,
  DELETE_MOVIE,
  ADD_VIDEO,
  ADD_ANIME,
  ADD_MOVIE,
  ADD_SERIAL,
  GET_WATCHIO_INFO,
  LOAD_COMPLETE,
  buildTypes,
} from "./types";

import {
  API_CRUD_VIDEO,
  API_GET_VIDEOS,
  API_GET_ANIME,
  API_GET_MOVIES,
  API_GET_SERIALS,
  API_GET_WATCHIO_INFO,
} from "../api/urls";
import {
  defaultGet,
  defaultPost,
  defaultDelete,
  addConfigJsonType,
  addConfigParams,
  defaultOnError,
} from "./default";
import axios from "axios";

// GETs
export const getMovies = () => (dispatch, getState) => {
  getVideos(GET_MOVIES, getState().videos.info.videoTypes.movie)(dispatch);
};

export const getAnime = () => (dispatch, getState) => {
  getVideos(GET_ANIME, getState().videos.info.videoTypes.anime)(dispatch);
};

export const getSerials = () => (dispatch, getState) => {
  getVideos(GET_SERIALS, getState().videos.info.videoTypes.serial)(dispatch);
};

export const getVideos = (actionType, videoType = null) => (dispatch) => {
  var config = addConfigJsonType();
  if (videoType) config = addConfigParams({ videoType }, config);

  defaultGet(
    API_GET_VIDEOS,
    buildTypes(GET_VIDEOS, actionType),
    config
  )(dispatch);
};

export const getInfo = () => (dispatch) => {
  axios
    .get(API_GET_WATCHIO_INFO, addConfigJsonType())
    .then((response) => {
      dispatch({
        type: GET_WATCHIO_INFO,
        payload: response.data,
      });

      dispatch({
        type: LOAD_COMPLETE,
      });
    })
    .catch(defaultOnError);
};

// ADDs
export const addAnime = (video) => (dispatch) => {
  const actionType = buildTypes(ADD_VIDEO, ADD_ANIME);
  defaultPost(API_CRUD_VIDEO, actionType, video)(dispatch);
};

export const addMovie = (video) => (dispatch) => {
  const actionType = buildTypes(ADD_VIDEO, ADD_MOVIE);
  defaultPost(API_CRUD_VIDEO, actionType, video)(dispatch);
};

export const addSerial = (video) => (dispatch) => {
  const actionType = buildTypes(ADD_VIDEO, ADD_SERIAL);
  defaultPost(API_CRUD_VIDEO, actionType, video)(dispatch);
};

// UPDATEs
export const updateAnime = (oldVideo, newVideo) => (dispatch) => {
  const video = {
    ...oldVideo,
    ...newVideo,
  };
  // const actionType = buildTypes(ADD_VIDEO, ADD_SERIAL);
  // defaultPost(API_CRUD_VIDEO, actionType, video)(dispatch);
};

// DELETEs
export const deleteAnime = (id) => (dispatch) => {
  const url = `${API_CRUD_VIDEO}${id}/`;
  const actionType = buildTypes(DELETE_VIDEO, DELETE_ANIME);
  defaultDelete(url, actionType, id)(dispatch);
};

export const deleteMovie = (id) => (dispatch) => {
  const url = `${API_CRUD_VIDEO}${id}/`;
  const actionType = buildTypes(DELETE_VIDEO, DELETE_MOVIE);
  defaultDelete(url, actionType, id)(dispatch);
};

export const deleteSerial = (id) => (dispatch) => {
  const url = `${API_CRUD_VIDEO}${id}/`;
  const actionType = buildTypes(DELETE_VIDEO, DELETE_SERIAL);
  defaultDelete(url, actionType, id)(dispatch);
};
