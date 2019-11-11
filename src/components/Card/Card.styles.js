import styled from "styled-components";

const Container = styled.div`
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
