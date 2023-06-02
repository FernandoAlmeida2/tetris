import Piece from "../../components/piece/Piece";
import { Container, Screen } from "./Game.styles";
import { useGame } from "../../hooks/useGame";
import { useEffect } from "react";
import { X0, Y0 } from "../../constants/grid";

export default function Game() {
  const gameState = useGame();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    const interval = setInterval(() => {
      gameState.moveDown();
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (gameState.blockedPiecesCounter > 0) {
      gameState.fetchNewPiece();
    }
  }, [gameState.blockedPiecesCounter]);

  function handleKeyDown(e: KeyboardEvent) {
    switch (e.code) {
      case "KeyA":
      case "ArrowLeft":
        gameState.moveLeft();
        break;

      case "KeyD":
      case "ArrowRight":
        gameState.moveRight();
        break;

      case "KeyS":
      case "ArrowDown":
        gameState.moveDown();
        break;
    }
  }

  return (
    <Container>
      <Screen>
        {gameState.grid.map((line, j) => (
          <div key={j}>
            {line.map((square: number, i: number) => (
              <Piece key={i} x={X0 + i} y={Y0 + j} isColored={square} />
            ))}
          </div>
        ))}
        {
          <Piece
            x={gameState.piecePosX}
            y={gameState.piecePosY}
            isColored={1}
          />
        }
      </Screen>
    </Container>
  );
}
