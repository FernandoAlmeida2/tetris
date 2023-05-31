import { Container } from "./styles";

type Props = {
    x: number;
    y: number;
}

export default function Piece({ x, y }: Props) {
    const unit = 34;
    return(
        <Container left={x * unit} top={y * unit} unit={unit}></Container>
    )
}