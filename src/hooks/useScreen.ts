import { useState } from "react";
import { initialScreen, X0, Y0 } from "../constants/grid";

export function useScreen() {
    const [screenState, setScreenState] = useState(initialScreen);

    function updateGrid(x: number, y: number) {
        setScreenState((prevGrid) => {
          const newGrid = prevGrid.map((row) => [...row]);
          newGrid[y - Y0][x - X0] = 1;
          return newGrid;
        });
      }

    return {
        screenState,
        updateGrid
    }
}
