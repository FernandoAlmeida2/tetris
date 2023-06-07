import { useNavigate } from "react-router-dom";
import { getRanking } from "../Game/Game.utils";
import { Container, RankingDiv, ReturnStyle, RowItem } from "./Ranking.styles";

export default function Ranking() {
  const rankingData = getRanking();
  const navigate = useNavigate();
  return (
    <Container>
      <h1>RESULTS</h1>
      <RankingDiv>
        <RowItem>
          <p>PLACE </p>
          <p>NAME</p>
          <p>SCORE</p>
          <p>SPEED</p>
        </RowItem>
        {rankingData?.map(({ name, score, speed }, index) => (
          <RowItem key={index}>
            <p>{index + 1}</p>
            <p>{name}</p>
            <p>{score}</p>
            <p>{speed}</p>
          </RowItem>
        ))}
      </RankingDiv>
      <ReturnStyle onClick={() => navigate("/")}>Return to Menu</ReturnStyle>
    </Container>
  );
}
