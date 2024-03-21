import {
  SET_DRIVER_LOCATION,
  SET_NEARBY_RIDE_REQUESTS,
  UPDATE_RIDE_REQUEST_STATUS,
} from "./types";

export const setDriverLocation = (location) => ({
  type: SET_DRIVER_LOCATION,
  payload: location,
});

export const setNearbyRideRequests = (rideRequests) => ({
  type: SET_NEARBY_RIDE_REQUESTS,
  payload: rideRequests,
});

export const updateRideRequestStatus = (rideRequestId, status) => ({
  type: UPDATE_RIDE_REQUEST_STATUS,
  payload: { rideRequestId, status },
});
