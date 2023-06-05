import styled from "styled-components";
import { MAX_VERTICAL } from "../../constants/grid";
import { unit } from "../../constants/pieces";

export const Container = styled.div`
  width: 8vw;
  height: ${2 * MAX_VERTICAL + 1}vw;
  background-color: #e8e1cf;
  margin-top: 3.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${4 * unit}vw;
  padding: ${unit}vw;
  border-radius: 0 0.5vw 0.5vw 0;
`;

export const TextStyle = styled.div`
  text-align: center;
  h1{
    font-size: 3vw;
    font-weight: 700;
    margin-bottom: 1vw;
  }
  p {
    font-size: 1.5vw;
  }
`

export const RowStyle = styled.div`
  display: flex;
`;

export const PieceStyle = styled.div<{ isColored: number; }>`
  width: ${unit}vw;
  height: ${unit}vw;
  background-color: ${(props) => props.isColored === 1 ? "#10312a" : "transparent"};
  border: ${(props) => props.isColored === 1 ? "0.5vw double #E8E1CF" : "none"};
`;
