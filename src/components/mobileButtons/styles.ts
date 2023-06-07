import styled from "styled-components";
import { MAX_HORIZONTAL } from "../../constants/grid";
import { unit } from "../../constants/pieces";

export const Container = styled.div`
  display: none;
  *{
    font-family: 'Roboto', sans-serif;
  }
  @media (max-width: 700px) {
    display: initial;
  }
`;

export const ButtonsDiv = styled.div`
  background-color: #d62222;
  height: 32vw;
  width: ${2 * unit * MAX_HORIZONTAL + 42}vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2vw;
  color: #fff;
  padding: 2vw 15vw;
  margin-bottom: 2vw;
`;
export const DirectionalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftRightDiv = styled.div`
  width: 25vw;
  display: flex;
  justify-content: space-between;
`;

export const SmallButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  button {
    width: 9vw;
    height: 9vw;
    border-radius: 6vw;
    background-color: #f8dd12;
    box-shadow: 1vw 0.86vw 4vw 0.14vw rgba(0, 0, 0, 0.24);
    border: none;
    cursor: pointer;
    :active {
      transform: scale(0.92);
      box-shadow: 0.42vw 0.28vw 3.1vw 0.14vw rgba(0, 0, 0, 0.24);
    }
  }
`;

export const BigButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1vw;
  button {
    width: 15vw;
    height: 15vw;
    border-radius: 8vw;
    background-color: #f8dd12;
    box-shadow: 1vw 0.86vw 4vw 0.14vw rgba(0, 0, 0, 0.24);
    border: none;
    cursor: pointer;
    :active {
      transform: scale(0.92);
      box-shadow: 0.42vw 0.28vw 3.1vw 0.14vw rgba(0, 0, 0, 0.24);
    }
  }
`;
