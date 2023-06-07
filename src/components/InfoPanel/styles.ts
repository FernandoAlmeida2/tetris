import styled from "styled-components";
import { MAX_VERTICAL } from "../../constants/grid";
import { unit } from "../../constants/pieces";

export const Container = styled.div`
  width: 9vw;
  height: ${2 * MAX_VERTICAL + 1}vw;
  background-color: #e8e1cf;
  margin-top: 1.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${4 * unit}vw;
  padding: ${unit}vw;
  border-width: 0.5vw 0.5vw 0.5vw 0;
  border-style: solid;
  border-color: #10312a;
  border-radius: 0 0.5vw 0.5vw 0;
  *{
    font-family: 'Roboto', sans-serif;
  }
  @media (max-width: 700px) {
    width: 18vw;
    height: ${4 * MAX_VERTICAL + 1}vw;
    margin-top: 7vw;
    gap: ${8 * unit}vw;
    padding: ${2 * unit}vw;
    border-radius: 0 1vw 1vw 0;
  }
`;

export const TextStyle = styled.div`
  text-align: center;
  h1 {
    font-size: 3vw;
    font-weight: 700;
    margin-bottom: 1vw;
  }
  p {
    font-size: 2vw;
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 6vw;
      font-weight: 700;
      margin-bottom: 2vw;
    }
    p {
      font-size: 4vw;
    }
  }
`;

export const PiecesDiv = styled.div`
  width: ${4 * unit}vw;
  height: ${4 * unit}vw;
  @media (max-width: 700px) {
    width: ${8 * unit}vw;
    height: ${8 * unit}vw;
  }
`;

export const RowStyle = styled.div`
  display: flex;
`;

export const PieceStyle = styled.div<{ isColored: number }>`
  width: ${unit}vw;
  height: ${unit}vw;
  background-color: ${(props) =>
    props.isColored === 1 ? "#10312a" : "transparent"};
  border: ${(props) =>
    props.isColored === 1 ? "0.5vw double #E8E1CF" : "none"};
  @media (max-width: 700px) {
    width: ${2 * unit}vw;
    height: ${2 * unit}vw;
    border: ${(props) =>
      props.isColored === 1 ? "1vw double #E8E1CF" : "none"};
  }
`;
