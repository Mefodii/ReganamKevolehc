import { LOAD_COMPLETE } from "../actions/types.js";

const initialState = {
  isLoading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_COMPLETE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
