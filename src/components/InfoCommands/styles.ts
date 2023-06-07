import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  min-height: 100%;
  width: 100%;
  background: rgba(119, 119, 119, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    font-family: "Roboto", sans-serif;
  }
`;
export const InfoDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 16vw;
  width: 24vw;
  background-color: #fff;
  padding: 1vw;
  h2 {
    text-align: center;
    font-size: 1.5vw;
    font-weight: 700;
    margin-bottom: 0.5vw;
  }
`;

export const IconStyle = styled.div`
  position: absolute;
  top: 0.5vw;
  right: 0.5vw;
  cursor: pointer;
`;
