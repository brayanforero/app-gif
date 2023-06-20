import { Container } from "@components/layouts";
import Form from "../Form";
import Logo from "../Logo";
import { useLocation } from "wouter";
import "./index.css";

function SearchBar() {
  const [, to] = useLocation();

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    to("/");
  };

  return (
    <header className="SearchBar">
      <Container>
        <a onClick={handleNavigate}>
          <Logo />
        </a>
        <Form />
      </Container>
    </header>
  );
}

export default SearchBar;
