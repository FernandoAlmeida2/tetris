import { useState } from "react";
import { gridY0, initialGameState } from "../constants/grid";
import { piecesMap } from "../constants/pieces";
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
    setGameState((prev) => ({
      ...prev,
      pieceX0: canMoveLeft(prev) ? prev.pieceX0 - 1 : prev.pieceX0,
    }));
  }

  function moveRight() {
    setGameState((prev) => ({
      ...prev,
      pieceX0: canMoveRight(prev) ? prev.pieceX0 + 1 : prev.pieceX0,
    }));
  }

  function moveDown() {
    setGameState((prev) => {
      if (!canMoveDown(prev)) setBlockedCounter((prev) => prev + 1);
      return {
        ...prev,
        pieceY0: canMoveDown(prev) ? prev.pieceY0 + 1 : prev.pieceY0,
      };
    });
  }
  function rotClockwise() {
    setGameState((prev) => ({
      ...prev,
      pieceX0: canMoveRight(prev) ? prev.pieceX0 + 1 : prev.pieceX0,
    }));
  }

  function fetchNewPiece() {
    setGameState(({ pieceX0, pieceY0, grid, type, rotation }) => {
      let newGrid = fillPiecePosition(
        grid,
        pieceX0,
        pieceY0,
        piecesMap[type][rotation]
      );
      const rowsCompleted = anyRowCompleted(newGrid);
      if (rowsCompleted.length > 0) {
        newGrid = clearRow(newGrid, rowsCompleted);
      }
      return {
        pieceX0: initialGameState.pieceX0,
        pieceY0: initialGameState.pieceY0,
        grid: newGrid,
        type: rafflePiece(),
        rotation,
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
