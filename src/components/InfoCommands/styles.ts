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
`;
export const InfoDiv = styled.div`
  position: relative;
  height: 16vw;
  width: 24vw;
  background-color: #fff;
  padding: 2vw 1vw 0 1vw;
  h1 {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }
`;

export const IconStyle = styled.div`
  position: absolute;
  top: 0.5vw;
  right: 0.5vw;
  cursor: pointer;
`;
