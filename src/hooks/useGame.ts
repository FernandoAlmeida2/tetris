import { useState } from "react";
import { initialGameState, X0, Y0 } from "../constants/grid";

export function useGame() {
  const [gameState, setGameState] = useState(initialGameState);
  const [isBlocked, setIsBlocked] = useState(false);

  function moveLeft() {
    setGameState((prev) => ({
      piecePosX: canMove(prev.piecePosX - 1, prev.piecePosY, prev.grid)
        ? prev.piecePosX - 1
        : prev.piecePosX,
      piecePosY: prev.piecePosY,
      grid: prev.grid,
    }));
  }

  function moveRight() {
    setGameState((prev) => ({
      piecePosX: canMove(prev.piecePosX + 1, prev.piecePosY, prev.grid)
        ? prev.piecePosX + 1
        : prev.piecePosX,
      piecePosY: prev.piecePosY,
      grid: prev.grid,
    }));
  }

  function moveDown() {
    setGameState((prev) => {
      if (!canMove(prev.piecePosX, prev.piecePosY + 1, prev.grid))
        setIsBlocked(true);
      return {
        piecePosX: prev.piecePosX,
        piecePosY: canMove(prev.piecePosX, prev.piecePosY + 1, prev.grid)
          ? prev.piecePosY + 1
          : prev.piecePosY,
        grid: prev.grid,
      };
    });
  }

  function canMove(x: number, y: number, grid: number[][]) {
    if (grid[y - Y0] !== undefined && grid[y - Y0][x - X0] !== undefined) {
      return grid[y - Y0][x - X0] === 0;
    }

    return false;
  }

  function fetchNewPiece() {
    setGameState((prevGame) => {
      const newGrid = prevGame.grid.map((row) => [...row]);
      newGrid[prevGame.piecePosY - Y0][prevGame.piecePosX - X0] = 1;
      return {
        piecePosX: initialGameState.piecePosX,
        piecePosY: initialGameState.piecePosY,
        grid: newGrid,
      };
    });
    setIsBlocked(false);
  }

  return {
    piecePosX: gameState.piecePosX,
    piecePosY: gameState.piecePosY,
    grid: gameState.grid,
    moveLeft,
    moveRight,
    moveDown,
    isBlocked,
    fetchNewPiece,
  };
}
