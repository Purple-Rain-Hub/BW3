import { useSelector } from "react-redux";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import ExperienceSection from "./ExperienceSection";

function CentralSection() {
  const myProfile = useSelector((state) => {
    return state.myProfile;
  });

  return (
    <Container fluid className="py-3" style={{ backgroundColor: "#F4F2EE" }}>
      <Container className="home-container">
        <Row className="justify-content-center">
          <Col lg={8} className="d-flex flex-column align-items-center">
            <Card className="mb-3">
              <Card.Body className="text-center position-relative">
                <Card.Img 
                  src="https://placecats.com/700/700" 
                  className="mb-4"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Image 
                  src="https://placecats.com/100/100" 
                  roundedCircle 
                  className="position-absolute"
                  style={{ 
                    width: "80px",
                    height: "80px",
                    bottom: "-40px",
                    left: "24px",
                    border: "2px solid white"
                  }}
                />
              </Card.Body>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-1">
                    <Card.Title className="m-0">
                      {myProfile.name} {myProfile.surname}
                    </Card.Title>
                    <div className="d-flex gap-1" style={{ border: "1px dashed #0B66C2", borderRadius: "10px" }}>
                      <Icon.ShieldCheck className="align-self-center" color="#0B66C2" style={{ fontSize: "10px" }} />
                      <p className="m-0 align-self-center" style={{ color: "#0B66C2", fontSize: "10px" }}>
                        Aggiungi badge di verifica
                      </p>
                    </div>
                  </div>
                  <Icon.Pencil className="align-self-center" />
                </div>
                <Card.Text className="m-0">{myProfile.title}</Card.Text>
                <div className="d-flex gap-1">
                  <p className="m-0 text-secondary" style={{ fontSize: "10px" }}>
                    {myProfile.area}
                  </p>
                  <p className="m-0" style={{ fontSize: "10px" }}>
                    &middot;
                  </p>
                  <a href="#" className="text-decoration-none" style={{ color: "#0B66C2", fontSize: "10px" }}>
                    Informazioni di contatto
                  </a>
                </div>
                <a href="#" className="text-decoration-none" style={{ color: "#0B66C2", fontSize: "10px" }}>
                  14 collegamenti
                </a>
                <div className="d-flex gap-1">
                  <p className="m-0" style={{ backgroundColor: "#0B66C2", color: "white", width: "fit-content", borderRadius: "10px", padding: "2px", cursor: "pointer", fontSize: "10px" }}>
                    Disponibile per
                  </p>
                  <p className="m-0" style={{ color: "#0B66C2", width: "fit-content", borderRadius: "10px", padding: "2px", cursor: "pointer", border: "1px solid #0B66C2", fontSize: "10px" }}>
                    Aggiungi sezione del profilo
                  </p>
                  <p className="m-0" style={{ color: "#0B66C2", width: "fit-content", borderRadius: "10px", padding: "2px", cursor: "pointer", border: "1px solid #0B66C2", fontSize: "10px" }}>
                    Migliora profilo
                  </p>
                  <p className="m-0" style={{ color: "gray", width: "fit-content", borderRadius: "10px", padding: "2px", cursor: "pointer", border: "1px solid gray", fontSize: "10px" }}>
                    Altro
                  </p>
                </div>
                <div className="mt-3 p-2" style={{ backgroundColor: "#DDE7F1", borderRadius: "10px" }}>
                  <div className="d-flex justify-content-between">
                    <p className="m-0" style={{ fontWeight: "bold" }}>
                      Disponibile a lavorare
                    </p>
                    <Icon.Pencil className="align-self-center" />
                  </div>
                  <p className="m-0">Altra descrizione...</p>
                  <a href="#" className="text-decoration-none" style={{ color: "#0B66C2" }}>
                    Mostra dettagli
                  </a>
                </div>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <ExperienceSection />
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <p className="m-0" style={{ fontWeight: "bold" }}>
                    Consigliato per te
                  </p>
                  <Icon.X className="text-black" />
                </div>
                <p className="m-0 text-secondary" style={{ fontSize: "10px" }}>
                  <Icon.EyeFill /> Solo per te
                </p>
                <div className="d-flex gap-1">
                  <Icon.PeopleFill style={{ marginTop: "4px" }} />
                  <div className="d-flex flex-column">
                    <p className="m-0">La mia rete</p>
                    <p className="text-secondary" style={{ fontSize: "10px" }}>
                      Salva e gestisci i tuoi collegamenti e interessi.
                    </p>
                  </div>
                </div>

                <hr />

                <div className="d-flex gap-1">
                  <Icon.BookmarkFill style={{ marginTop: "6px" }} />
                  <div className="d-flex flex-column">
                    <p className="m-0">Elementi salvati</p>
                    <p className="text-secondary" style={{ fontSize: "10px" }}>
                      Scopri chi sta interagendo con i tuoi post.
                    </p>
                  </div>
                </div>
                <hr className="m-0" />
                <p className="m-0 text-center">
                  Mostra tutte le risorse (4)
                  <Icon.ArrowRight className="ms-1" />
                </p>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <p className="m-0 fw-bold align-self-center">Attività</p>
                  <div className="d-flex gap-2">
                    <p className="m-0" style={{ color: "#0B66C2", fontWeight: "bold", border: "1px solid #0B66C2", borderRadius: "10px", padding: "4px", cursor: "pointer" }}>
                      Crea un post
                    </p>
                    <Icon.Pencil className="align-self-center" />
                  </div>
                </div>
                <a href="#" className="m-0 text-decoration-none" style={{ color: "#0B66C2", fontSize: "14px" }}>
                  0 follower
                </a>
                <p className="m-0 fw-bold" style={{ fontSize: "12px" }}>
                  Non hai ancora pubblicato nulla
                </p>
                <p className="m-0" style={{ fontSize: "12px" }}>
                  I post che condividi appariranno qui.
                </p>
                <hr className="m-0" />
                <p className="m-0 text-center">
                  Mostra tutte le attività
                  <Icon.ArrowRight className="ms-1" />
                </p>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <p className="m-0 fw-bold align-self-center">Formazione</p>
                  <div className="d-flex gap-3">
                    <Icon.Plus className="align-self-center" style={{ fontSize: "22px" }} />
                    <Icon.Pencil className="align-self-center" />
                  </div>
                </div>
                <div className="d-flex mt-3 gap-2">
                  <img src="https://placecats.com/50/50" style={{ width: "50px", height: "50px" }} />
                  <div className="d-flex flex-column">
                    <p className="fw-bold m-0" style={{ fontSize: "14px" }}>
                      Tor Vergata
                    </p>
                    <p className="m-0">Laurea in...</p>
                    <p className="text-secondary m-0" style={{ fontSize: "12px" }}>
                      Da... A...
                    </p>
                    <p className="m-0">Vot: 115</p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <p className="m-0 fw-bold align-self-center">Comp</p>
                  <div className="d-flex gap-3">
                    <Icon.Plus className="align-self-center" style={{ fontSize: "22px" }} />
                    <Icon.Pencil className="align-self-center" />
                  </div>
                </div>
                <p className="m-0 fw-bold">Es n.1</p>
                <div className="d-flex">
                  <img className="align-self-center" src="https://placecats.com/20/20" style={{ width: "20px", height: "20px" }} />
                  <p className="m-0">Descrizione es n.1...</p>
                </div>
                <hr />
                <p className="m-0 fw-bold">Es n.2</p>
                <div className="d-flex">
                  <img className="align-self-center" src="https://placecats.com/20/20" style={{ width: "20px", height: "20px" }} />
                  <p className="m-0">Descrizione es n.2...</p>
                </div>
                <hr className="mb-0" />
                <p className="m-0 text-center">
                  Mostra tutte le comp (5)
                  <Icon.ArrowRight className="ms-1" />
                </p>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <p className="m-0 fw-bold align-self-center mb-2">Interessi</p>
                <div className="d-flex gap-5">
                  <p style={{ color: "#004C33", fontWeight: "bold" }}>Aziende</p>
                  <p>Scuole o università</p>
                </div>
                <hr className="mt-1" />

                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-1">
                    <img src="https://placecats.com/50/50" style={{ width: "50px", height: "50px" }} />
                    <div>
                      <p className="fw-bold m-0">test2</p>
                      <p>33mln di follower</p>
                      <p style={{ border: "2px solid gray", borderRadius: "10px" }}>
                        <Icon.Check style={{ fontSize: "24px" }} />
                        Già segui
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-1">
                    <img src="https://placecats.com/50/50" style={{ width: "50px", height: "50px" }} />
                    <div>
                      <p className="fw-bold m-0">test</p>
                      <p>888mln di follower</p>
                      <p style={{ border: "2px solid gray", borderRadius: "10px" }}>
                        <Icon.Check style={{ fontSize: "24px" }} />
                        Già segui
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="mt-1 mb-0" />
                <p className="m-0 text-center">
                  Mostra tutte le aziende
                  <Icon.ArrowRight className="ms-1" />
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className="d-flex flex-column align-items-center">
            
            <img
              src="https://placecats.com/310/200"
              style={{ width: "100%" }}
              alt="placeholder"
              className=" rounded-3 border-1 border"
            />
            <div className="p-4 pb-1 bg-body-secondary w-100 rounded-3 border border-1">
              <h4 className="fs-6 m-0">Altri profili per te</h4>
              <div className=" d-flex border-bottom border-1 py-3">
                <img
                  src="https://placecats.com/50/50"
                  alt="placeholder propic"
                  height={"100%"}
                  className=" rounded-circle"
                />
                <div className="ms-2">
                  <h6 className="m-0">
                    Dario del Giudice <span className="fw-lighter">· 3°+</span>
                  </h6>
                  <p className="mb-2">Docente front-end presso Epicode</p>
                  <button
                    type="button"
                    className="btn rounded-pill border border-1 border-info text-info px-3 py-1 fw-medium"
                  >
                    Messaggio
                  </button>
                </div>
              </div>
              <h6 className=" text-center mt-3">Mostra tutto</h6>
            </div>
            <div className="p-4 pb-1 bg-body-secondary w-100 rounded-3 border border-1 mt-2">
              <h4 className="fs-6 m-0">Persone che potresti conoscere</h4>
              <p className="fw-lighter m-0">Dalla scuola o università di Epicode</p>
              <h6 className=" text-center mt-3">Mostra tutto</h6>
            </div>
            <div className="p-4 pb-1 bg-body-secondary w-100 rounded-3 border border-1 mt-2">
              <h4 className="fs-6 m-0">Potrebbe interessarti</h4>
              <p className="m-0">Pagine per te</p>
              <h6 className=" text-center mt-3">Mostra tutto</h6>
            </div>
            <img
              src="https://placecats.com/310/200"
              style={{ width: "100%" }}
              alt="placeholder"
              className=" rounded-3 border-1 border mt-2 sticky-top"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default CentralSection;
