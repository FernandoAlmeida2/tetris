import { X0, Y0 } from "../constants/grid";

export function canMove(x: number, y: number, grid: number[][]) {
  if (grid[y - Y0] !== undefined && grid[y - Y0][x - X0] !== undefined) {
    return grid[y - Y0][x - X0] === 0;
  }

  return false;
}

export function fillPiecePosition(grid: number[][], x: number, y: number) {
  const newGrid = grid.map((row) => [...row]);
  newGrid[y - Y0][x - X0] = 1;
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
