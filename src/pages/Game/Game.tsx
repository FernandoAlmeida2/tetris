import Piece from "../../components/piece/Piece";
import { ConsoleStyle, Container, ReturnStyle, Screen } from "./Game.styles";
import { useGame } from "../../hooks/useGame";
import { useEffect, useState } from "react";
import { piecesMap } from "../../constants/pieces";
import InfoPanel from "../../components/InfoPanel/InfoPanel";
import { useNavigate, useParams } from "react-router-dom";
import Controllers from "../../components/mobileButtons/Controllers";

export default function Game() {
  const gameState = useGame();
  const { speed } = useParams();
  const navigate = useNavigate();
  const timeInterval = 1000 - Number(speed) * 90;

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    const interval = setInterval(() => {
      gameState.moveDown();
    }, timeInterval);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (gameState.blockedPiecesCounter > 0) {
      if (gameState.pieceY0 <= 0) {
        gameState.gameOver();
        const timeout = setTimeout(() => {
          gameState.reset();
        }, 100);
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
