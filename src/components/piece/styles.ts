import styled from "styled-components";

export const Container = styled.div<{left: number, top: number, unit: number}>`
    width: ${props => props.unit}vw;
    height: ${props => props.unit}vw;
    position: absolute;
    left: ${props => props.left}vw;
    top: ${props => props.top}vw;
`