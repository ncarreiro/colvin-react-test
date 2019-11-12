import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { CardStyles } from "./Card.styles";
import { editCard } from "../../redux/actions/cards-actions";

class Card extends Component {
  constructor() {
    super();
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    const { dispatch, id } = this.props;
    dispatch(editCard(id));
  }

  render() {
    const { title, image, description } = this.props;
    return (
      <CardStyles.Container data-testid="card-container">
        <CardStyles.Title data-testid="card-title">{title}</CardStyles.Title>
        <CardStyles.Image data-testid="card-image" src={image} />
        <CardStyles.Description data-testid="card-description">
          {description}
        </CardStyles.Description>
        <button onClick={this.handleEdit}>EDIT</button>
      </CardStyles.Container>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default connect()(Card);
