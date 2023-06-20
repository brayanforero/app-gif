import { Container } from "@components/layouts";
import Form from "../Form";
import Logo from "../Logo";
import { useLocation } from "wouter";
import useTransparency from "./hooks/useTransparency";
import "./index.css";
import useScreen from "@hooks/useScreen";

function SearchBar() {
  const [, to] = useLocation();
  const { headerRef } = useTransparency();
  const { width } = useScreen();
  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    to("/");
  };

  return (
    <header ref={headerRef} className="SearchBar">
      <Container>
        {width >= 768 && (
          <a onClick={handleNavigate}>
            <Logo />
          </a>
        )}
        <Form />
      </Container>
    </header>
  );
}

export default SearchBar;
