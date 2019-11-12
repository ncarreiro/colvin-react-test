import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import { CardFormStyles } from "./CardForm.styles";

import FormField from "../../components/FormField/FormField";
import CardFormActions from "./CardFormActions";

const required = value => (value ? undefined : "Required");

class CardForm extends Component {
  handleDelete = () => {
    const { handleDelete, cardId } = this.props;
    handleDelete(cardId);
  };

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
        <div style={{ display: "none" }}>
          <Field name="id" component="input" type="number" disabled />
        </div>
        <Field
          required
          label="Title"
          margin="normal"
          name="title"
          type="text"
          component={FormField}
          validate={[required]}
        />
        <Field
          required
          label="Image"
          margin="normal"
          name="image"
          type="text"
          component={FormField}
          validate={[required]}
        />
        <Field
          required
          multiline
          rows="6"
          label="Description"
          margin="normal"
          name="description"
          type="text"
          component={FormField}
          validate={[required]}
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
  pristine: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleDelete: PropTypes.func,
  handleClose: PropTypes.func,
  cardId: PropTypes.number
};

export default connect()(reduxForm()(CardForm));
