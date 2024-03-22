export const selectDriverLocation = (state) =>
  state.driver.location || {
    latitude: 37.78125,
    longitude: -122.445,
  };
