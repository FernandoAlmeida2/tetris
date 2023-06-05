import styled from "styled-components";
import { unit } from "../../constants/pieces";

export const Container = styled.div<{
  x: number;
  y: number;
  isColored: number;
}>`
  width: ${unit}vw;
  height: ${unit}vw;
  position: absolute;
  left: ${(props) => props.x * unit}vw;
  top: ${(props) => props.y * unit}vw;
  border: ${(props) =>
      props.isColored === 1 ? "0.5vw double #E8E1CF" : "none"};
  @media (max-width: 700px) {
    width: ${2 * unit}vw;
    height: ${2 * unit}vw;
    left: ${(props) => props.x * unit * 2}vw;
    top: ${(props) => props.y * unit * 2}vw;
    border: ${(props) =>
      props.isColored === 1 ? "1vw double #E8E1CF" : "none"};
  }
`;
