import { Card } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useSelector } from "react-redux";

function CentralSection() {
  const myProfile = useSelector((state) => {
    return state.myProfile;
  });

  return (
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
          src="https://placecats.com/100/100"
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
  );
}

export default CentralSection;
