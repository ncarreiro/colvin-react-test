import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import { StyledApp } from "./containers/App.styles";
import Card from "./components/Card/Card";
import mockedCards from "./mocks/mockedCards";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StyledApp.AppContainer>
          <h1>Card game made by Nahuel Carreiro</h1>
          <StyledApp.MainContainer>
            {mockedCards.map(card => (
              <Card key={card.id} {...card} />
            ))}
          </StyledApp.MainContainer>
        </StyledApp.AppContainer>
      </Provider>
    );
  }
}
