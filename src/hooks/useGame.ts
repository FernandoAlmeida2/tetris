import { useState } from "react";
import { gridY0, initialGameState } from "../constants/grid";
import {
  canMoveDown,
  canMoveLeft,
  canMoveRight,
  clearRow,
  fillPiecePosition,
  anyRowCompleted,
  rafflePiece,
} from "./utils";

export function useGame() {
  const [gameState, setGameState] = useState(initialGameState);
  const [blockedPiecesCounter, setBlockedCounter] = useState(0);

  function moveLeft() {
    setGameState(({ pieceX0, pieceY0, grid, type }) => ({
      pieceX0: canMoveLeft(pieceX0, pieceY0, grid, type)
        ? pieceX0 - 1
        : pieceX0,
      pieceY0,
      grid,
      type,
    }));
  }

  function moveRight() {
    setGameState(({ pieceX0, pieceY0, grid, type }) => ({
      pieceX0: canMoveRight(pieceX0, pieceY0, grid, type)
        ? pieceX0 + 1
        : pieceX0,
      pieceY0,
      grid,
      type,
    }));
  }

  function moveDown() {
    setGameState(({ pieceX0, pieceY0, grid, type }) => {
      if (!canMoveDown(pieceX0, pieceY0, grid, type))
        setBlockedCounter((prev) => prev + 1);
      return {
        pieceX0,
        pieceY0: canMoveDown(pieceX0, pieceY0, grid, type)
          ? pieceY0 + 1
          : pieceY0,
        grid,
        type,
      };
    });
  }

  function fetchNewPiece() {
    setGameState(({ pieceX0, pieceY0, grid, type }) => {
      let newGrid = fillPiecePosition(grid, pieceX0, pieceY0, type);
      const rowsCompleted = anyRowCompleted(newGrid)
      if (rowsCompleted.length > 0) {
        newGrid = clearRow(newGrid, rowsCompleted);
      }
      return {
        pieceX0: initialGameState.pieceX0,
        pieceY0: initialGameState.pieceY0,
        grid: newGrid,
        type: rafflePiece(),
      };
    });
  }

  return {
    pieceX0: gameState.pieceX0,
    pieceY0: gameState.pieceY0,
    grid: gameState.grid,
    type: gameState.type,
    moveLeft,
    moveRight,
    moveDown,
    fetchNewPiece,
    blockedPiecesCounter,
  };
}
