import Piece from "../../components/piece/Piece";
import { Container, Screen } from "./Game.styles";
import { useGame } from "../../hooks/useGame";
import { useEffect } from "react";
import { gridX0, gridY0 } from "../../constants/grid";
import { piecesMap } from "../../constants/pieces";
import InfoPanel from "../../components/InfoPanel.tsx/InfoPanel";

export default function Game() {
  const gameState = useGame();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    const interval = setInterval(() => {
      gameState.moveDown();
    }, 1000);
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

      case "KeyR":
      case "ArrowUp":
        gameState.rotate();
        break;
    }
  }

  return (
    <Container>
      <Screen>
        {gameState.grid.map((line, j) => (
          <div key={j}>
            {line.map((square: number, i: number) => (
              <Piece key={i} x={gridX0 + i} y={gridY0 + j} isColored={square} />
            ))}
          </div>
        ))}
        {piecesMap[gameState.type][gameState.rotation].map((line, j) => (
          <div key={j}>
            {line.map((square: number, i: number) => (
              <Piece
                key={i}
                x={gameState.pieceX0 + i}
                y={gameState.pieceY0 + j}
                isColored={square}
              />
            ))}
          </div>
        ))}
      </Screen>
      <InfoPanel nextPiece={gameState.nextPiece} score={gameState.score} speed={1} />
    </Container>
  );
}
