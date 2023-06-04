import styled from "styled-components";
import { MAX_HORIZONTAL, MAX_VERTICAL } from "../../constants/grid";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Screen = styled.div`
  width: ${2 * MAX_HORIZONTAL + 1}vw;
  height: ${2 * MAX_VERTICAL + 1}vw;
  border: 0.5vw solid #10312a;
  background-color: #e8e1cf;
  margin-top: 5.5vw;
`;
