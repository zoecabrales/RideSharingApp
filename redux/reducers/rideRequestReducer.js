const initialState = {
  rideRequests: [],
  driver: {
    location: {
      latitude: 37.78125,
      longitude: -122.445,
    },
  },
};

const driverReducer = (state = { location: {} }, action) => {
  switch (action.type) {
    case "SET_DRIVER_LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
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
