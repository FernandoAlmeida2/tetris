import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyle, Container, InputStyle } from "./Menu.styles";

export default function Menu() {
  const navigate = useNavigate();
  const [speed, setSpeed] = useState("0");

  return (
    <Container>
      <h1>T E T R I S</h1>
      <div>
        <label>
          <p>Select the speed</p>
          <InputStyle
            placeholder="Choose a number"
            type="number"
            min={0}
            max={10}
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </label>
        <ButtonStyle onClick={() => navigate(`/game/${speed}`)}>New Game</ButtonStyle>
      </div>
    </Container>
  );
}
