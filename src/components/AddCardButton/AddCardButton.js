import React, { Component } from "react";
import { connect } from "react-redux";

import { AddCardButtonStyles } from "./AddCardButton.styles";
import CardForm from "../../containers/CardForm/CardForm";

class AddCardButton extends Component {
  state = { showAddCardForm: false };

  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ showAddCardForm: !this.state.showAddCardForm });
  }

  render() {
    return (
      <AddCardButtonStyles.Container data-testid="add-card-button-container">
        {this.state.showAddCardForm && (
          <AddCardButtonStyles.AddCardFormContainer>
            <CardForm form="addCardForm" handleClose={this.handleOnClick} />
          </AddCardButtonStyles.AddCardFormContainer>
        )}
        <AddCardButtonStyles.Button onClick={this.handleOnClick}>
          +
        </AddCardButtonStyles.Button>
      </AddCardButtonStyles.Container>
    );
  }
}

export default connect()(AddCardButton);
