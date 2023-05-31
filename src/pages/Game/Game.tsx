import Piece from "../../components/piece/Piece";
import { Container, Screen } from "./Game.styles";
import { usePiece } from "../../hooks/usePiece";
import { useEffect } from "react";

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
        <Piece x={piece.x} y={piece.y} />
      </Screen>
    </Container>
  );
}
