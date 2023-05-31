import { useNavigate } from "react-router-dom";
import { ButtonStyle, Container } from "./Menu.styles";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <Container>
      <ButtonStyle onClick={() => navigate("/game")}>New Game</ButtonStyle>
    </Container>
  );
}
