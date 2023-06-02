import { piecesMap, pieceTypes } from "../../constants/pieces";
import { Container } from "./styles";

type Props = {
  x: number;
  y: number;
  isColored: number;
};

export default function Piece({ x, y, isColored }: Props) {
  const unit = 2;
  //should do this to avoid too many renders warning "Over 200 classes were generated
  //for component Component. Consider using style property for frequently changed styles."
  const colorStyle = {
    backgroundColor: isColored === 1 ? "#10312a" : "transparent",
    border: isColored === 1 ? "0.5vw double #E8E1CF" : "none",
  };

  return (
    <Container
      left={x * unit}
      top={y * unit}
      unit={unit}
      style={colorStyle}
    ></Container>
  );
}

function rafflePiece(): number[][] {
  const index = Math.floor(Math.random() * pieceTypes.length);

  return piecesMap[pieceTypes[index]];
}
