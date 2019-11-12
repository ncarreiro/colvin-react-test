import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";

import { AppStyles } from "./App.styles";
import Cards from "../Cards/Cards";
import CardForm from "../../components/CardForm/CardForm";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStyles.AppContainer>
          <CardForm />
          <Cards />
        </AppStyles.AppContainer>
      </Provider>
    );
  }
}

export default App;
