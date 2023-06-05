import styled from "styled-components";
import { MAX_HORIZONTAL, MAX_VERTICAL } from "../../constants/grid";
import { unit } from "../../constants/pieces";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ConsoleStyle = styled.div`
  width: ${unit * MAX_HORIZONTAL + 21}vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #d62222;
  border-radius: 2vw 2vw 0 0;
  @media (max-width: 700px) {
    height: 90vw;
    margin-top: 8vw;
    width: ${2 * unit * MAX_HORIZONTAL + 42}vw;
    border-radius: 4vw 4vw 0 0;
  }
`;

export const Screen = styled.div`
  width: ${unit * MAX_HORIZONTAL + 1}vw;
  height: ${unit * MAX_VERTICAL + 1}vw;
  border: 0.5vw solid #10312a;
  background-color: #e8e1cf;
  margin-top: 3.5vw;
  border-radius: 0.5vw 0 0 0.5vw;
  position: relative;
  @media (max-width: 700px) {
    margin-top: 7vw;
    width: ${2 * unit * MAX_HORIZONTAL + 1}vw;
    height: ${2 * unit * MAX_VERTICAL + 1}vw;
    border-radius: 1vw 0 0 1vw;
  }
`;