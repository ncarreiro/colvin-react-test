import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  updateCard,
  deleteCard,
  editCard
} from "../../redux/actions/cards-actions";

import { CardsStyles } from "./Cards.styles";

import CardForm from "../CardForm/CardForm";
import Card from "../../components/Card/Card";

class Cards extends Component {
  handleSubmit = values => {
    const { dispatch } = this.props;
    dispatch(updateCard(values));
  };

  handleDelete = cardId => {
    const { dispatch } = this.props;
    dispatch(deleteCard(cardId));
  };

  handleClose = () => {
    const { dispatch } = this.props;
    dispatch(editCard(null));
  };

  handleEdit = id => {
    const { dispatch } = this.props;
    dispatch(editCard(id));
  };

  render() {
    const { cards, editing } = this.props;
    return (
      <CardsStyles.CardContainer data-testid="cards-container">
        {cards.length > 0 &&
          cards.map(card =>
            editing === card.id ? (
              <CardForm
                key={card.id}
                cardId={card.id}
                form={`editCardForm-${card.id}`}
                initialValues={{ ...card }}
                onSubmit={this.handleSubmit}
                handleDelete={this.handleDelete}
                handleClose={this.handleClose}
              />
            ) : (
              <Card
                key={card.id}
                handleEdit={() => this.handleEdit(card.id)}
                {...card}
              />
            )
          )}
      </CardsStyles.CardContainer>
    );
  }
}

Cards.propTypes = {
  dispatch: PropTypes.func,
  cards: PropTypes.array,
  editing: PropTypes.number
};

const mapStateToProps = state => {
  return {
    cards: state.cards.items,
    editing: state.cards.editing
  };
};

export default connect(mapStateToProps)(Cards);
