import {
  BigButtonDiv,
  ButtonsDiv,
  Container,
  DirectionalStyle,
  LeftRightDiv,
  SmallButtonDiv,
} from "./styles";

type Props = {
  moveLeft: Function;
  moveRight: Function;
  moveDown: Function;
  rotate: Function;
};

export default function Controllers({
  moveLeft,
  moveRight,
  moveDown,
  rotate,
}: Props) {
  return (
    <Container>
      <ButtonsDiv>
        <DirectionalStyle>
          <LeftRightDiv>
            <SmallButtonDiv>
              <button onClick={() => moveLeft()}></button>
              <p>LEFT</p>
            </SmallButtonDiv>
            <SmallButtonDiv>
              <button onClick={() => moveRight()}></button>
              <p>RIGHT</p>
            </SmallButtonDiv>
          </LeftRightDiv>
          <SmallButtonDiv>
            <button onClick={() => moveDown()}></button>
            <p>DOWN</p>
          </SmallButtonDiv>
        </DirectionalStyle>
        <BigButtonDiv>
          <button onClick={() => rotate()}></button>
          <p>ROTATE</p>
        </BigButtonDiv>
      </ButtonsDiv>
    </Container>
  );
}
