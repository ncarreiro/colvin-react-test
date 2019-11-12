import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";

import { AppStyles } from "./App.styles";
import Cards from "../Cards/Cards";
import AddCardButton from "../../components/AddCardButton/AddCardButton";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStyles.AppContainer>
          <AddCardButton />
          <Cards />
        </AppStyles.AppContainer>
      </Provider>
    );
  }
}

export default App;
