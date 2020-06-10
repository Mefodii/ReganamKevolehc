import { GET_VIDEOS, GET_MOVIES, ADD_VIDEO } from "../actions/types.js";

const initialState = {
  videos: [],
  movies: [],
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
    case ADD_VIDEO:
      return {
        ...state,
        videos: [...state.videos, action.payload],
      };
    default:
      return state;
  }
}
