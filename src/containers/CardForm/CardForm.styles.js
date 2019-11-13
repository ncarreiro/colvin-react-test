import styled from "styled-components";
import { Form } from "redux-form";
import { ButtonGroup } from "@material-ui/core";

const Container = styled(Form)`
  background: #fff;
  color: #023838;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  width: 300px;
  height: 450px;
  border: 5px solid #41d5ab;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 3px 10px #000;
`;

const ButtonContainer = styled(ButtonGroup)``;

export const CardFormStyles = {
  Container,
  ButtonContainer
};
