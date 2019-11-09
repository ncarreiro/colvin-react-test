import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Welcome to Colvin React Coding Challenge</h1>
      </Provider>
    );
  }
}
