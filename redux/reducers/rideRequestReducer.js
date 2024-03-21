const initialState = {
  rideRequests: [],
};

const rideRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RIDE_REQUESTS":
      return {
        ...state,
        rideRequests: action.payload,
      };
    case "UPDATE_RIDE_REQUEST_STATUS":
      return {
        ...state,
        rideRequests: state.rideRequests.map((request) =>
          request.id === action.payload.requestId
            ? { ...request, status: action.payload.newStatus }
            : request
        ),
      };

    default:
      return state;
  }
};

export default rideRequestReducer;
