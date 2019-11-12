import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { updateCard, editCard } from "../../redux/actions/cards-actions";

import { CardsStyles } from "./Cards.styles";

import CardForm from "../CardForm/CardForm";
import Card from "../../components/Card/Card";

class Cards extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSubmit(values) {
    const { dispatch } = this.props;
    dispatch(updateCard(values));
  }

  handleClose() {
    const { dispatch } = this.props;
    dispatch(editCard(null));
  }

  render() {
    const { cards, editing } = this.props;
    return (
      <CardsStyles.CardContainer>
        {cards.length > 0 &&
          cards.map(card =>
            editing === card.id ? (
              <CardForm
                key={card.id}
                form={`editCardForm-${card.id}`}
                initialValues={{ ...card }}
                onSubmit={this.handleSubmit}
                handleClose={this.handleClose}
              />
            ) : (
              <Card key={card.id} {...card} />
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
