import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";

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
      <CardStyles.Wrapper data-testid="card-wrapper">
        <CardStyles.Container data-testid="card-container">
          <CardStyles.Title data-testid="card-title">{title}</CardStyles.Title>
          <CardStyles.Image data-testid="card-image" src={image} />
          <CardStyles.Description data-testid="card-description">
            {description}
          </CardStyles.Description>
          <Button
            variant="contained"
            color="primary"
            startIcon={<EditIcon />}
            onClick={this.handleEdit}
          />
        </CardStyles.Container>
      </CardStyles.Wrapper>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default connect()(Card);
