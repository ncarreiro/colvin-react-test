import React, { Component } from "react";
import { connect } from "react-redux";

import { AddCardButtonStyles } from "./AddCardButton.styles";
import CardForm from "../../containers/CardForm/CardForm";

class AddCardButton extends Component {
  state = { showAddCardForm: false };

  constructor() {
    super();
    this.handleFormClose = this.handleFormClose.bind(this);
  }

  handleFormClose() {
    this.setState({ showAddCardForm: !this.state.showAddCardForm });
  }

  render() {
    return (
      <AddCardButtonStyles.Container data-testid="add-card-button-container">
        {this.state.showAddCardForm && (
          <AddCardButtonStyles.AddCardFormContainer>
            <CardForm form="addCardForm" handleClose={this.handleFormClose} />
          </AddCardButtonStyles.AddCardFormContainer>
        )}
        <AddCardButtonStyles.Button onClick={this.handleFormClose}>
          +
        </AddCardButtonStyles.Button>
      </AddCardButtonStyles.Container>
    );
  }
}

export default connect()(AddCardButton);
