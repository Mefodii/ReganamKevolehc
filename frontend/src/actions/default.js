import axios from "axios";

export const defaultGet = (url, type) => (dispatch) => {
  axios
    .get(url)
    .then(defaultOnSuccess(type, dispatch))
    .catch((err) => console.log(err));
};

export const defaultPost = (url, type, data) => (dispatch) => {
  axios
    .post(url, data)
    .then(defaultOnSuccess(type, dispatch))
    .catch((err) => console.log(err));
};

export const defaultOnSuccess = (type, dispatch) => (response) => {
  dispatch({
    type,
    payload: response.data,
  });
};
