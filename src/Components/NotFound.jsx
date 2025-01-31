import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-root">
      <div className="not-found-container">
        <div className="cloakNotFound"></div>
        <Container className="infoNotFound text-center">
          <h1 className="h1NotFound">404</h1>
          <h2 className="h2NotFound">Pagina non trovata</h2>
          <p>Ci dispiace, la pagina che stai cercando non esiste.</p>
          <Link to="/">
            <Button className="aNotFound border-0">Torna alla Home</Button>
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default NotFound;
