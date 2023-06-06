import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "./App.styles";
import ResetStyle from "./assets/styles/Reset";
import Menu from "./pages/Menu/Menu";
import Game from "./pages/Game/Game";

function App() {
  return (
    <>
      <ResetStyle />
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
