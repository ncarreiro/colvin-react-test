import React, { Component } from "react";
import { CardsActionsStyles } from "./CardsActions.styles";
import AddCardButton from "./AddCardButton/AddCardButton";
import PrintCardsButton from "./PrintCardsButton/PrintCardsButton";

class CardsActions extends Component {
  render() {
    return (
      <CardsActionsStyles.Container data-testid="card-actions-container">
        <PrintCardsButton />
        <AddCardButton />
      </CardsActionsStyles.Container>
    );
  }
}

export default CardsActions;
