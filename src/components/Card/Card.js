import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardContainer = styled.div`
  border: 2px solid #333;
  border-radius: 20px;
`;

export default class Card extends Component {
  render() {
    const { text } = this.props;
    return <CardContainer>{text}</CardContainer>;
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired
};
