import { combineReducers } from "redux";
import driverReducer from "./driverReducer";
import rideRequestReducer from "../reducers";

const rootReducer = combineReducers({
  driver: driverReducer,
  rideRequest: rideRequestReducer,
});

export default rootReducer;
