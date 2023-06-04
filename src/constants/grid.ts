import { rafflePiece } from "../hooks/utils";
import { PiecesType } from "./pieces";

export const MAX_HORIZONTAL = 10;
export const MAX_VERTICAL = 17;

export const gridX0 = 20;
export const gridY0 = 4;

const initialScreen: number[][] = new Array(17).fill([
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
]);

export const initialGameState = {
  pieceX0: 24,
  pieceY0: 6,
  grid: initialScreen,
  type: rafflePiece(),
  rotation: 0,
};

export type GameStateType = {
  pieceX0: number;
  pieceY0: number;
  grid: number[][];
  type: PiecesType;
  rotation: number;
};
