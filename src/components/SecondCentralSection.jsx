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
            alt="Profilo utente"
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
      {/*prima card*/}
      <div style={{ width: "100%", marginTop: "10px" }}>
        <div
          style={{
            width: "100%",
            border: "1px solid #d3d3d3",
            borderRadius: "10px",
            padding: "15px",
            backgroundColor: "white",
            marginBottom: "10px",
          }}
        >
          <p className="m-0" style={{ fontWeight: "bold", fontSize: "16px" }}>
            Informazioni
          </p>
          <p className="m-0" style={{ fontSize: "14px" }}>
            ciao raga
          </p>
        </div>
        {/*seconda card*/}
        <div
          style={{
            width: "100%",
            border: "1px solid #d3d3d3",
            borderRadius: "10px",
            padding: "15px",
            backgroundColor: "white",
            marginBottom: "20px",
          }}
        >
          <p className="m-0" style={{ fontWeight: "bold", fontSize: "16px" }}>
            Attività
          </p>
          <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
            644 follower
          </p>
          <p className="m-0" style={{ fontSize: "14px" }}>
            Stefano non ha ancora pubblicato nulla.
            <br />I post recenti che Stefano condivide appariranno qui.
          </p>
          <hr style={{ border: "1px solid #e5e5e5", margin: "10px 0" }} />
          <p
            className="m-0"
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#181818",
              textAlign: "center",
              padding: "10px 0",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Mostra tutte le attività →
          </p>
        </div>
        {/*terza card*/}
        <div
          style={{
            width: "100%",
            border: "1px solid #d3d3d3",
            borderRadius: "10px",
            padding: "15px",
            backgroundColor: "white",
            marginBottom: "10px",
          }}
        >
          <p className="m-0" style={{ fontWeight: "bold", fontSize: "16px" }}>
            Esperienza
          </p>
          <div className="d-flex" style={{ marginTop: "15px" }}>
            <img
              src="https://placecats.com/100/100"
              alt="logo"
              style={{ width: "40px", height: "40px", borderRadius: "5px" }}
            />
            <div style={{ marginLeft: "10px" }}>
              <p
                className="m-0"
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                Teacher
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                EPICODE · Autonomo
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                giu 2019 - Presente · 5 anni 8 mesi
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                Roma, Italia
              </p>
            </div>
          </div>
          <hr style={{ border: "1px solid #e5e5e5", margin: "10px 0" }} />

          <div className="d-flex" style={{ marginTop: "15px" }}>
            <img
              src="https://placecats.com/100/100"
              alt="logo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "5px",
                marginRight: "15px",
              }}
            />
            <div style={{ flex: 1 }}>
              <p
                className="m-0"
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                Founder & Software Developer
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                Nuclecode SRL
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                mar 2017 - Presente · 7 anni 11 mesi
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                Gorizia, Italia
              </p>
              <p
                className="m-0"
                style={{
                  fontSize: "12px",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                Innovative start-up specialized in the development of highly
                innovative computer-medical solutions, using cloud potential and
                mobile computing, machine learning and Mixed Reality.
              </p>
              <div
                style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #d3d3d3",
                  borderRadius: "10px",
                  padding: "10px",
                  marginTop: "10px",
                }}
              >
                <p
                  className="m-0"
                  style={{
                    fontWeight: "bold",
                    fontSize: "12px",
                    marginBottom: "5px",
                  }}
                >
                  Nuclecode | Biohealth Innovation
                </p>
                <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                  Nuclecode SRL is a newborn healthcare startup based in Italy.
                  We develop HIPAA and GDPR compliant solutions dedicated to
                  healthcare companies and organizations.
                </p>
                <div
                  className="d-flex align-items-center"
                  style={{ marginTop: "10px" }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                    }}
                  >
                    <Icon.Image style={{ fontSize: "20px", color: "gray" }} />
                  </div>
                  <p className="m-0" style={{ fontSize: "12px" }}>
                    Nuclecode | Biohealth Innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ border: "1px solid #e5e5e5", margin: "10px 0" }} />
          <div className="d-flex" style={{ marginTop: "15px" }}>
            <img
              src="https://placecats.com/100/100"
              alt="logo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "5px",
                marginRight: "15px",
              }}
            />
            <div style={{ flex: 1 }}>
              <p
                className="m-0"
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                Founder & IT Consultant
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                TecnoStart
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                gen 2015 - Presente · 10 anni 1 mese
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                Gorizia, Italia
              </p>
              <p
                className="m-0"
                style={{
                  fontSize: "12px",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                TecnoStart nasce per offrire consulenze e servizi informatici a
                privati, aziende, enti professionali e scuole, oltre che
                formazione a tutti i livelli per il corretto utilizzo degli
                stessi.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  marginTop: "10px",
                }}
              >
                <img
                  src="https://placecats.com/50/50"
                  alt="TecnoStart Logo"
                  style={{
                    width: "80px",
                    height: "50px",
                    borderRadius: "5px",
                    marginRight: "10px",
                  }}
                />
                <div>
                  <p
                    className="m-0"
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      marginBottom: "5px",
                    }}
                  >
                    TecnoStart Logo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ border: "1px solid #e5e5e5", margin: "10px 0" }} />
          <div className="d-flex" style={{ marginTop: "15px" }}>
            <img
              src="https://placecats.com/100/100"
              alt="Tecnest Logo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "5px",
                marginRight: "15px",
              }}
            />
            <div style={{ flex: 1 }}>
              <p
                className="m-0"
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                Frontend Developer
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                Tecnest Srl - Supply Chain: Cultura e Soluzioni · Autonomo
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                feb 2020 - ott 2020 · 9 mesi
              </p>
            </div>
          </div>
          <hr style={{ border: "1px solid #e5e5e5", margin: "15px 0" }} />
          <div className="d-flex" style={{ marginTop: "15px" }}>
            <img
              src="https://placecats.com/100/100"
              alt="MV Labs Logo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "5px",
                marginRight: "15px",
              }}
            />
            <div style={{ flex: 1 }}>
              <p
                className="m-0"
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                Frontend Developer
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                MV Labs · Freelance
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                giu 2019 - mag 2020 · 1 anno
              </p>
            </div>
          </div>
        </div>
        {/*quarta card*/}
        <div
          style={{
            width: "100%",
            border: "1px solid #d3d3d3",
            borderRadius: "10px",
            padding: "15px",
            backgroundColor: "white",
            marginTop: "10px",
          }}
        >
          <p className="m-0" style={{ fontWeight: "bold", fontSize: "16px" }}>
            Formazione
          </p>
          <div className="d-flex" style={{ marginTop: "15px" }}>
            <img
              src="https://placecats.com/100/100"
              alt="Logo università"
              style={{ width: "50px", height: "50px", borderRadius: "5px" }}
            />
            <div style={{ marginLeft: "10px" }}>
              <p
                className="m-0"
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                Università degli Studi di Udine
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                Laurea Triennale in Scienze e Tecnologie Multimediali,
                Dipartimento di Scienze matematiche, informatiche e multimediali
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                2010 - 2013
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                Votazione: 108/110
              </p>
            </div>
          </div>
        </div>
        {/*quinta card*/}
        <div
          style={{
            width: "100%",
            border: "1px solid #d3d3d3",
            borderRadius: "10px",
            padding: "15px",
            backgroundColor: "white",
            marginTop: "10px",
          }}
        >
          <p className="m-0" style={{ fontWeight: "bold", fontSize: "16px" }}>
            Licenze e certificazioni
          </p>
          <div className="d-flex" style={{ marginTop: "15px" }}>
            <img
              src="https://placecats.com/100/100"
              alt="Logo Cambridge"
              style={{ width: "50px", height: "50px", borderRadius: "5px" }}
            />
            <div style={{ marginLeft: "10px" }}>
              <p
                className="m-0"
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                Cambridge English Level 2 Certificate in ESOL International
                (First) - Grade A Level C1
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                Cambridge University Press & Assessment
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                Data di rilascio: lug 2014
              </p>
            </div>
          </div>
        </div>

        {/*sesta card*/}
        <div
          style={{
            width: "100%",
            border: "1px solid #d3d3d3",
            borderRadius: "10px",
            padding: "15px",
            backgroundColor: "white",
            marginTop: "10px",
          }}
        >
          <p className="m-0" style={{ fontWeight: "bold", fontSize: "16px" }}>
            Volontariato
          </p>

          <div className="d-flex" style={{ marginTop: "15px" }}>
            <img
              src="https://placecats.com/100/100"
              alt="Logo Core Maintainer"
              style={{ width: "50px", height: "50px", borderRadius: "5px" }}
            />
            <div style={{ marginLeft: "10px" }}>
              <p
                className="m-0"
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                Core Maintainer
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                HospitalRun
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                ago 2019 - dic 2019 · 5 mesi
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                Scienza e tecnologia
              </p>
            </div>
          </div>

          <hr style={{ border: "1px solid #e5e5e5", margin: "10px 0" }} />

          <div className="d-flex" style={{ marginTop: "15px" }}>
            <img
              src="https://placecats.com/100/100"
              alt="Logo Donatore di Sangue"
              style={{ width: "50px", height: "50px", borderRadius: "5px" }}
            />
            <div style={{ marginLeft: "10px" }}>
              <p
                className="m-0"
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                Donatore di sangue
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                Advsg Fidas Gorizia
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                set 2013 - presente · 11 anni 5 mesi
              </p>
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                Salute
              </p>
            </div>
          </div>
        </div>

        {/*settima card*/}
        <div
          style={{
            width: "100%",
            border: "1px solid #d3d3d3",
            borderRadius: "10px",
            padding: "15px",
            backgroundColor: "white",
            marginTop: "10px",
          }}
        >
          <p className="m-0" style={{ fontWeight: "bold", fontSize: "16px" }}>
            Competenze
          </p>

          <div style={{ marginTop: "10px" }}>
            <p className="m-0" style={{ fontWeight: "bold", fontSize: "14px" }}>
              JavaScript
            </p>
            <div
              className="d-flex"
              style={{ marginTop: "5px", alignItems: "center" }}
            >
              <img
                src="https://placecats.com/100/100"
                alt="Icona JavaScript"
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              />
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                Competenze confermate da Maksim Sinik, che ha una grande
                competenza in questo ambito
              </p>
            </div>
            <div
              className="d-flex"
              style={{ marginTop: "5px", alignItems: "center" }}
            >
              <img
                src="https://placecats.com/100/100"
                alt="Icona collegamento"
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              />
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                Confermata da 3 colleghi presso Nuclecode S.R.L
              </p>
            </div>
            <div
              className="d-flex"
              style={{ marginTop: "5px", alignItems: "center" }}
            >
              <Icon.PeopleFill
                style={{ fontSize: "20px", color: "gray", marginRight: "10px" }}
              />
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                21 conferme
              </p>
            </div>
          </div>

          <hr style={{ border: "1px solid #e5e5e5", margin: "10px 0" }} />

          <div style={{ marginTop: "15px" }}>
            <p className="m-0" style={{ fontWeight: "bold", fontSize: "14px" }}>
              React.js
            </p>
            <div
              className="d-flex"
              style={{ marginTop: "5px", alignItems: "center" }}
            >
              <Icon.PeopleFill
                style={{ fontSize: "20px", color: "gray", marginRight: "10px" }}
              />
              <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                11 conferme
              </p>
            </div>
          </div>

          <hr style={{ border: "1px solid #e5e5e5", margin: "10px 0" }} />

          <p
            className="m-0"
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#181818",
              textAlign: "center",
              padding: "10px 0",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Mostra tutte le competenze (17) →
          </p>
        </div>

        {/*ottava card*/}

        <div
          style={{
            width: "100%",
            border: "1px solid #d3d3d3",
            borderRadius: "10px",
            padding: "15px",
            backgroundColor: "white",
            marginTop: "10px",
          }}
        >
          <p className="m-0" style={{ fontWeight: "bold", fontSize: "16px" }}>
            Referenze
          </p>
          <div style={{ marginTop: "15px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "15px",
              }}
            >
              <img
                src="https://placecats.com/60/60"
                alt="Profile"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  marginRight: "15px",
                }}
              />
              <div>
                <p
                  className="m-0"
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    color: "#181818",
                  }}
                >
                  Roberta Matera · 2°
                </p>
                <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                  Front-end developer at Almaviva Digitaltec | Angular, React,
                  Typescript
                </p>
                <p
                  className="m-0"
                  style={{
                    fontSize: "12px",
                    color: "gray",
                    marginTop: "5px",
                  }}
                >
                  11 dicembre 2024, Roberta e Stefano hanno studiato insieme
                </p>
                <p
                  className="m-0"
                  style={{ fontSize: "14px", marginTop: "10px" }}
                >
                  Ho avuto il privilegio di partecipare al bootcamp presso
                  Strive School (EPICODE) sotto la guida del docente Stefano
                  Casalosa e posso affermare che la sua competenza,
                  professionalità e dedizione sono state determinanti per il mio
                  percorso di apprendimento.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "15px",
              }}
            >
              <img
                src="https://placecats.com/60/60"
                alt="Profile"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  marginRight: "15px",
                }}
              />
              <div>
                <p
                  className="m-0"
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    color: "#181818",
                  }}
                >
                  Vardan Galstyan · 3°
                </p>
                <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                  Web Developer
                </p>
                <p
                  className="m-0"
                  style={{
                    fontSize: "12px",
                    color: "gray",
                    marginTop: "5px",
                  }}
                >
                  8 ottobre 2021, Vardan e Stefano hanno studiato insieme
                </p>
                <p
                  className="m-0"
                  style={{ fontSize: "14px", marginTop: "10px" }}
                >
                  I strongly believe that despite the professional skills, human
                  values are the most important. But when a person is both
                  professional and has tons of other values, thats what makes
                  him/her a unique asset in any team.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*none card*/}
        <div
          style={{
            width: "100%",
            border: "1px solid #d3d3d3",
            borderRadius: "10px",
            padding: "15px",
            backgroundColor: "white",
            marginTop: "10px",
          }}
        >
          <p className="m-0" style={{ fontWeight: "bold", fontSize: "16px" }}>
            Pubblicazioni
          </p>
          <p
            className="m-0"
            style={{
              fontWeight: "bold",
              fontSize: "14px",
              color: "#181818",
              marginTop: "10px",
            }}
          >
            &quot;Corti si nasce: linguaggi e tecniche del videoclip&quot;
          </p>
          <p
            className="m-0"
            style={{
              fontSize: "12px",
              color: "gray",
              marginTop: "5px",
            }}
          >
            Tesi di laurea triennale in Scienze e Tecnologie Multimediali presso
            l&apos;Università degli Studi di Udine.
          </p>
        </div>

        {/*decima card*/}
        <div
          style={{
            width: "100%",
            border: "1px solid #d3d3d3",
            borderRadius: "10px",
            padding: "15px",
            backgroundColor: "white",
            marginTop: "10px",
          }}
        >
          <p className="m-0" style={{ fontWeight: "bold", fontSize: "16px" }}>
            Lingue
          </p>

          <div style={{ marginTop: "15px" }}>
            <p className="m-0" style={{ fontWeight: "bold", fontSize: "14px" }}>
              Inglese
            </p>
            <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
              Conoscenza professionale
            </p>
          </div>

          <hr style={{ border: "1px solid #e5e5e5", margin: "10px 0" }} />

          <div>
            <p className="m-0" style={{ fontWeight: "bold", fontSize: "14px" }}>
              Italiano
            </p>
            <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
              Conoscenza madrelingua o bilingue
            </p>
          </div>
        </div>

        {/*undicesima card*/}
        <div
          style={{
            width: "100%",
            border: "1px solid #d3d3d3",
            borderRadius: "10px",
            padding: "15px",
            backgroundColor: "white",
            marginTop: "10px",
          }}
        >
          <p className="m-0" style={{ fontWeight: "bold", fontSize: "16px" }}>
            Interessi
          </p>
          <div className="d-flex" style={{ marginTop: "15px" }}>
            <p
              className="m-0"
              style={{
                fontSize: "14px",
                color: "gray",
                marginRight: "20px",
              }}
            >
              Aziende
            </p>
            <p
              className="m-0"
              style={{
                fontSize: "14px",
                color: "gray",
                cursor: "pointer",
                marginRight: "20px",
              }}
            >
              Gruppi
            </p>
            <p
              className="m-0"
              style={{
                fontSize: "14px",
                color: "gray",
                cursor: "pointer",
              }}
            >
              Scuole o università
            </p>
          </div>

          <hr style={{ border: "1px solid #e5e5e5", margin: "10px 0" }} />

          <div className="d-flex justify-content-between">
            <div
              className="d-flex"
              style={{ alignItems: "center", marginRight: "20px" }}
            >
              <img
                src="https://placecats.com/60/60"
                alt="Tesla Logo"
                style={{ width: "50px", height: "50px", borderRadius: "5px" }}
              />
              <div style={{ marginLeft: "10px" }}>
                <p
                  className="m-0"
                  style={{ fontWeight: "bold", fontSize: "14px" }}
                >
                  Tesla
                </p>
                <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                  12.177.275 follower
                </p>
                <button
                  style={{
                    border: "1px solid black",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    padding: "5px 15px",
                    fontSize: "12px",
                    marginTop: "5px",
                  }}
                >
                  + Segui
                </button>
              </div>
            </div>

            <div className="d-flex" style={{ alignItems: "center" }}>
              <img
                src="https://placecats.com/60/60"
                alt="SpaceX Logo"
                style={{ width: "50px", height: "50px", borderRadius: "5px" }}
              />
              <div style={{ marginLeft: "10px" }}>
                <p
                  className="m-0"
                  style={{ fontWeight: "bold", fontSize: "14px" }}
                >
                  SpaceX
                </p>
                <p className="m-0" style={{ fontSize: "12px", color: "gray" }}>
                  3.342.579 follower
                </p>
                <button
                  style={{
                    border: "1px solid black",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    padding: "5px 15px",
                    fontSize: "12px",
                    marginTop: "5px",
                  }}
                >
                  + Segui
                </button>
              </div>
            </div>
          </div>

          <p
            className="m-0"
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#181818",
              textAlign: "center",
              padding: "10px 0",
              borderRadius: "10px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Mostra tutte le aziende →
          </p>
        </div>
        <hr style={{ border: "1px solid #e5e5e5", margin: "15px 0" }} />
      </div>
    </>
  );
}

export default SecondCentralSection;
