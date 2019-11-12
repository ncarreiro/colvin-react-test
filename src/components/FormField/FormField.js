import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";

const FormField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

FormField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object
};

export default FormField;
