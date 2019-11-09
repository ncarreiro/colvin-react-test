import React, { Component } from "react";
import styled from "styled-components";

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
