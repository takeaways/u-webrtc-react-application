import { combineReducers } from "redux";
import dashboard from "./reducers/dashboard"
import call from "./reducers/call"


export default combineReducers(
  {
    call,
    dashboard
  }
)