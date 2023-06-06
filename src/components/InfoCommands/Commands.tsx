import { Container, IconStyle, InfoDiv } from "./styles";
import {IoIosCloseCircleOutline} from "react-icons/io";
import { Dispatch, SetStateAction } from "react";

type Props = {
    setDisplayInfo: Dispatch<SetStateAction<boolean>>;
}

export default function Commands({setDisplayInfo} : Props) {
  return (
    <Container>
      <InfoDiv>
        <IconStyle><IoIosCloseCircleOutline size={"24px"} onClick={() => setDisplayInfo(false)} /></IconStyle>
        <h1>Controls</h1>
        <p>Up arrow / R: Rotate clockwise</p>
        <p>Left arrow / A: Move left</p>
        <p>Right arrow / D: Move right</p>
        <p>Down arrow / S: Move down (faster)</p>
      </InfoDiv>
    </Container>
  );
}
