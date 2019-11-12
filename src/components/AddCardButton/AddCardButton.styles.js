import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: 0;
`;

const Button = styled.button`
  font-size: 48px;
  font-weight: 700;
  background: #fff;
  color: #333;
  margin: 10px;
  padding: 10px;
  width: 80px;
  height: 80px;
  border: 3px solid #111;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 0 3px 10px #000;
`;

const AddCardFormContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const AddCardButtonStyles = {
  Container,
  Button,
  AddCardFormContainer
};
