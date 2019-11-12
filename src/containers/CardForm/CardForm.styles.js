import styled from "styled-components";
import { Form } from "redux-form";
import { ButtonGroup } from "@material-ui/core";

const Container = styled(Form)`
  background: #eee;
  color: #333;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  width: 300px;
  height: 450px;
  border: 5px solid #111;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 3px 10px #000;
`;

const ButtonContainer = styled(ButtonGroup)`
  width: 100%;
`;

export const CardFormStyles = {
  Container,
  ButtonContainer
};
