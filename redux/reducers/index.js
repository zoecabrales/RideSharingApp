import { combineReducers } from "redux";
import rideRequestReducer from "./rideRequestReducer";

const rootReducer = combineReducers({
  rideRequest: rideRequestReducer,
});

export default rootReducer;
