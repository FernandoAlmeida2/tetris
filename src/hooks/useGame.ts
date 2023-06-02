import { useState } from "react";
import { initialGameState, Y0 } from "../constants/grid";
import { canMoveDown, canMoveLeft, canMoveRight, clearRow, fillPiecePosition, isRowCompleted, rafflePiece } from "./utils";

export function useGame() {
  const [gameState, setGameState] = useState(initialGameState);
  const [blockedPiecesCounter, setBlockedCounter] = useState(0)

  function moveLeft() {
    setGameState((prev) => ({
      piecePosX: canMoveLeft(prev.piecePosX - 1, prev.piecePosY, prev.grid, prev.type)
        ? prev.piecePosX - 1
        : prev.piecePosX,
      piecePosY: prev.piecePosY,
      grid: prev.grid,
      type: prev.type
    }));
  }

  function moveRight() {
    setGameState((prev) => ({
      piecePosX: canMoveRight(prev.piecePosX + 1, prev.piecePosY, prev.grid, prev.type)
        ? prev.piecePosX + 1
        : prev.piecePosX,
      piecePosY: prev.piecePosY,
      grid: prev.grid,
      type: prev.type
    }));
  }

  function moveDown() {
    setGameState((prev) => {
      if (!canMoveDown(prev.piecePosX, prev.piecePosY + 1, prev.grid, prev.type))
        setBlockedCounter((prev) => prev + 1);
      return {
        piecePosX: prev.piecePosX,
        piecePosY: canMoveDown(prev.piecePosX, prev.piecePosY + 1, prev.grid, prev.type)
          ? prev.piecePosY + 1
          : prev.piecePosY,
        grid: prev.grid,
        type: prev.type
      };
    });
  }

  function fetchNewPiece() {
    setGameState(({ grid, piecePosX, piecePosY, type }) => {
      let newGrid = fillPiecePosition(grid, piecePosX, piecePosY, type);
      if (isRowCompleted(newGrid[piecePosY - Y0])) {
        newGrid = clearRow(newGrid, piecePosY - Y0);
      }
      return {
        piecePosX: initialGameState.piecePosX,
        piecePosY: initialGameState.piecePosY,
        grid: newGrid,
        type: rafflePiece(),
      };
    });
  }

  return {
    piecePosX: gameState.piecePosX,
    piecePosY: gameState.piecePosY,
    grid: gameState.grid,
    type: gameState.type,
    moveLeft,
    moveRight,
    moveDown,
    fetchNewPiece,
    blockedPiecesCounter,
  };
}
