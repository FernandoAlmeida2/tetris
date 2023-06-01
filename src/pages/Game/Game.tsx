import Piece from "../../components/piece/Piece";
import { Container, Screen } from "./Game.styles";
import { usePiece } from "../../hooks/usePiece";
import { useEffect } from "react";
import { useScreen } from "../../hooks/useScreen";

export default function Game() {
  const piece = usePiece();
  const screen = useScreen();

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
        {screen.screenState.map((line, j) => (
          <div>
            {line.map((square: number,i: number) => (
              <Piece key={`${i}${j}`} x={screen.x0 + i} y={screen.y0 + j} isColored={square} />
            ))}
          </div>
        ))}
        <Piece x={piece.x} y={piece.y} isColored={1} />
      </Screen>
    </Container>
  );
}