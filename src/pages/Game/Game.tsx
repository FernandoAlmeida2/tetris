import Piece from "../../components/piece/Piece";
import { Container, Screen } from "./Game.styles";
import { usePiece } from "../../hooks/usePiece";
import { useEffect } from "react";
import { X0, Y0 } from "../../constants/grid";
import { useScreen } from "../../hooks/useScreen";

export default function Game() {
  const piece = usePiece();
  const gameScreen = useScreen();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    const interval = setInterval(() => {
      piece.moveDown(gameScreen.screenState);
      if(piece.isBlocked) {
        piece.fetchNewPiece();
        gameScreen.updateGrid(piece.x, piece.y);
      }
    }, 1000);
    return () => clearInterval(interval);
    
  }, [piece.isBlocked]);

  function handleKeyDown(e: KeyboardEvent) {
    switch (e.code) {
      case "KeyA":
      case "ArrowLeft":
        piece.moveLeft(gameScreen.screenState);
        break;

      case "KeyD":
      case "ArrowRight":
        piece.moveRight(gameScreen.screenState);
        break;

      case "KeyS":
      case "ArrowDown":
        piece.moveDown(gameScreen.screenState);
        break;
    }
  }

  return (
    <Container>
      <Screen>
        {gameScreen.screenState.map((line, j) => (
          <div key={j}>
            {line.map((square: number,i: number) => (
              <Piece key={i} x={X0 + i} y={Y0 + j} isColored={square} />
            ))}
          </div>
        ))}
        {<Piece x={piece.x} y={piece.y} isColored={1} />}
      </Screen>
    </Container>
  );
}
