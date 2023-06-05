import { useState } from "react";
import { finalScreen, initialGameState } from "../constants/grid";
import {
  canMoveDown,
  canMoveLeft,
  canMoveRight,
  clearRow,
  fillPiecePosition,
  anyRowCompleted,
  rafflePiece,
  rotateIfCan,
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
  function rotate() {
    setGameState((prev) => ({
      ...prev,
      rotation: rotateIfCan(prev),
    }));
  }

  function fetchNewPiece() {
    setGameState((prev) => {
      let newGrid = fillPiecePosition(prev);
      let scoreIncrement = 0; 
      const rowsCompleted = anyRowCompleted(newGrid);
      if (rowsCompleted.length > 0) {
        newGrid = clearRow(newGrid, rowsCompleted);
        scoreIncrement = rowsCompleted.length > 1 ? (2*rowsCompleted.length - 1) : 1;
      }
      return {
        pieceX0: initialGameState.pieceX0,
        pieceY0: initialGameState.pieceY0,
        grid: newGrid,
        type: prev.nextPiece,
        nextPiece: rafflePiece(),
        rotation: initialGameState.rotation,
        score: prev.score+ scoreIncrement
      };
    });
  }

  function gameOver(){
    setGameState((prev) => ({
      ...prev,
      grid: finalScreen,
    }));
  }

  function reset(){
    setGameState(initialGameState);
  }

  return {
    ...gameState,
    moveLeft,
    moveRight,
    moveDown,
    rotate,
    fetchNewPiece,
    gameOver,
    reset,
    blockedPiecesCounter,
  };
}
