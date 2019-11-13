import styled from "styled-components";

const headerHeight = "60px";

const AppWrapper = styled.div`
  background: #023838;
  font-family: "Open Sans", sans-serif;
`;

const AppHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${headerHeight};
  font-size: 28px;
  font-weight: 700;
  color: #fff;
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #023838;
  min-height: calc(100vh - ${headerHeight});
`;

const AppTitle = styled.div`
  margin: 20px 0;
  font-size: 2em;
`;

export const AppStyles = {
  AppWrapper,
  AppHeader,
  AppContainer,
  AppTitle
};
