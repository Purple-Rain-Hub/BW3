import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BookmarkFill, ListUl } from "react-bootstrap-icons";
import BorsaLavoro from "../assets/BorsaLavoro.svg";
import NewOfferJob from "../assets/NewOfferJob.svg";
import CloseIcon from "../assets/CloseIcon.svg";

const JobsPage = () => {
  return (
    <Container fluid className="py-3" style={{ backgroundColor: "#F4F2EE" }}>
      <Container className="jobs-container">
        <Row>
          {/* Left Sidebar */}
          <Col md={3}>
            <Card>
              <Card.Body className="position-relative">
                <Button
                  className="border-0 text-dark d-flex align-items-center py-3 w-100"
                  style={{
                    backgroundColor: "transparent",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#f0f0f0")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                >
                  <ListUl className="me-2" size={32} />
                  <strong style={{ fontWeight: "600" }}>Preferenze</strong>
                </Button>
                <Button
                  className="border-0 text-dark d-flex align-items-center my-3 py-3 w-100"
                  style={{
                    backgroundColor: "transparent",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#f0f0f0")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                >
                  <BookmarkFill className="me-2" size={32} />
                  <strong style={{ fontWeight: "600" }}>
                    Le mie offerte di lavoro
                  </strong>
                </Button>
              </Card.Body>
            </Card>
            <div className="py-3">
              <Button
                variant="outline-primary"
                className="w-100 rounded-pill fs-6"
                style={{
                  backgroundColor: "transparent",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#E1E8EE";
                  e.target.style.color = "#0D6EFD";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#0D6EFD";
                }}
              >
                <img
                  src={NewOfferJob}
                  alt="Premium Icon"
                  width="24"
                  height="24"
                  className="me-2"
                />
                Pubblica offerta gratuita
              </Button>
            </div>
          </Col>

          {/* Main Content */}
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body className="position-relative">
                <img
                  src={CloseIcon}
                  alt="Close"
                  className="position-absolute top-0 end-0 m-2"
                  style={{ cursor: "pointer", width: "24px", height: "24px" }}
                />
                <img
                  className="mx-auto d-block float-end"
                  src="src\assets\img\1svkhjtd476ns0r6daqolu2xk.png"
                  alt=""
                  style={{ width: "25%", height: "25%" }}
                />
                <h4 className="text-start">
                  Ricevi notifiche sulle offerte di lavoro che ti interessano
                </h4>
                <p className="text-secondary text-start">
                  Crea un avviso per una qualifica, un azienda o delle parole
                  chiave.
                </p>
                <div>
                  <Button
                    variant="primary"
                    className="me-2 jobButton"
                    style={{ borderRadius: "25px" }}
                  >
                    Crea avviso
                  </Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body className="position-relative">
                <img
                  src={CloseIcon}
                  alt="Close"
                  className="position-absolute top-0 end-0 m-2"
                  style={{ cursor: "pointer", width: "24px", height: "24px" }}
                />
                <h4 className="text-start">
                  Mostra ai recruiter che sei disponibile a lavorare
                </h4>
                <p className="text-secondary text-start">
                  Aggiungi le tue preferenze per far sapere ai recruiter che ti
                  interessano opportunità di lavoro rilevanti.
                </p>
                <div className="d-flex align-items-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                    alt="Avatar"
                    className="me-3"
                    style={{ width: "13%", borderRadius: "50%" }}
                  />
                  <div>
                    <h6 className="mb-1">Disponibile a lavorare</h6>
                    <p className="mb-0">
                      Stabilisci tu chi può vedere questa informazione.
                    </p>
                  </div>
                </div>
                <Button
                  variant="primary"
                  className="me-2 jobButton"
                  style={{
                    borderRadius: "25px",
                    width: "14%",
                    marginTop: "1rem",
                  }}
                >
                  Inizia
                </Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body className="position-relative">
                <div className=" d-flex justify-content-center align-items-center">
                  <img
                    src={BorsaLavoro}
                    alt="Premium Icon"
                    width="48"
                    height="48"
                    className="me-2"
                  />
                </div>
                <h5 className="text-center">Cerca offerte di lavoro</h5>
                <p className="text-secondary text-center">
                  Avvia una ricerca e condivideremo le opportunità che
                  corrisponono ai tuoi criteri
                </p>
                <div className=" d-flex justify-content-center align-items-center">
                  <Button
                    variant="outline-primary"
                    style={{
                      width: "25%",
                      borderRadius: "25px",
                      fontWeight: "600",
                    }}
                  >
                    Cerca Subito
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default JobsPage;
