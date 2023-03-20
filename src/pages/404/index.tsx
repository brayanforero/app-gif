import { Link } from "wouter";
import "./index.css";
function NotFound() {
  return (
    <section className="Notfound section">
      <h1 className="Notfound__title">Oops, are you lost?</h1>
      <Link to="/">Go to home</Link>
    </section>
  );
}

export default NotFound;
