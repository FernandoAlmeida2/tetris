import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonStyle = styled.button`
    color: #fff;
    background-color: #d62222;
    width: 200px;
    height: 45px;
    cursor: pointer;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    :hover{
        width: 220px;
        height: 49.5px;
        font-weight: 700;
        font-size: 16px;
    }
`