import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Commands from "../../components/InfoCommands/Commands";
import { changeName, changeSpeed } from "../../redux/gameSlice";
import { Container, FormStyle, InfoButton, InputStyle, StartButton } from "./Menu.styles";

export default function Menu() {
  const navigate = useNavigate();
  const [speed, setSpeed] = useState("0");
  const [name, setName] = useState("");
  const [displayInfo, setDisplayInfo] = useState(false);
  const dispatch = useDispatch();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(changeName(name));
    dispatch(changeSpeed(Number(speed)));
    navigate("/game");
  }

  return (
    <Container>
      <h1>T E T R I S</h1>
      <div>
        <FormStyle onSubmit={handleSubmit}>
          <label>
            <p>Select the speed</p>
            <InputStyle
              placeholder="Choose a number"
              type="number"
              min={0}
              max={10}
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
              required
            />
          </label>
          <label>
            <p>Enter a name</p>
            <InputStyle
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <StartButton type="submit">New Game</StartButton>
        </FormStyle>
        <InfoButton onClick={() => setDisplayInfo(!displayInfo)}>
          Commands
        </InfoButton>
        {displayInfo && <Commands setDisplayInfo={setDisplayInfo} />}
      </div>
    </Container>
  );
}
