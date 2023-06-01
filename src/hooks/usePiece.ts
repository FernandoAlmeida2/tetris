import { useState } from "react";
import { X0, Y0 } from "../constants/grid";

export function usePiece() {
  const [pos, setPos] = useState({ x: 24, y: 4 });
  const [isBlocked, setIsBlocked] = useState(false);

  function moveLeft(grid: number[][]) {
    setPos((prev) => ({
      x: canMove(prev.x - 1, prev.y, grid) ? prev.x - 1 : prev.x,
      y: prev.y,
    }));
  }

  function moveRight(grid: number[][]) {
    setPos((prev) => ({
      x: canMove(prev.x + 1, prev.y, grid) ? prev.x + 1 : prev.x,
      y: prev.y,
    }));
  }

  function moveDown(grid: number[][]) {
    setPos((prev) => {
      if (!canMove(prev.x, prev.y + 1, grid)) setIsBlocked(true);
      return {
        x: prev.x,
        y: canMove(prev.x, prev.y + 1, grid) ? prev.y + 1 : prev.y,
      };
    });
  }

  function canMove(x: number, y: number, grid: number[][]) {
    if (
      grid[y - Y0] !== undefined &&
      grid[y - Y0][x - X0] !== undefined
    ) {
      return grid[y - Y0][x - X0] === 0;
    }

    return false;
  }


  function fetchNewPiece() {
    setIsBlocked(false);
    setPos({ x: 24, y: 4 });
  }

  return {
    x: pos.x,
    y: pos.y,
    moveLeft,
    moveRight,
    moveDown,
    isBlocked,
    fetchNewPiece,
  };
}
