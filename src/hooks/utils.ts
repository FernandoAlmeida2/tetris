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
    if (grid[y - Y0 + lastRow][x - X0 + i] === 1 && piece[lastRow][i] === 1)
      return false;
  }
  return true;
}

export function canMoveLeft(
  x: number,
  y: number,
  grid: number[][],
  type: PiecesType
) {
  const piece = piecesMap[type];
  const firstColumn = 0;
  for (let i = 0; i < piece.length; i++) {
    if (
      grid[y - Y0 + i] === undefined ||
      grid[y - Y0 + i][x - X0] === undefined
    )
      return false;
    if (grid[y - Y0 + i][x - X0] === 1 && piece[i][firstColumn] === 1)
      return false;
  }
  return true;
}

export function canMoveRight(
  x: number,
  y: number,
  grid: number[][],
  type: PiecesType
) {
  const piece = piecesMap[type];
  const lastColumn = piece[0].length - 1;
  for (let i = 0; i < piece.length; i++) {
    if (
      grid[y - Y0 + i] === undefined ||
      grid[y - Y0 + i][x - X0] === undefined
    )
      return false;
    if (grid[y - Y0 + i][x - X0] === 1 && piece[i][lastColumn] === 1)
      return false;
  }
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
      newGrid[y - Y0 + i][x - X0 + j] =
        piece[i][j] === 1 ? piece[i][j] : newGrid[y - Y0 + i][x - X0 + j];
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
