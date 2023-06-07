import Piece from "../../components/piece/Piece";
import { ConsoleStyle, Container, ReturnStyle, Screen } from "./Game.styles";
import { useGame } from "../../hooks/useGame";
import { useEffect } from "react";
import { piecesMap, SPEED_OPTIONS } from "../../constants/pieces";
import InfoPanel from "../../components/InfoPanel/InfoPanel";
import { useNavigate } from "react-router-dom";
import Controllers from "../../components/mobileButtons/Controllers";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { updateRanking } from "./Game.utils";

export default function Game() {
  const gameState = useGame();
  const navigate = useNavigate();
  const { name, speed } = useSelector((state: RootState) => state.game);
  const timeInterval = SPEED_OPTIONS[speed];

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      gameState.moveDown();
    }, timeInterval);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (gameState.blockedPiecesCounter > 0) {
      if (gameState.pieceY0 < 0) {
        gameState.gameOver();
        updateRanking(name, Number(gameState.score), speed);
        const timeout = setTimeout(() => {
          gameState.reset();
        }, 20);
        return () => clearTimeout(timeout);
      } else {
        gameState.fetchNewPiece();
      }
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
      <ConsoleStyle>
        <Screen>
          {gameState.grid.map((line, j) => (
            <div key={j}>
              {line.map((square: number, i: number) => (
                <Piece key={i} x={i} y={j} isColored={square} />
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
                  isColored={gameState.pieceY0 + j < 0 ? 0 : square}
                />
              ))}
            </div>
          ))}
        </Screen>
        <InfoPanel
          nextPiece={gameState.nextPiece}
          score={gameState.score}
          speed={Number(speed)}
        />
      </ConsoleStyle>
      <Controllers
        moveLeft={gameState.moveLeft}
        moveRight={gameState.moveRight}
        moveDown={gameState.moveDown}
        rotate={gameState.rotate}
      />
      <ReturnStyle onClick={() => navigate("/")}>Return to Menu</ReturnStyle>
    </Container>
  );
}
