import { useState } from "react";
import * as Icon from "react-bootstrap-icons";

const InterestsSection = () => {
  const [activeTab, setActiveTab] = useState("aziende");

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        marginTop: "10px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p className="m-0 fw-bold fs-5 mb-3">Interessi</p>

      <div className="d-flex gap-5 border-bottom pb-2">
        <p
          style={{
            fontWeight: activeTab === "aziende" ? "bold" : "normal",
            color: activeTab === "aziende" ? "#004C33" : "gray",
            cursor: "pointer",
          }}
          onClick={() => setActiveTab("aziende")}
        >
          Aziende
        </p>
        <p
          style={{
            fontWeight: activeTab === "universita" ? "bold" : "normal",
            color: activeTab === "universita" ? "#004C33" : "gray",
            cursor: "pointer",
          }}
          onClick={() => setActiveTab("universita")}
        >
          Corsi e Università
        </p>
      </div>

      {activeTab === "aziende" && (
        <>
          <div className="d-flex justify-content-between mt-3">
            <div className="d-flex gap-3 align-items-center">
              <img
                src="https://static.vecteezy.com/ti/vettori-gratis/p1/14018561-amazon-logo-su-trasparente-sfondo-gratuito-vettoriale.jpg"
                alt="Amazon"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <div>
                <p className="fw-bold m-0">Amazon</p>
                <p className="text-muted">33 mln di follower</p>
                <p className="border border-secondary rounded-pill px-3 py-1 d-inline-block">
                  <Icon.Check className="me-1" />
                  Già segui
                </p>
              </div>
            </div>

            <div className="d-flex gap-3 align-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Meta_Inc._logo.jpg"
                alt="Meta"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <div>
                <p className="fw-bold m-0">Meta</p>
                <p className="text-muted">888 mln di follower</p>
                <p className="border border-secondary rounded-pill px-3 py-1 d-inline-block">
                  <Icon.Check className="me-1" />
                  Già segui
                </p>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <div>
                <p className="fw-bold m-0">Google</p>
                <p className="text-muted">1.5 Bln di follower</p>
                <p className="border border-secondary rounded-pill px-3 py-1 d-inline-block">
                  <Icon.Check className="me-1" />
                  Già segui
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === "universita" && (
        <>
          <div className="d-flex justify-content-start mt-3">
            <div className="d-flex gap-3 align-items-center">
              <img
                src="data:image/jpeg;base64,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"
                alt="Epicode"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <div>
                <p className="fw-bold m-0">Epicode</p>
                <p className="text-muted">Corso Full Stack Web Developer</p>
                <p className="border border-secondary rounded-pill px-3 py-1 d-inline-block">
                  <Icon.Check className="me-1" />
                  Già segui
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      <hr className="mt-3 mb-2" />
      <p
        className="m-0 text-center text-primary fw-medium"
        style={{ cursor: "pointer" }}
      >
        Mostra tutti gli interessi
        <Icon.ArrowRight className="ms-1" />
      </p>
    </div>
  );
};

export default InterestsSection;
