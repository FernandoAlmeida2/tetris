import styled from "styled-components";

export const Container = styled.div<{left: number, top: number, unit: number, isColored: number}>`
    width: ${props => props.unit}vw;
    height: ${props => props.unit}vw;
    background-color: ${props => props.isColored === 1 ? "#10312a" : "transparent"};
    border: ${props => props.isColored === 1 ? "0.5vw double #E8E1CF" : "none"};
    position: absolute;
    left: ${props => props.left}vw;
    top: ${props => props.top}vw;
`