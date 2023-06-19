import { Container } from "@components/layouts";
import Form from "../Form";
import Logo from "../Logo";
import "./index.css";
function SearchBar() {
  return (
    <header className="SearchBar">
      <Container>
        <Logo />
        <Form />
      </Container>
    </header>
  );
}

export default SearchBar;
