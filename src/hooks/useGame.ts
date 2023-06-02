import { useState } from "react";
import { initialGameState, X0, Y0 } from "../constants/grid";
import { canMove, clearRow, fillPiecePosition, isRowCompleted } from "./utils";

export function useGame() {
  const [gameState, setGameState] = useState(initialGameState);
  const [blockedPiecesCounter, setBlockedCounter] = useState(0)

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
        setBlockedCounter((prev) => prev + 1);
      return {
        piecePosX: prev.piecePosX,
        piecePosY: canMove(prev.piecePosX, prev.piecePosY + 1, prev.grid)
          ? prev.piecePosY + 1
          : prev.piecePosY,
        grid: prev.grid,
      };
    });
  }

  function fetchNewPiece() {
    setGameState(({ grid, piecePosX, piecePosY }) => {
      let newGrid = fillPiecePosition(grid, piecePosX, piecePosY);
      if (isRowCompleted(newGrid[piecePosY - Y0])) {
        newGrid = clearRow(newGrid, piecePosY - Y0);
      }
      return {
        piecePosX: initialGameState.piecePosX,
        piecePosY: initialGameState.piecePosY,
        grid: newGrid,
      };
    });
  }

  return {
    piecePosX: gameState.piecePosX,
    piecePosY: gameState.piecePosY,
    grid: gameState.grid,
    moveLeft,
    moveRight,
    moveDown,
    fetchNewPiece,
    blockedPiecesCounter,
  };
}
