import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
