export const pieceTypes: PieceNames[] = [
  "iPiece",
  "jPiece",
  "lPiece",
  "oPiece",
  "sPiece",
  "tPiece",
  "zPiece",
];

export type PieceNames =
  | "iPiece"
  | "jPiece"
  | "lPiece"
  | "oPiece"
  | "sPiece"
  | "tPiece"
  | "zPiece";

export const piecesMap = {
  iPiece: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  jPiece: [
    [0, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
  ],
  lPiece: [
    [0, 0, 0],
    [0, 0, 1],
    [1, 1, 1],
  ],
  oPiece: [
    [1, 1],
    [1, 1],
  ],
  sPiece: [
    [0, 0, 0],
    [0, 1, 1],
    [1, 1, 0],
  ],
  tPiece: [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  zPiece: [
    [0, 0, 0],
    [1, 1, 0],
    [0, 1, 1],
  ],
};

export const initialScreen = new Array(17).fill([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
