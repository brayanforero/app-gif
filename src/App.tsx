import { AppRouter } from "@components/router";
import { Container } from "@components/layouts";

import "./App.css";
import ScrollReset from "@components/shared/ScrollReset";
function App() {
  return (
    <ScrollReset>
      <main>
        <Container>
          <AppRouter />
        </Container>
      </main>
    </ScrollReset>
  );
}

export default App;
