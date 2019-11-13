import styled from "styled-components";

const Container = styled.div`
  z-index: 9;
  display: flex;
  position: fixed;
  bottom: 20px;
  right: 20px;

  @media print {
    display: none;
  }
`;

export const CardsActionsStyles = {
  Container
};
