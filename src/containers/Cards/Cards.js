import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { CardsStyles } from "./Cards.styles";
import Card from "../../components/Card/Card";

class Cards extends Component {
  render() {
    const { cards } = this.props;
    return (
      <CardsStyles.CardContainer>
        {cards.length > 0 &&
          cards.map(card => <Card key={card.id} {...card} />)}
      </CardsStyles.CardContainer>
    );
  }
}

Cards.propTypes = {
  cards: PropTypes.array
};

const mapStateToProps = state => {
  return {
    cards: state.cards.items
  };
};

export default connect(mapStateToProps)(Cards);
