import { Card } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import ExperienceSection from "./ExperienceSection";
import { useDispatch, useSelector } from "react-redux";
import { postPropic } from "../redux/action";

function CentralSection() {
  const dispatch = useDispatch();

  const myProfile = useSelector((state) => {
    return state.myProfile;
  });

  const handlePropic = (e) => {
    const propicData = new FormData();
    propicData.append("profile", e.target.files[0]);
    dispatch(postPropic(propicData));
  };

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
          <img
            src={
              myProfile.image
                ? myProfile.image
                : "https://placecats.com/300/300"
            }
            style={{
              width: "80px",
              height: "80px",
              position: "absolute",
              top: "20%",
              borderRadius: "50%",
              border: "2px solid white",
              marginLeft: "20px",
            }}
          />
          <input
            type="file"
            name="proPicInput"
            onChange={(e) => {
              handlePropic(e);
            }}
          />
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
          <p className="m-0" style={{ fontWeight: "bold" }}>
            Consigliato per te
          </p>
          <Icon.X className="text-black" />
        </div>
        <p className="m-0 text-secondary" style={{ fontSize: "10px" }}>
          <Icon.EyeFill /> Solo per te
        </p>
        <div
          style={{
            width: "90%",
            border: "1px solid gray",
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
            <p className="m-0">
              Entra in contatto con una persona che ricopre il ruolo ingegnere
              Full Stack per raggiungere i tuoi obiettivi professionali
            </p>
          </div>
          <p
            className="mb-0 text-secondary"
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
          <p className="m-0" style={{ fontWeight: "bold" }}>
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
    </>
  );
}

export default CentralSection;
