import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaEnvelope,
  FaBell,
  FaUser,
} from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Container, Row, Col } from "react-bootstrap";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light sticky-top px-2 py-1">
      <Container fluid>
        <Row className="w-100 align-items-center justify-content-center">
          <Col xs={2} className="d-none d-lg-block"></Col>

          <Col
            xs={12}
            lg={7}
            className="d-flex align-items-center justify-content-between"
          >
            <Link className="navbar-brand" to="/">
              <img
                src={logo}
                alt="LinkedIn Logo"
                style={{ height: "45px", width: "45px" }}
              />
            </Link>

            <div className="d-flex align-items-center gap-3">
              <Link
                className="nav-link text-dark d-flex align-items-center"
                to="/"
              >
                <FaHome size={20} />
                <span className="d-none d-lg-inline ms-1">Home</span>
              </Link>
              <a
                className="nav-link text-dark d-flex align-items-center"
                href="#"
              >
                <FaUserFriends size={20} />
                <span className="d-none d-lg-inline ms-1">Rete</span>
              </a>
              <Link
                className="nav-link text-dark d-flex align-items-center"
                to="/jobs"
              >
                <FaBriefcase size={20} />
                <span className="d-none d-lg-inline ms-1">Lavoro</span>
              </Link>
              <a
                className="nav-link text-dark d-flex align-items-center"
                href="#"
              >
                <FaEnvelope size={20} />
                <span className="d-none d-lg-inline ms-1">Messaggi</span>
              </a>
              <a
                className="nav-link text-dark d-flex align-items-center"
                href="#"
              >
                <FaBell size={20} />
                <span className="d-none d-lg-inline ms-1">Notifiche</span>
              </a>

              <div className="nav-item dropdown d-flex align-items-center">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaUser size={20} />
                  <span className="d-none d-lg-inline ms-1">Me</span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profilo
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Impostazioni
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>

              <div className="nav-item dropdown d-flex align-items-center">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdownCompanies"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsGrid3X3Gap size={20} />
                  <span className="d-none d-lg-inline ms-1">
                    Per le Aziende
                  </span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownCompanies"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Posta Lavoro
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Controlla lavori
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pagina Compagnia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col xs={2} className="d-none d-lg-block"></Col>
        </Row>
      </Container>
    </nav>
  );
};

export default NavBar;
