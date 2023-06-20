import { AppRouter } from "@components/router";
import { Container } from "@components/layouts";

import "./App.css";
import { ScrollReset } from "@components/shared";

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
