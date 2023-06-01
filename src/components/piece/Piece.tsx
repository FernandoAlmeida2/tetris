import { piecesMap, pieceTypes } from "../../constants/pieces";
import { Container } from "./styles";

type Props = {
    x: number;
    y: number;
    isColored: number;
}

export default function Piece({ x, y, isColored }: Props) {
    const unit = 2;
    return(
        <Container left={x * unit} top={y * unit} unit={unit} isColored={isColored}></Container>
    )
}

function rafflePiece(): number[][] {
    const index = Math.floor(Math.random() * pieceTypes.length);

    return piecesMap[pieceTypes[index]];
}