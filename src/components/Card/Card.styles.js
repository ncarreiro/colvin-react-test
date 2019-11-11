import styled from "styled-components";

const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  width: 300px;
  height: 450px;
  border: 2px solid #333;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
`;

const Description = styled.div`
  overflow: hidden;
  flex: 1;
  margin: 10px 0;
`;

export const CardStyles = {
  Container,
  Header,
  Image,
  Description
};
