import "bootstrap/dist/css/bootstrap.min.css";
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
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="LinkedIn Logo" style={{ height: "40px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <div className="text-center">
                  <FaHome />
                  <div>Home</div>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="text-center">
                  <FaUserFriends />
                  <div>Rete</div>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs">
                <div className="text-center">
                  <FaBriefcase />
                  <div>Lavori</div>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="text-center">
                  <FaEnvelope />
                  <div>Messaggistica</div>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="text-center">
                  <FaBell />
                  <div>Notifiche</div>
                </div>
              </a>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/profile"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="text-center">
                  <FaUser />
                </div>
                Me
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Profilo
                  </a>
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
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownCompanies"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="text-center">
                  <BsGrid3X3Gap />
                </div>
                Per le Aziende
              </a>
              <ul
                className="dropdown-menu"
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
