import styled from "styled-components";

const Container = styled.div`
  z-index: 9;
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const AddCardFormContainer = styled.div`
  z-index: 9;
  position: absolute;
  bottom: -10px;
  right: -10px;
`;

export const AddCardButtonStyles = {
  Container,
  AddCardFormContainer
};
