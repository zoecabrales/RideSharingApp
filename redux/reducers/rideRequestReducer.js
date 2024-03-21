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
    default:
      return state;
  }
};

export default rideRequestReducer;
