import styled from "styled-components";
import { MAX_HORIZONTAL, MAX_VERTICAL } from "../../constants/grid";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const ConsoleStyle = styled.div`
  width: ${2 * MAX_HORIZONTAL + 21}vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #d62222;
  border-radius: 2vw 2vw 0 0;
`

export const Screen = styled.div`
  width: ${2 * MAX_HORIZONTAL + 1}vw;
  height: ${2 * MAX_VERTICAL + 1}vw;
  border: 0.5vw solid #10312a;
  background-color: #e8e1cf;
  margin-top: 3.5vw;
  border-radius: 0.5vw 0 0 0.5vw;
`;
