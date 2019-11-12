import React, { Component } from "react";
import { Helmet } from "react-helmet";
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
          <Helmet>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
          </Helmet>
          <AddCardButton />
          <Cards />
        </AppStyles.AppContainer>
      </Provider>
    );
  }
}

export default App;
