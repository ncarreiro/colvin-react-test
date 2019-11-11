import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";

import { AppStyles } from "./App.styles";
import Card from "../../components/Card/Card";

import mockedCards from "../../mocks/mockedCards";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStyles.AppContainer>
          <h1>Card game made by Nahuel Carreiro</h1>
          <AppStyles.MainContainer>
            {mockedCards.length > 0 &&
              mockedCards.map(card => <Card key={card.id} {...card} />)}
          </AppStyles.MainContainer>
        </AppStyles.AppContainer>
      </Provider>
    );
  }
}
