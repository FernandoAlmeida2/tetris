import { useState } from "react";
import { initialScreen } from "../constants/pieces";

export function useScreen() {
  const [screenState, setScreenState] = useState(initialScreen);
  const x0 = 20;
  const y0 = 4;

  return {
    screenState,
    x0,
    y0
  };
}
