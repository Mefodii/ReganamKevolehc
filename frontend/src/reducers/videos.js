import {
  GET_VIDEOS,
  GET_MOVIES,
  GET_SERIALS,
  GET_ANIME,
  ADD_VIDEO,
  DELETE_VIDEO,
} from "../actions/types.js";

import { VIDEO_TYPE_CHOICES } from "../backend/videos";

const initialState = {
  videos: [],
  movies: [],
  serials: [],
  anime: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      };
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_SERIALS:
      return {
        ...state,
        serials: action.payload,
      };
    case GET_ANIME:
      return {
        ...state,
        anime: action.payload,
      };
    case ADD_VIDEO:
      switch (action.payload.type) {
        case VIDEO_TYPE_CHOICES.VIDEO_TYPE_ANIME:
          return {
            ...state,
            anime: [...state.anime, action.payload],
          };
        case VIDEO_TYPE_CHOICES.VIDEO_TYPE_MOVIE:
          return {
            ...state,
            movies: [...state.movies, action.payload],
          };
        case VIDEO_TYPE_CHOICES.VIDEO_TYPE_SERIAL:
          return {
            ...state,
            serials: [...state.serials, action.payload],
          };
        default:
          return {
            ...state,
          };
      }
    case DELETE_VIDEO:
      return {
        ...state,
        anime: state.anime.filter((video) => video.id !== action.payload),
        movies: state.movies.filter((video) => video.id !== action.payload),
        serials: state.serials.filter((video) => video.id !== action.payload),
      };
    default:
      return state;
  }
}
