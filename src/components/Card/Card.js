import React, { Component } from "react";
import PropTypes from "prop-types";
import { CardStyles } from "./Card.styles";

export default class Card extends Component {
  render() {
    const { header, image, description } = this.props;
    return (
      <CardStyles.Container data-testid="card-container">
        <CardStyles.Header data-testid="card-header">
          {header}
        </CardStyles.Header>
        <CardStyles.Image data-testid="card-image" src={image} />
        <CardStyles.Description data-testid="card-description">
          {description}
        </CardStyles.Description>
      </CardStyles.Container>
    );
  }
}

Card.propTypes = {
  header: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
