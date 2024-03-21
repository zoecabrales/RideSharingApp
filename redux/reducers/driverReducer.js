import { SET_DRIVER_LOCATION } from "../actions/types";

const initialState = {
  location: null,
};

const driverReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DRIVER_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};

export default driverReducer;
