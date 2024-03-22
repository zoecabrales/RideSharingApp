import { combineReducers } from "redux";
import rideRequestReducer from "./rideRequestReducer";

const driverReducer = (
  state = { location: { latitude: 37.78125, longitude: -122.445 } },
  action
) => {
  return state;
};

const rootReducer = combineReducers({
  rideRequest: rideRequestReducer,
  driver: driverReducer,
});

export default rootReducer;
