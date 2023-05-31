import { useState } from "react";

export function usePiece() {
  const [pos, setPos] = useState({ x: 18.235, y: -0.75 });

  function moveLeft() {
    setPos((prev) => ({
      x: prev.x - 1,
      y: prev.y,
    }));
  }

  function moveRight() {
    setPos((prev) => ({
      x: prev.x + 1,
      y: prev.y,
    }));
  }

  function moveDown() {
    setPos((prev) => ({
      x: prev.x,
      y: prev.y + 1,
    }));
  }

  return {
    x: pos.x,
    y: pos.y,
    moveLeft,
    moveRight,
    moveDown
  };
}
