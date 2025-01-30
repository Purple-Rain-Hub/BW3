import { Button, Card, Form, Modal } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import ExperienceSection from "./ExperienceSection";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExp,
  getExperience,
  getMyProfile,
  postExperience,
  postExpPic,
  postPropic,
  putExperience,
} from "../redux/action";
import { useEffect, useState } from "react";

function CentralSection() {
  const [show, setShow] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showExperiencePut, setShowExperiencePut] = useState(false);

  const [newExperience, setNewExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    area: "",
    description: "",
  });
  const [expForPutState, setExpForPutState] = useState({});
  const [expPic, setExpPic] = useState();
  const [hasPut, setHasPut] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowExperience = () => setShowExperience(true);
  const handleCloseExperience = () => setShowExperience(false);
  const handleCloseExperiencePut = () => setShowExperiencePut(false);
  const handleCloseExperienceDel = () => {
    dispatch({
      type: "SHOW_EXPERIENCE_DEL",
      payload: false,
    });
  };

  const dispatch = useDispatch();

  const myProfile = useSelector((state) => {
    return state.myProfile;
  });
  const newExpId = useSelector((state) => {
    return state.newExperienceId;
  });
  const expForPut = useSelector((state) => {
    return state.expForPut;
  });
  const showExperienceDel = useSelector((state) => {
    return state.showExperienceDel.show;
  });
  const delId = useSelector((state) => {
    return state.showExperienceDel.id;
  });

  const handlePropic = (e) => {
    const propicData = new FormData();
    propicData.append("profile", e.target.files[0]);
    dispatch(postPropic(propicData));
    dispatch(getMyProfile());
  };

  const handleExpPic = (e) => {
    e.preventDefault();
    const expPicData = new FormData();
    expPicData.append("experience", e.target.files[0]);
    setExpPic(expPicData);
  };

  const handleNewExperience = (e) => {
    e.preventDefault();
    dispatch(postExperience(newExperience));

    setNewExperience({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      area: "",
      description: "",
    });
    // dispatch(getExperience());
  };

  const handlePutExperience = (e) => {
    e.preventDefault();
    dispatch(putExperience(expForPutState, expForPut));
    setHasPut(true);
  };

  useEffect(() => {
    if (hasPut) {
      dispatch(getExperience());
      setHasPut(false);
    }
  }, [hasPut]);

  useEffect(() => {
    if (expPic) {
      dispatch(postExpPic(expPic, newExpId));
    }
  }, [newExpId]);

  useEffect(() => {
    if (expForPut.role) {
      setShowExperiencePut(true);
      setExpForPutState({
        role: `${expForPut.role}`,
        company: `${expForPut.company}`,
        startDate: `${expForPut.startDate}`,
        endDate: `${expForPut.endDate}`,
        area: `${expForPut.area}`,
        description: `${expForPut.description}`,
      });
    }
  }, [expForPut]);

  return (
    <>
      <div style={{ width: "100%", height: "400px" }}>
        <Card style={{ width: "100%", height: "100%", position: "relative" }}>
          <Card.Img
            style={{
              width: "100%",
              height: "50%",
              backgroundImage: "url(https://placecats.com/700/700)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
            variant="top"
          />
          <Button
            onClick={handleShow}
            style={{
              width: "85px",
              height: "85px",
              position: "absolute",
              top: "20%",
              borderRadius: "50%",
              border: "2px solid white",
              marginLeft: "20px",
              padding: "0px",
            }}
          >
            <img
              src={
                myProfile.image
                  ? myProfile.image
                  : "https://placecats.com/300/300"
              }
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
              }}
            />
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Scegli un Immagine profilo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type="file"
                name="proPicInput"
                onChange={(e) => {
                  handlePropic(e);
                }}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Chiudi
              </Button>
            </Modal.Footer>
          </Modal>

          <div
            className="d-flex justify-content-center"
            style={{
              position: "absolute",
              left: "90%",
              top: "4%",
              width: "40px",
              height: "40px",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          >
            <Icon.Pencil
              className="align-self-center"
              style={{
                color: "#0B66C2",
                fontSize: "20px",
                backgroundColor: "white",
              }}
            />
          </div>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-1">
                <Card.Title className="m-0">
                  {myProfile.name} {myProfile.surname}
                </Card.Title>
                <div
                  className="d-flex gap-1"
                  style={{ border: "1px dashed #0B66C2", borderRadius: "10px" }}
                >
                  <Icon.ShieldCheck
                    className="align-self-center"
                    color="#0B66C2"
                    style={{ fontSize: "10px" }}
                  />
                  <p
                    className="m-0 align-self-center"
                    style={{ color: "#0B66C2", fontSize: "10px" }}
                  >
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
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#0B66C2", fontSize: "10px" }}
              >
                Informazioni di contatto
              </a>
            </div>
            <a
              href="#"
              className="text-decoration-none"
              style={{ color: "#0B66C2", fontSize: "10px" }}
            >
              14 collegamenti
            </a>
            <div className="d-flex gap-1">
              <p
                className="m-0"
                style={{
                  backgroundColor: "#0B66C2",
                  color: "white",
                  width: "fit-content",
                  height: "",
                  borderRadius: "10px",
                  padding: "2px",
                  cursor: "pointer",
                  fontSize: "10px",
                }}
              >
                Disponibile per
              </p>
              <p
                className="m-0"
                style={{
                  color: "#0B66C2",
                  width: "fit-content",
                  borderRadius: "10px",
                  padding: "2px",
                  cursor: "pointer",
                  border: "1px solid #0B66C2",
                  fontSize: "10px",
                }}
              >
                Aggiungi sezione del profilo
              </p>
              <p
                className="m-0"
                style={{
                  color: "#0B66C2",
                  width: "fit-content",
                  borderRadius: "10px",
                  padding: "2px",
                  cursor: "pointer",
                  border: "1px solid #0B66C2",
                  fontSize: "10px",
                }}
              >
                Migliora profilo
              </p>
              <p
                className="m-0"
                style={{
                  color: "gray",
                  width: "fit-content",
                  borderRadius: "10px",
                  padding: "2px",
                  cursor: "pointer",
                  border: "1px solid gray",
                  fontSize: "10px",
                }}
              >
                Altro
              </p>
            </div>
            <div
              style={{
                width: "50%",
                backgroundColor: "#DDE7F1",
                borderRadius: "10px",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              <div className="d-flex justify-content-between">
                <p className="m-0" style={{ fontWeight: "bold" }}>
                  Disponibile a lavorare
                </p>
                <Icon.Pencil className="align-self-center" />
              </div>
              <p className="m-0">Altra descrizione...</p>
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#0B66C2" }}
              >
                Mostra dettagli
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          marginTop: "10px",
          border: "1px solid gray",
          borderRadius: "10px",
          padding: "4px",
        }}
      >
        <div className="d-flex justify-content-between">
          <p className="ms-3" style={{ fontWeight: "bold" }}>
            Consigliato per te
          </p>
          <Icon.X className="text-black" />
        </div>
        <p className="ms-3 text-secondary" style={{ fontSize: "10px" }}>
          <Icon.EyeFill /> Solo per te
        </p>
        <div
          style={{
            width: "90%",
            borderRadius: "10px",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "10px",
            padding: "10px",
          }}
        >
          <div className="d-flex">
            <img
              src="https://placecats.com/50/50"
              style={{ borderRadius: "10px" }}
            />
            <p className="m-2">
              Entra in contatto con una persona che ricopre il ruolo ingegnere
              Full Stack per raggiungere i tuoi obiettivi professionali
            </p>
          </div>
          <p
            className="mb-5 text-secondary"
            style={{ fontSize: "10px", marginTop: "10px" }}
          >
            Trova persone che possono fornire indicazione e aiutarti a trovare
            potenziali opportunità.
          </p>
          <p
            style={{
              marginBottom: "0px",
              border: "1px solid gray",
              width: "fit-content",
              borderRadius: "10px",
              color: "gray",
              cursor: "pointer",
              fontSize: "10px",
              padding: "2px",
              marginTop: "10px",
            }}
          >
            Cerca persone
          </p>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          marginTop: "10px",
          border: "1px solid gray",
          borderRadius: "10px",
          padding: "4px",
        }}
      >
        <div className="d-flex justify-content-between">
          <p className="m-3" style={{ fontWeight: "bold" }}>
            Analisi
          </p>
          <Icon.X className="text-black" />
        </div>
        <p className="m-0 text-secondary" style={{ fontSize: "10px" }}>
          <Icon.EyeFill /> Solo per te
        </p>
        <div className="d-flex gap-1">
          <div className="d-flex gap-1">
            <Icon.PeopleFill style={{ marginTop: "4px" }} />
            <div className="d-flex flex-column">
              <p className="m-0">7 visualizzazioni del profilo</p>
              <p className="text-secondary" style={{ fontSize: "10px" }}>
                Scopri chi ha visitato il tuo profilo.
              </p>
            </div>
          </div>

          <div className="d-flex gap-1">
            <Icon.BarChartFill style={{ marginTop: "4px" }} />
            <div className="d-flex flex-column">
              <p className="m-0">2 impressioni dei post</p>
              <p className="text-secondary" style={{ fontSize: "10px" }}>
                Scopri chi sta interagendo con i tuoi post.
              </p>
            </div>
          </div>

          <div className="d-flex gap-1">
            <Icon.Search style={{ marginTop: "4px" }} />
            <div className="d-flex flex-column">
              <p className="m-0">3 comparse nei motori di ricerca</p>
              <p className="text-secondary" style={{ fontSize: "10px" }}>
                Vedi quante volte compari nei risultati di ricerca.
              </p>
            </div>
          </div>
        </div>
        <hr className="m-0" />
        <p className="m-0 text-center">
          Mostra tutte le analisi
          <Icon.ArrowRight className="ms-1" />
        </p>
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          marginTop: "10px",
          border: "1px solid gray",
          borderRadius: "10px",
          padding: "4px",
        }}
      >
        <div className="d-flex justify-content-between">
          <p className="m-0" style={{ fontWeight: "bold" }}>
            Risorse
          </p>
          <Icon.X className="text-black" />
        </div>
        <p className="m-0 text-secondary" style={{ fontSize: "10px" }}>
          <Icon.EyeFill /> Solo per te
        </p>
        <div>
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
        </div>
        <hr className="m-0" />
        <p className="m-0 text-center">
          Mostra tutte le risorse (4)
          <Icon.ArrowRight className="ms-1" />
        </p>
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          marginTop: "10px",
          border: "1px solid gray",
          borderRadius: "10px",
          padding: "4px",
        }}
      >
        <div className="d-flex justify-content-between">
          <p className="m-0 fw-bold align-self-center">Attivtà</p>
          <div className="d-flex gap-2">
            <p
              className="m-0"
              style={{
                color: "#0B66C2",
                fontWeight: "bold",
                border: "1px solid #0B66C2",
                borderRadius: "10px",
                padding: "4px",
                cursor: "pointer",
              }}
            >
              Crea un post
            </p>
            <Icon.Pencil className="align-self-center" />
          </div>
        </div>
        <a
          href="#"
          className="m-0 text-decoration-none"
          style={{ color: "#0B66C2", fontSize: "14px" }}
        >
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
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          marginTop: "10px",
          border: "1px solid gray",
          borderRadius: "10px",
          padding: "4px",
        }}
      >
        <ExperienceSection />
        <Button
          onClick={handleShowExperience}
          className="btn bg-transparent rounded-pill border border-1 border-primary text-primary px-3 py-1 fw-medium mx-4 mb-3"
        >
          Aggiungi Esperienza
        </Button>
        <Modal show={showExperience} onHide={handleCloseExperience}>
          <Modal.Header closeButton>
            <Modal.Title>Aggiungi un Esperienza!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleNewExperience}>
              <Form.Label className="mt-2 fw-lighter">Ruolo</Form.Label>
              <Form.Control
                type="text"
                required
                value={newExperience.role}
                onChange={(e) => {
                  setNewExperience({
                    ...newExperience,
                    role: e.target.value,
                  });
                }}
              />
              <Form.Label className="mt-2 fw-lighter">Azienda</Form.Label>
              <Form.Control
                type="text"
                required
                value={newExperience.company}
                onChange={(e) => {
                  setNewExperience({
                    ...newExperience,
                    company: e.target.value,
                  });
                }}
              />
              <Form.Label className="mt-2 fw-lighter">
                Descrivici la tua esperienza lavorativa
              </Form.Label>
              <Form.Control
                type="text"
                required
                value={newExperience.description}
                onChange={(e) => {
                  setNewExperience({
                    ...newExperience,
                    description: e.target.value,
                  });
                }}
              />
              <Form.Label className="mt-2 fw-lighter">
                Data di inizio
              </Form.Label>
              <Form.Control
                type="date"
                required
                value={newExperience.startDate}
                onChange={(e) => {
                  setNewExperience({
                    ...newExperience,
                    startDate: e.target.value,
                  });
                }}
              />
              <Form.Label>
                Questa esperienza di lavoro si è terminata
              </Form.Label>
              <Form.Check className="ms-2" />
              <Form.Label className="mt-2 fw-lighter">Data di fine</Form.Label>
              <Form.Control
                type="date"
                value={newExperience.endDate}
                onChange={(e) => {
                  setNewExperience({
                    ...newExperience,
                    endDate: e.target.value,
                  });
                }}
              />
              <Form.Label className="mt-2 fw-lighter">
                Zona di lavoro
              </Form.Label>
              <Form.Control
                type="text"
                value={newExperience.area}
                onChange={(e) => {
                  setNewExperience({
                    ...newExperience,
                    area: e.target.value,
                  });
                }}
              />
              <Form.Label className="mt-2 fw-lighter">
                Immagine Azienda
              </Form.Label>
              <input
                type="file"
                name="proPicInput"
                onChange={(e) => {
                  handleExpPic(e);
                }}
              />
              <Button
                type="submit"
                className="btn rounded-pill border border-1 text-white px-3 py-1 fw-medium mt-3 ms-1"
              >
                Salva
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseExperience}>
              Chiudi
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          marginTop: "10px",
          border: "1px solid gray",
          borderRadius: "10px",
          padding: "4px",
        }}
      >
        <div className="d-flex justify-content-between">
          <p className="m-0 fw-bold align-self-center">Formazione</p>
          <div className="d-flex gap-3">
            <Icon.Plus
              className="align-self-center"
              style={{ fontSize: "22px" }}
            />
            <Icon.Pencil className="align-self-center" />
          </div>
        </div>
        <div className="d-flex mt-3 gap-2">
          <img
            src="https://placecats.com/50/50"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="d-flex flex-column">
            <p className="fw-bold m-0" style={{ fontSize: "14px" }}>
              Tor Vergata
            </p>
            <p className="m-0">Laurea in...</p>
            <p className="text-secondary m-0" style={{ fontSize: "12px" }}>
              Da... A...
            </p>
            <p className="m-0">Votazione: 110</p>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          marginTop: "10px",
          border: "1px solid gray",
          borderRadius: "10px",
          padding: "4px",
        }}
      >
        <div className="d-flex justify-content-between mb-2">
          <p className="m-0 fw-bold align-self-center">Competenze</p>
          <div className="d-flex gap-3">
            <Icon.Plus
              className="align-self-center"
              style={{ fontSize: "22px" }}
            />
            <Icon.Pencil className="align-self-center" />
          </div>
        </div>
        <p className="m-0 fw-bold">Esperienza n.1</p>
        <div className="d-flex">
          <img
            className="align-self-center"
            src="https://placecats.com/20/20"
            style={{ width: "20px", height: "20px" }}
          />
          <p className="m-0">Descrizione esperienza n.1...</p>
        </div>
        <hr />
        <p className="m-0 fw-bold">Esperienza n.2</p>
        <div className="d-flex">
          <img
            className="align-self-center"
            src="https://placecats.com/20/20"
            style={{ width: "20px", height: "20px" }}
          />
          <p className="m-0">Descrizione esperienza n.2...</p>
        </div>
        <hr className="mb-0" />
        <p className="m-0 text-center">
          Mostra tutte le competenze (5)
          <Icon.ArrowRight className="ms-1" />
        </p>
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          marginTop: "10px",
          border: "1px solid gray",
          borderRadius: "10px",
          padding: "4px",
        }}
      >
        <p className="m-0 fw-bold align-self-center mb-2">Interessi</p>
        <div className="d-flex gap-5">
          <p style={{ color: "#004C33", fontWeight: "bold" }}>Aziende</p>
          <p>Scuole o università</p>
        </div>
        <hr className="mt-1" />

        <div className="d-flex justify-content-between">
          <div className="d-flex gap-1">
            <img
              src="https://placecats.com/50/50"
              style={{ width: "50px", height: "50px" }}
            />
            <div>
              <p className="fw-bold m-0">Amazon</p>
              <p>33mln di follower</p>
              <p style={{ border: "2px solid gray", borderRadius: "10px" }}>
                <Icon.Check style={{ fontSize: "24px" }} />
                Già segui
              </p>
            </div>
          </div>
          <div className="d-flex gap-1">
            <img
              src="https://placecats.com/50/50"
              style={{ width: "50px", height: "50px" }}
            />
            <div>
              <p className="fw-bold m-0">Meta</p>
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
      </div>
      {/* MODALE PER PUT */}
      <Modal show={showExperiencePut} onHide={handleCloseExperiencePut}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Esperienza!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlePutExperience}>
            <Form.Label className="mt-2 fw-lighter">Ruolo</Form.Label>
            <Form.Control
              type="text"
              required
              value={expForPutState.role}
              onChange={(e) => {
                setExpForPutState({
                  ...expForPutState,
                  role: e.target.value,
                });
              }}
            />
            <Form.Label className="mt-2 fw-lighter">Azienda</Form.Label>
            <Form.Control
              type="text"
              required
              value={expForPutState.company}
              onChange={(e) => {
                setExpForPutState({
                  ...expForPutState,
                  company: e.target.value,
                });
              }}
            />
            <Form.Label className="mt-2 fw-lighter">
              Descrivici la tua esperienza lavorativa
            </Form.Label>
            <Form.Control
              type="text"
              required
              value={expForPutState.description}
              onChange={(e) => {
                setExpForPutState({
                  ...expForPutState,
                  description: e.target.value,
                });
              }}
            />
            <Form.Label className="mt-2 fw-lighter">Data di inizio</Form.Label>
            <Form.Control
              type="date"
              required
              value={expForPutState.startDate}
              onChange={(e) => {
                setExpForPutState({
                  ...expForPutState,
                  startDate: e.target.value,
                });
              }}
            />
            <Form.Label>Questa esperienza di lavoro si è terminata</Form.Label>
            <Form.Check className="ms-2" />
            <Form.Label className="mt-2 fw-lighter">Data di fine</Form.Label>
            <Form.Control
              type="date"
              value={expForPutState.endDate}
              onChange={(e) => {
                setExpForPutState({
                  ...expForPutState,
                  endDate: e.target.value,
                });
              }}
            />
            <Form.Label className="mt-2 fw-lighter">Zona di lavoro</Form.Label>
            <Form.Control
              type="text"
              value={expForPutState.area}
              onChange={(e) => {
                setExpForPutState({
                  ...expForPutState,
                  area: e.target.value,
                });
              }}
            />
            <Form.Label className="mt-2 fw-lighter">
              Immagine Azienda
            </Form.Label>
            <input
              type="file"
              name="proPicInput"
              onChange={(e) => {
                handleExpPic(e);
              }}
            />
            <Button
              type="submit"
              className="btn rounded-pill border border-1 text-white px-3 py-1 fw-medium mt-3 ms-1"
            >
              Salva
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseExperiencePut}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>

      {/* MODALE PER LA DELETE DI EXP */}
      <Modal show={showExperienceDel} onHide={handleCloseExperienceDel}>
        <Modal.Header closeButton>
          <Modal.Title>ELIMINARE Esperienza?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Sei sicuro di voler eliminare questa esperienza?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>{dispatch(deleteExp(delId))}}>SI ELIMINA</Button>
          <Button variant="secondary" onClick={handleCloseExperienceDel}>
            NO
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CentralSection;
