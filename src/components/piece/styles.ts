import styled from "styled-components";

export const Container = styled.div<{left: number, top: number, unit: number}>`
    width: ${props => props.unit * 4}px;
    height: ${props => props.unit * 4}px;
    background-color: red;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
`