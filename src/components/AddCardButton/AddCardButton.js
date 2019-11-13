import React, { Component } from "react";
import { connect } from "react-redux";
import { addCard } from "../../redux/actions/cards-actions";
import CardForm from "../../containers/CardForm/CardForm";

import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { AddCardButtonStyles } from "./AddCardButton.styles";

class AddCardButton extends Component {
  constructor() {
    super();
    this.state = { showAddCardForm: false };
  }

  handleSubmit = values => {
    const { dispatch } = this.props;
    dispatch(addCard(values));
  };

  handleClose = () => {
    this.setState({ showAddCardForm: !this.state.showAddCardForm });
  };

  render() {
    return (
      <AddCardButtonStyles.Container data-testid="add-card-button-container">
        {this.state.showAddCardForm && (
          <AddCardButtonStyles.AddCardFormContainer>
            <CardForm
              form="addCardForm"
              onSubmit={this.handleSubmit}
              handleClose={this.handleClose}
            />
          </AddCardButtonStyles.AddCardFormContainer>
        )}
        <Fab color="primary" aria-label="add" onClick={this.handleClose}>
          <AddIcon />
        </Fab>
      </AddCardButtonStyles.Container>
    );
  }
}

export default connect()(AddCardButton);
