import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  gap: 16px;
  align-items: center;
  color: #10312a;
  h1 {
    font-size: 64px;
  }
  @media (max-width: 700px) {
    gap: 4vw;
    padding: 16vw;
    h1 {
      font-size: 10vw;
    }
  }
`;

export const RankingDiv = styled.div`
  background-color: #eae8e8;
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  width: 80vw;
  border: 0.8vw solid #10312a;
  border-radius: 2vw;
  gap: 0.5vw;
  padding: 1vw;
  @media (max-width: 700px) {
    padding-top: 2vw;
    min-height: 40vh;
    border: 1.2vw solid #10312a;
    border-radius: 4vw;
    gap: 0.5vw;
  }
`;

export const RowItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 24px;
    width: 10vw;
    text-align: center;
  }
  @media (max-width: 700px) {
    p {
      width: 18vw;
      font-size: 3.4vw;
    }
  }
`;
export const ReturnStyle = styled.p`
  position: absolute;
  top: 0.5vw;
  left: 0.5vw;
  line-height: 28px;
  cursor: pointer;

  @media (max-width: 700px) {
    line-height: 5vw;
    font-size: 3.5vw;
  }
`;
