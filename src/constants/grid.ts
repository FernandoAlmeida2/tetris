export const X0 = 20;
export const Y0 = 4;

const initialScreen: number [][] = new Array(17).fill([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

export const initialGameState = {
  piecePosX: 24,
  piecePosY: 4,
  grid: initialScreen,
};
