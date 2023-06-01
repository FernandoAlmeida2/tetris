import Piece from "../../components/piece/Piece";
import { Container, Screen } from "./Game.styles";
import { usePiece } from "../../hooks/usePiece";
import { useEffect } from "react";
import { X0, Y0 } from "../../constants/grid";

export default function Game() {
  const piece = usePiece();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  function handleKeyDown(e: KeyboardEvent) {
    switch (e.code) {
      case "KeyA":
      case "ArrowLeft":
        piece.moveLeft();
        break;

      case "KeyD":
      case "ArrowRight":
        piece.moveRight();
        break;

      case "KeyS":
      case "ArrowDown":
        piece.moveDown();
        break;
    }
  }

  return (
    <Container>
      <Screen>
        {piece.screenState.map((line, j) => (
          <div key={j}>
            {line.map((square: number,i: number) => (
              <Piece key={i} x={X0 + i} y={Y0 + j} isColored={square} />
            ))}
          </div>
        ))}
        <Piece x={piece.x} y={piece.y} isColored={1} />
      </Screen>
    </Container>
  );
}
