import { Card } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function SecondCentralSection() {
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
            src="https://placecats.com/100/100"
            style={{
              width: "120px",
              height: "120px",
              position: "absolute",
              top: "10%",
              borderRadius: "50%",
              border: "2px solid white",
              marginLeft: "20px",
            }}
          />
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-1">
                <Card.Title className="m-0">Nome Utente</Card.Title>
                <Icon.VolumeUpFill className="align-self-center" />
              </div>
            </div>
            <Card.Text className="m-0">Studente presso Epicode.</Card.Text>
            <div className="d-flex gap-1">
              <p className="m-0 text-secondary" style={{ fontSize: "10px" }}>
                Racalmuto, Sicilia, Italia
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
            <div
              className="d-flex align-items-center"
              style={{
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <div className="d-flex">
                <img
                  src="https://placecats.com/700/700"
                  alt="Utente 1"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "2px solid white",
                    marginRight: "-10px",
                    zIndex: 2,
                  }}
                />
                <img
                  src="https://placecats.com/700/700"
                  alt="Utente 2"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "2px solid white",
                    zIndex: 1,
                  }}
                />
              </div>

              <p
                className="hoverable-text"
                style={{
                  margin: "0",
                  fontSize: "12px",
                  color: "gray",
                  marginLeft: "10px",
                }}
              >
                <strong>Michela Vivacqua</strong>,{" "}
                <strong>Gaetano Napoli</strong> e un altro collegamento in
                comune
              </p>
            </div>
            <div className="d-flex gap-1">
              <p
                className="m-0"
                style={{
                  backgroundColor: "#0B66C2",
                  color: "white",
                  width: "100px",
                  height: "25px",
                  borderRadius: "15px",
                  padding: "2px",
                  cursor: "pointer",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                }}
              >
                <Icon.PersonPlus className="align-self-center" />
                {"Collegati"}
              </p>
              <p
                className="m-0"
                style={{
                  color: "#0B66C2",
                  width: "100px",
                  height: "25px",
                  borderRadius: "15px",
                  padding: "2px",
                  cursor: "pointer",
                  border: "1px solid #0B66C2",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Messaggio
              </p>

              <p
                className="m-0"
                style={{
                  color: "gray",
                  width: "60px",
                  borderRadius: "15px",
                  padding: "2px",
                  cursor: "pointer",
                  border: "1px solid gray",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Altro
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div
        style={{
          width: "100%",
          margintop: "10px",
          border: "1px solid #d3d3d3",
          borderRadius: "10px",
          padding: "4px",
          backgroundcolor: "white",
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ paddingLeft: "10px" }}>
            <p className="m-0" style={{ fontWeight: "bold" }}>
              Informazioni
            </p>
            <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
              ciao raga
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margintop: "10px",
          border: "1px solid #d3d3d3",
          borderRadius: "10px",
          padding: "4px",
          backgroundcolor: "white",
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ paddingLeft: "10px" }}>
            <p className="m-0" style={{ fontWeight: "bold" }}>
              Attività
            </p>
            <p style={{ fontSize: "10px" }}>644 followers</p>
            <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
              <span className="m-0 text-secondary" style={{ fontSize: "12px" }}>
                Stefano{" "}
              </span>
              non ha ancora pubblicato nulla I post recenti che Stefano
              condivide appariranno qui.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margintop: "10px",
          border: "1px solid #d3d3d3",
          borderRadius: "10px",
          padding: "4px",
          backgroundcolor: "white",
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ paddingLeft: "10px" }}>
            <p className="m-0" style={{ fontWeight: "bold" }}>
              Informazioni
            </p>
            <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
              ciao raga
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margintop: "10px",
          border: "1px solid #d3d3d3",
          borderRadius: "10px",
          padding: "4px",
          backgroundcolor: "white",
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ paddingLeft: "10px" }}>
            <p className="m-0" style={{ fontWeight: "bold" }}>
              Informazioni
            </p>
            <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
              ciao raga
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margintop: "10px",
          border: "1px solid #d3d3d3",
          borderRadius: "10px",
          padding: "4px",
          backgroundcolor: "white",
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ paddingLeft: "10px" }}>
            <p className="m-0" style={{ fontWeight: "bold" }}>
              Informazioni
            </p>
            <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
              ciao raga
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margintop: "10px",
          border: "1px solid #d3d3d3",
          borderRadius: "10px",
          padding: "4px",
          backgroundcolor: "white",
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ paddingLeft: "10px" }}>
            <p className="m-0" style={{ fontWeight: "bold" }}>
              Informazioni
            </p>
            <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
              ciao raga
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margintop: "10px",
          border: "1px solid #d3d3d3",
          borderRadius: "10px",
          padding: "4px",
          backgroundcolor: "white",
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ paddingLeft: "10px" }}>
            <p className="m-0" style={{ fontWeight: "bold" }}>
              Informazioni
            </p>
            <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
              ciao raga
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margintop: "10px",
          border: "1px solid #d3d3d3",
          borderRadius: "10px",
          padding: "4px",
          backgroundcolor: "white",
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ paddingLeft: "10px" }}>
            <p className="m-0" style={{ fontWeight: "bold" }}>
              Informazioni
            </p>
            <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
              ciao raga
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margintop: "10px",
          border: "1px solid #d3d3d3",
          borderRadius: "10px",
          padding: "4px",
          backgroundcolor: "white",
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ paddingLeft: "10px" }}>
            <p className="m-0" style={{ fontWeight: "bold" }}>
              Informazioni
            </p>
            <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
              ciao raga
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margintop: "10px",
          border: "1px solid #d3d3d3",
          borderRadius: "10px",
          padding: "4px",
          backgroundcolor: "white",
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ paddingLeft: "10px" }}>
            <p className="m-0" style={{ fontWeight: "bold" }}>
              Informazioni
            </p>
            <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
              ciao raga
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margintop: "10px",
          border: "1px solid #d3d3d3",
          borderRadius: "10px",
          padding: "4px",
          backgroundcolor: "white",
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ paddingLeft: "10px" }}>
            <p className="m-0" style={{ fontWeight: "bold" }}>
              Informazioni
            </p>
            <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
              ciao raga
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margintop: "10px",
          border: "1px solid #d3d3d3",
          borderRadius: "10px",
          padding: "4px",
          backgroundcolor: "white",
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ paddingLeft: "10px" }}>
            <p className="m-0" style={{ fontWeight: "bold" }}>
              Informazioni
            </p>
            <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
              ciao raga
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondCentralSection;
