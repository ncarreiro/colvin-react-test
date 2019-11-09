import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import Card from "./components/Card/Card";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App-container">
          <h1>Welcome to Colvin React Coding Challenge</h1>
          <Card text="Test text for the Card" />
        </div>
      </Provider>
    );
  }
}
