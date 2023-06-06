import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GameState = {
  name: string;
  speed: number;
};

const initialState: GameState = {
  name: "",
  speed: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      return { ...state, name: action.payload };
    },
    changeSpeed(state, action: PayloadAction<number>) {
      return { ...state, speed: action.payload };
    },
  },
});

export const { changeName, changeSpeed } = gameSlice.actions;
