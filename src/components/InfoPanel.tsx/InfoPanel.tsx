import { piecesMap, PiecesType } from "../../constants/pieces";
import { Container, PieceStyle, RowStyle } from "./styles";

type Props = {
  nextPiece: PiecesType;
  score: number;
  speed: number;
};

export default function InfoPanel({ nextPiece, score, speed }: Props) {
  return (
    <Container>
      <div>
        <p>
          {getScore(score)}
          <br />
          SCORE
        </p>
        <div>
          {piecesMap[nextPiece][0].map((line, j) => (
            <RowStyle key={j}>
              {line.map((square: number, i: number) => (
                <PieceStyle isColored={square} key={i} />
              ))}
            </RowStyle>
          ))}
        </div>
      </div>
      <div>
        <p>
          {speed}
          <br />
          SPEED
        </p>
      </div>
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
