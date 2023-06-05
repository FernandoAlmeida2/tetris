import { unit } from "../../constants/pieces";
import { Container } from "./styles";

type Props = {
  x: number;
  y: number;
  isColored: number;
};

export default function Piece({ x, y, isColored }: Props) {
  //should do this to avoid too many renders warning "Over 200 classes were generated
  //for component Component. Consider using style property for frequently changed styles.
  const colorStyle = {
    backgroundColor: isColored === 1 ? "#10312a" : "transparent",
  };

  return (
    <Container
      x={x}
      y={y}
      style={colorStyle}
      isColored={isColored}
    ></Container>
  );
}
