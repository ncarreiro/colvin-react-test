import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
`;

const Container = styled.div`
  background: #eee;
  color: #333;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  height: 450px;
  border: 5px solid #111;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 3px 10px #000;
`;

const Title = styled.div`
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
  overflow-wrap: break-word;
  flex: 1;
  margin: 10px 0;
  line-height: 1.5em;
`;

export const CardStyles = {
  Wrapper,
  Container,
  Title,
  Image,
  Description
};
