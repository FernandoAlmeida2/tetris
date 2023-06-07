import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 150px;
  align-items: center;
  color: #10312a;
  h1 {
    font-size: 56px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
      line-height: 24px;
    }
  }
  @media (max-width: 700px) {
    gap: 40vw;
    h1 {
      font-size: 13.6vw;
    }
    div {
      gap: 2.4vw;
      p {
        line-height: 5.8vw;
      }
    }
  }
`;

export const InputStyle = styled.input`
  width: 250px;
  height: 30px;
  padding-left: 10px;
  font-size: 14px;
  color: #10312a;
  border: none;
  background-color: #fff;
  ::placeholder {
    opacity: 1;
    color: #bfbdbd;
  }
  @media (max-width: 700px) {
    width: 67vw;
    height: 10vw;
    padding-left: 2.4vw;
    font-size: 4vw;
  }
`;

export const StartButton = styled.button`
  color: #fff;
  background-color: #d62222;
  width: 250px;
  height: 45px;
  cursor: pointer;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  :hover {
    font-weight: 700;
    font-size: 16px;
  }
  @media (max-width: 700px) {
    width: 67vw;
    height: 10vw;
    font-size: 4vw;
    border-radius: 1.2vw;
    :hover {
      font-size: 4.5vw;
    }
  }
`;

export const InfoButton = styled.button`
  color: #fff;
  background-color: #d62222;
  width: 250px;
  height: 45px;
  cursor: pointer;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  :hover {
    font-weight: 700;
    font-size: 16px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const FormStyle = styled.form`
  display: flex;
    flex-direction: column;
    gap: 10px;
`