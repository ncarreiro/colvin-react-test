import validator from "validator";

const required = value => (value ? undefined : "This field is required.");

const isValidUrl = value =>
  validator.isURL(value) ? undefined : "Enter a valid URL.";

const maxDescriptionLength = value =>
  value.length <= 160 ? undefined : "Maximum description length: 160.";

export { required, isValidUrl, maxDescriptionLength };
