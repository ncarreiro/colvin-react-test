import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import { CardFormStyles } from "./CardForm.styles";

class CardForm extends Component {
  render() {
    const { pristine, handleSubmit, handleClose } = this.props;
    return (
      <CardFormStyles.Container data-testid="card-form-container">
        <Form onSubmit={handleSubmit}>
          <div style={{ display: "none" }}>
            <label htmlFor="id">ID</label>
            <Field name="id" component="input" type="number" disabled />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <Field name="title" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <Field name="image" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Field name="description" component="textarea" type="text" />
          </div>
          <button disabled={pristine} type="submit">
            SUBMIT
          </button>
        </Form>
        <button onClick={handleClose}>CLOSE</button>
      </CardFormStyles.Container>
    );
  }
}

CardForm.propTypes = {
  pristine: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleClose: PropTypes.func
};

export default connect()(reduxForm()(CardForm));
