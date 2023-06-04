import styled from "styled-components";
import { MAX_VERTICAL } from "../../constants/grid";
import { unit } from "../../constants/pieces";

export const Container = styled.div`
  width: 8vw;
  height: ${2 * MAX_VERTICAL + 1}vw;
  background-color: #e8e1cf;
  margin-top: 5.5vw;
`;

export const RowStyle = styled.div`
  display: flex;
`;

export const PieceStyle = styled.div<{ isColored: number; }>`
  width: ${unit}vw;
  height: ${unit}vw;
  background-color: ${(props) => props.isColored === 1 ? "#10312a" : "transparent"};
  border: ${(props) => props.isColored === 1 ? "0.5vw double #E8E1CF" : "none"};
`;
