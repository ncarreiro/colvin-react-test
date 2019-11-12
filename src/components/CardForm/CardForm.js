import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import { CardFormStyles } from "./CardForm.styles";
import { updateCard } from "../../redux/actions/cards-actions";

class CardForm extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const { dispatch } = this.props;
    dispatch(updateCard(values));
  }

  render() {
    const { pristine, handleSubmit } = this.props;
    return (
      <CardFormStyles.Container data-testid="card-form-container">
        <Form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <label htmlFor="id">ID</label>
            <Field name="id" component="input" type="text" disabled />
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
      </CardFormStyles.Container>
    );
  }
}

CardForm.propTypes = {
  pristine: PropTypes.bool,
  handleSubmit: PropTypes.func
};

export default connect()(reduxForm()(CardForm));
