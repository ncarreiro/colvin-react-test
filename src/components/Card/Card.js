import React, { Component } from "react";
import PropTypes from "prop-types";
import EditIcon from "@material-ui/icons/Edit";

import { CardStyles } from "./Card.styles";

class Card extends Component {
  render() {
    const { handleEdit, title, image, description } = this.props;
    return (
      <CardStyles.Wrapper data-testid="card-wrapper">
        <CardStyles.Container data-testid="card-container">
          <CardStyles.Title data-testid="card-title">{title}</CardStyles.Title>
          <CardStyles.Image data-testid="card-image" src={image} />
          <CardStyles.Description data-testid="card-description">
            {description}
          </CardStyles.Description>
          <CardStyles.EditButton
            variant="contained"
            color="primary"
            onClick={handleEdit}
          >
            <EditIcon />
          </CardStyles.EditButton>
        </CardStyles.Container>
      </CardStyles.Wrapper>
    );
  }
}

Card.propTypes = {
  handleEdit: PropTypes.func,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
};

export default Card;
