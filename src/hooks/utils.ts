import { X0, Y0 } from "../constants/grid";
import { PiecesType, pieceNames, piecesMap } from "../constants/pieces";

export function canMoveDown(
  x: number,
  y: number,
  grid: number[][],
  type: PiecesType
) {
  const piece = piecesMap[type];
  const lastRow = piece.length - 1;
  for (let i = 0; i < piece[lastRow].length; i++) {
    if (
      grid[y - Y0 + lastRow] === undefined ||
      grid[y - Y0 + lastRow][x - X0 + i] === undefined
    )
      return false;
    if (grid[y - Y0 + lastRow][x - X0 + i] === 1) return false;
  }
  return true;
}

export function canMoveLeft(
  x: number,
  y: number,
  grid: number[][],
  type: PiecesType
) {
  return true;
}

export function canMoveRight(
  x: number,
  y: number,
  grid: number[][],
  type: PiecesType
) {
  return true;
}

export function fillPiecePosition(
  grid: number[][],
  x: number,
  y: number,
  type: PiecesType
) {
  const piece = piecesMap[type];
  const newGrid = grid.map((row) => [...row]);
  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
      newGrid[y - Y0 + j][x - X0 + i] =
        piece[j][i] === 1 ? piece[j][i] : newGrid[y - Y0 + j][x - X0 + i];
    }
  }
  return newGrid;
}

export function isRowCompleted(row: number[]) {
  return row.filter((square) => square === 0).length === 0;
}

export function clearRow(grid: number[][], row: number) {
  const newGrid = [];
  newGrid.push(new Array(10).fill(0));
  for (let i = 0; i < grid.length; i++) {
    if (i === row) continue;
    newGrid.push(grid[i]);
  }
  return newGrid;
}

export function rafflePiece(): PiecesType {
  const index = Math.floor(Math.random() * pieceNames.length);

  return pieceNames[index];
}
