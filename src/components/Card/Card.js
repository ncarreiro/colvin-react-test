import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 10px;
  padding: 10px;
  width: 300px;
  height: 450px;
  border: 2px solid #333;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 16px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 200px;
`;

const CardDescription = styled.div`
  overflow: hidden;
  flex: 1;
  margin: 10px 0;
`;

export default class Card extends Component {
  render() {
    const { header, image, description } = this.props;
    return (
      <CardContainer>
        <CardHeader>{header}</CardHeader>
        <CardImage src={image} />
        <CardDescription>{description}</CardDescription>
      </CardContainer>
    );
  }
}

Card.propTypes = {
  header: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
