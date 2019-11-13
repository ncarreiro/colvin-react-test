import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import FormField from "../../components/FormField/FormField";
import CardFormActions from "./CardFormActions";
import { CardFormStyles } from "./CardForm.styles";

import {
  required,
  maxDescriptionLength,
  isValidUrl
} from "./CardFormValidations";

class CardForm extends Component {
  render() {
    const {
      pristine,
      handleSubmit,
      handleDelete,
      handleClose,
      cardId
    } = this.props;
    return (
      <CardFormStyles.Container
        data-testid="card-form-container"
        onSubmit={handleSubmit}
      >
        <Field
          name="id"
          component="input"
          type="number"
          disabled
          style={{ display: "none" }}
        />
        <Field
          autoFocus
          required
          label="Title"
          margin="normal"
          name="title"
          type="text"
          helperText="Write your Card title."
          component={FormField}
          validate={[required]}
        />
        <Field
          required
          label="Image"
          margin="normal"
          name="image"
          type="text"
          helperText="Enter a valid image URL."
          component={FormField}
          validate={[required, isValidUrl]}
        />
        <Field
          required
          multiline
          rows="5"
          label="Description"
          margin="normal"
          name="description"
          type="text"
          helperText="Add a description (less than 160 characters)."
          component={FormField}
          validate={[required, maxDescriptionLength]}
          style={{ flex: 1 }}
        />
        <CardFormActions
          handleDelete={handleDelete}
          handleClose={handleClose}
          cardId={cardId}
          pristine={pristine}
        />
      </CardFormStyles.Container>
    );
  }
}

CardForm.propTypes = {
  cardId: PropTypes.number,
  pristine: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleDelete: PropTypes.func,
  handleClose: PropTypes.func
};

export default connect()(reduxForm()(CardForm));
