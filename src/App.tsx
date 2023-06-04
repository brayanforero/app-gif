import AppRouter from "@components/router/AppRouter";
import { Container } from "./layouts";

function App() {
  return (
    <Container>
      <main>
        <AppRouter />
      </main>
    </Container>
  );
}

export default App;
