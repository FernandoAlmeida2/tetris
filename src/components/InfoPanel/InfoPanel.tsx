import { piecesMap, PiecesType } from "../../constants/pieces";
import { Container, PiecesDiv, PieceStyle, RowStyle, TextStyle } from "./styles";

type Props = {
  nextPiece: PiecesType;
  score: number;
  speed: number;
};

export default function InfoPanel({ nextPiece, score, speed }: Props) {
  return (
    <Container>
      <TextStyle>
        <h1>{getScore(score)}</h1>
        <p> SCORE</p>
      </TextStyle>
      <PiecesDiv>
        {piecesMap[nextPiece][0].map((line, j) => (
          <RowStyle key={j}>
            {line.map((square: number, i: number) => (
              <PieceStyle isColored={square} key={i} />
            ))}
          </RowStyle>
        ))}
      </PiecesDiv>
      <TextStyle>
        <h1>{speed}</h1>
        <p> SPEED</p>
      </TextStyle>
    </Container>
  );
}

function getScore(score: number) {
  if (score < 10) return `000${score}`;
  if (score < 100) return `00${score}`;
  if (score < 1000) return `00${score}`;
  if (score < 10000) return `${score}`;
  return "9999";
}
