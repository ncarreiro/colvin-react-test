import React, { Component } from "react";
import PropTypes from "prop-types";
import { CardStyles } from "./Card.styles";

export default class Card extends Component {
  render() {
    const { title, image, description } = this.props;
    return (
      <CardStyles.Container data-testid="card-container">
        <CardStyles.Title data-testid="card-title">{title}</CardStyles.Title>
        <CardStyles.Image data-testid="card-image" src={image} />
        <CardStyles.Description data-testid="card-description">
          {description}
        </CardStyles.Description>
      </CardStyles.Container>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
