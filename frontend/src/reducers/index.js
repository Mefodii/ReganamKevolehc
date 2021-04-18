import { combineReducers } from "redux";
import videos from "./videos";
import pageInit from "./pageInit";

export default combineReducers({
  videos,
  pageInit,
});
