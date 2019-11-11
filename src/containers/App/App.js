import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";

import { AppStyles } from "./App.styles";
import Cards from "../Cards/Cards";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStyles.AppContainer>
          <Cards />
        </AppStyles.AppContainer>
      </Provider>
    );
  }
}
