import { AppRouter } from "@components/router";
import { Container } from "./layouts";
import "./App.css";
function App() {
  return (
    <main>
      <Container>
        <AppRouter />
      </Container>
    </main>
  );
}

export default App;
