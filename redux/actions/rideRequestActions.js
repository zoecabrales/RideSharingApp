export const setRideRequests = (requests) => ({
  type: "SET_RIDE_REQUESTS",
  payload: requests,
});

export const updateRideRequestStatus = (requestId, newStatus) => ({
  type: "UPDATE_RIDE_REQUEST_STATUS",
  payload: { requestId, newStatus },
});
