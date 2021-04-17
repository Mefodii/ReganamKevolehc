import {
  GET_VIDEOS,
  GET_MOVIES,
  GET_SERIALS,
  GET_ANIME,
  GET_WATCHIO_INFO,
  ADD_VIDEO,
  DELETE_VIDEO,
} from "../actions/types.js";

const initialState = {
  videos: [],
  movies: [],
  serials: [],
  anime: [],
  info: {
    videoTypes: {},
    statusTypes: [],
    aliasSeparator: "",
  },
};

const isAnime = (payload, state) =>
  payload.type === state.info.videoTypes.anime;
const isMovie = (payload, state) =>
  payload.type === state.info.videoTypes.movie;
const isSerial = (payload, state) =>
  payload.type === state.info.videoTypes.serial;

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
      if (isAnime(action.payload, state))
        return {
          ...state,
          anime: [...state.anime, action.payload],
        };
      if (isSerial(action.payload, state))
        return {
          ...state,
          serials: [...state.serials, action.payload],
        };
      if (isMovie(action.payload, state))
        return {
          ...state,
          movies: [...state.movies, action.payload],
        };
      return state;
    case DELETE_VIDEO:
      return {
        ...state,
        anime: state.anime.filter((video) => video.id !== action.payload),
        movies: state.movies.filter((video) => video.id !== action.payload),
        serials: state.serials.filter((video) => video.id !== action.payload),
      };
    case GET_WATCHIO_INFO:
      return {
        ...state,
        info: action.payload,
      };
    default:
      return state;
  }
}
