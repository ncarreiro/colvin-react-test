import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import { CardFormStyles } from "./CardForm.styles";
import { addCard, editCard } from "../../redux/actions/cards-actions";

const onSubmit = (values, dispatch) => {
  if (values.id) {
    dispatch(editCard(values));
  } else {
    dispatch(addCard(values));
  }
};

class CardForm extends Component {
  render() {
    const { pristine, handleSubmit } = this.props;
    return (
      <CardFormStyles.Container data-testid="card-form-container">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="id">ID</label>
            <Field name="id" component="input" type="text" />
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

export default connect()(
  reduxForm({
    initialValues: {
      id: ""
    },
    form: "cardForm"
  })(CardForm)
);
