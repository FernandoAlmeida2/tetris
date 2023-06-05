import { rafflePiece } from "../hooks/utils";
import { PiecesType } from "./pieces";

export const MAX_HORIZONTAL = 10;
export const MAX_VERTICAL = 20;

const initialScreen: number[][] = new Array(MAX_VERTICAL).fill(new Array(MAX_HORIZONTAL).fill(0));

export const initialGameState = {
  pieceX0: 4,
  pieceY0: 0,
  grid: initialScreen,
  type: rafflePiece(),
  nextPiece: rafflePiece(),
  rotation: 0,
  score: 0
};

export type GameStateType = {
  pieceX0: number;
  pieceY0: number;
  grid: number[][];
  type: PiecesType;
  nextPiece: string;
  rotation: number;
  score: number;
};

export const finalScreen: number[][] = new Array(MAX_VERTICAL).fill(new Array(MAX_HORIZONTAL).fill(1));