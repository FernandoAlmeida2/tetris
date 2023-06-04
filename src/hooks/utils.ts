import { GameStateType, gridX0, gridY0 } from "../constants/grid";
import { PiecesType, pieceNames, piecesMap } from "../constants/pieces";

export function canMoveDown(gameState: GameStateType) {
  const { pieceX0: x, pieceY0: y, grid, type, rotation } = gameState;
  const piece = piecesMap[type][rotation];
  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
      if (piece[i][j] === 0) continue;
      if (
        grid[y + i + 1 - gridY0] === undefined ||
        grid[y - gridY0 + i + 1][x - gridX0 + j] === undefined
      )
        return false;
      if (grid[y + i + 1 - gridY0][x - gridX0 + j] === 1) return false;
    }
  }
  return true;
}

export function canMoveLeft(gameState: GameStateType) {
  const { pieceX0: x, pieceY0: y, grid, type, rotation } = gameState;
  const piece = piecesMap[type][rotation];
  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
      if (piece[i][j] === 0) continue;
      if (grid[y + i - gridY0][x + j - 1 - gridX0] === undefined) return false;
      if (grid[y + i - gridY0][x + j - 1 - gridX0] === 1) return false;
    }
  }
  return true;
}

export function canMoveRight(gameState: GameStateType) {
  const { pieceX0: x, pieceY0: y, grid, type, rotation } = gameState;
  const piece = piecesMap[type][rotation];
  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
      if (piece[i][j] === 0) continue;
      if (grid[y + i - gridY0][x + j + 1 - gridX0] === undefined) return false;
      if (grid[y + i - gridY0][x + j + 1 - gridX0] === 1) return false;
    }
  }
  return true;
}

export function fillPiecePosition(
  grid: number[][],
  x: number,
  y: number,
  piece: number[][]
) {
  const newGrid = grid.map((row) => [...row]);
  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
      if (piece[i][j] === 1) {
        newGrid[y - gridY0 + i][x - gridX0 + j] = 1;
      }
    }
  }
  return newGrid;
}

export function anyRowCompleted(grid: number[][]) {
  const completedRows: number[] = [];
  for (let i = 0; i < grid.length; i++) {
    if (grid[i].filter((square) => square === 0).length === 0) {
      completedRows.push(i);
    }
  }
  return completedRows;
}

export function clearRow(grid: number[][], rows: number[]) {
  const newGrid = new Array(rows.length).fill(
    new Array(grid[0].length).fill(0)
  );
  let j = 0;
  for (let i = 0; i < grid.length; i++) {
    if (i === rows[j]) {
      j++;
      continue;
    }
    newGrid.push(grid[i]);
  }
  return newGrid;
}

export function rafflePiece(): PiecesType {
  const index = Math.floor(Math.random() * pieceNames.length);

  return pieceNames[index];
}
