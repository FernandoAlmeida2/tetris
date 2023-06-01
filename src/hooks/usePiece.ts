import { useEffect, useState } from "react";
import { initialScreen, X0, Y0 } from "../constants/grid";
import { MAX_VERTICAL } from "../constants/pieces";

export function usePiece() {
  const [pos, setPos] = useState({ x: 24, y: 4 });
  const [screenState, setScreenState] = useState(initialScreen);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      moveDown();
      if(isBlocked()) clearInterval(interval)
    }, 1000)
    return () => clearInterval(interval);
  }, []);

  function moveLeft() {
    setPos((prev) => ({
      x: canMove(prev.x - 1, prev.y) ? prev.x - 1 : prev.x,
      y: prev.y,
    }));
  }

  function moveRight() {
    setPos((prev) => ({
      x: canMove(prev.x + 1, prev.y) ? prev.x + 1 : prev.x,
      y: prev.y,
    }));
  }

  function moveDown() {
    setPos((prev) => ({
      x: prev.x,
      y: canMove(prev.x, prev.y + 1) ? prev.y + 1 : prev.y,
    }));
  
  }

  function canMove(x: number, y: number) {
    if (screenState[y-Y0] !== undefined && screenState[y-Y0][x-X0] !== undefined) {
      return screenState[y-Y0][x-X0] === 0;
    }
    return false;
  }

  function isBlocked() {
      return (pos.y - Y0 > MAX_VERTICAL)
  }


  return {
    x: pos.x,
    y: pos.y,
    moveLeft,
    moveRight,
    moveDown,
    screenState,
    isBlocked
  };
}
