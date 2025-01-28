/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import {
  PersonFillAdd,
  BookmarkFill,
  Plus,
  CardImage,
  ChevronCompactDown,
} from "react-bootstrap-icons";
import HomePagePremium from "../assets/HomePagePremium.svg";
import Calendar from "../assets/Calendar.svg";
//import send from "../assets/send.svg";
import infoHome from "../assets/infoHome.svg";
import SinglePost from "./SinglePost";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "../redux/action";
import { useSelector } from "react-redux";
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import { sendPost } from "../redux/action";

const HomePage = () => {
  const [writtenPost, setWrittenPost] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const posts = useSelector((state) => {
    return state.posts;
  });

  const handleSubmit = function (e) {
    e.preventDefault();
    dispatch(sendPost(writtenPost));
  };

  return (
    <Container fluid className="py-3" style={{ backgroundColor: "#F4F2EE" }}>
      <Container className="home-container">
        <Row>
          {/* Left Sidebar */}
          <Col md={3}>
            <Card className="mb-3">
              <Card.Body className="text-center position-relative">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  alt=""
                  style={{ width: "30%", borderRadius: "50%" }}
                />

                <Card.Title>Nome.Cognome</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Cosa fa nella vita
                </Card.Subtitle>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-start">
                    <span className="text-secondary">Collegamenti</span>
                    <br />
                    <strong>Espandi la tua rete</strong>
                  </div>
                  <PersonFillAdd />
                </div>
                <hr />

                <Card.Text className="text-secondary text-start ">
                  Fai crescere la tua carriera <br />
                  Prova Premium <br />
                  <img
                    src={HomePagePremium}
                    alt="Premium Icon"
                    width="24"
                    height="24"
                    className="me-2"
                  />
                  <strong className="text-dark">
                    Da non perdere: Premium per 0 EUR
                  </strong>
                  <br />
                </Card.Text>
                <hr />
                <Card.Text className="text-start">
                  <BookmarkFill className=" me-2" size={24} /> Elementi salvati
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Text href="#" className="text-primary">
                  Gruppi
                </Card.Text>
                <Card.Text className="text-primary d-flex justify-content-between align-items-center">
                  Eventi
                  <Plus size={24} className="text-dark" />
                </Card.Text>

                <hr />
                <Card.Link
                  href="#"
                  className="d-block text-center text-decoration-none text-secondary"
                >
                  <strong> Scopri di più </strong>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Main Content */}
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <img
                  className="mx-auto d-block"
                  src="src\assets\img\AAYQAgSuAAgAAQAAAAAAABlvNp5yzndgSdCsu3q6Pw22qA.png"
                  alt=""
                  style={{ width: "30%", height: "30%" }}
                />
                <h5 className="text-center">
                  Ciao Nome utente, in questo momento stai cercando un lavoro?
                </h5>
                <p className="text-secondary text-center">
                  Solo tu puoi vedere la tua risposta
                </p>
                <div>
                  <Button
                    variant="outline-primary"
                    className="me-2 jobButton"
                    style={{ width: "50%", borderRadius: "25px" }}
                  >
                    Sì
                  </Button>
                  <Button
                    variant="outline-primary"
                    style={{ width: "48%", borderRadius: "25px" }}
                  >
                    No, ma sono disponibile
                  </Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="d-flex">
                    <img
                      className="me-2"
                      src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                      alt=""
                      style={{ width: "10%", borderRadius: "50%" }}
                    />
                    <Form.Control
                      value={writtenPost}
                      onChange={(e) => {
                        setWrittenPost(e.target.value);
                      }}
                      type="text"
                      placeholder="Crea un post"
                      style={{ borderRadius: "25px", fontWeight: "600" }}
                    />
                  </Form.Group>
                </Form>
                <div className="d-flex justify-content-between mt-3">
                  <Button variant="light newPostButton">
                    <CardImage
                      className="me-2 text-primary"
                      style={{ fontSize: "20px" }}
                    />
                    Contenuti multimediali
                  </Button>
                  <Button variant="light newPostButton">
                    <img
                      src={Calendar}
                      alt="Premium Icon"
                      width="24"
                      height="24"
                      className="me-2"
                    />
                    Evento
                  </Button>
                  <Button variant="light newPostButton" onClick={handleSubmit}>
                    {/* <img
                      src={Article}
                      alt="Premium Icon"
                      width="24"
                      height="24"
                      className="me-2"
                    /> */}
                    <Icon.Check
                      className="text-success"
                      style={{ fontSize: "36px" }}
                    />
                    Pubblica articolo
                  </Button>
                </div>
              </Card.Body>
            </Card>

            {posts &&
              posts.slice(posts.length - 25, posts.length).map((post) => {
                return <SinglePost key={post._id} post={post} />;
              })}

            {/* <Card>
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/72px-LinkedIn_icon.svg.png"
                    roundedCircle
                    className="me-2"
                    width="48"
                    height="48"
                  />
                  <div>
                    <h6 className="mb-0">LinkedIn Notizie</h6>
                    <small className="text-muted">
                      992.394 follower <br /> Post sponsorizzato
                    </small>
                  </div>
                </div>
                <Card.Title>Prima del colloquio, rileggi il tuo CV</Card.Title>
                <Card.Text>
                  In un post HR manager Francesco Perillo riporta alcuni esempi
                  concreti di...
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button variant="light" className="commentButton">
                    <HandThumbsUp /> Consiglia
                  </Button>
                  <Button variant="light" className="commentButton">
                    <ChatDots /> Commenta
                  </Button>
                  <Button variant="light" className="commentButton">
                    <ArrowRepeat /> Diffondi il post
                  </Button>
                  <Button variant="light" className="commentButton">
                    <img
                      src={send}
                      alt="Premium Icon"
                      width="15"
                      height="15"
                      className="me-2"
                    />{" "}
                    Condividi
                  </Button>
                </div>
              </Card.Body>
            </Card> */}
          </Col>

          {/* Right Sidebar */}
          <Col md={3}>
            <Card className="mb-3">
              <Card.Body>
                <Container>
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    <span style={{ marginLeft: "-12px" }}>In primo piano</span>
                    <img
                      src={infoHome}
                      alt="Premium Icon"
                      width="15"
                      height="15"
                      className="ms-auto"
                    />
                  </Card.Title>
                </Container>

                <Card.Subtitle className="mb-2 text-muted">
                  a cura di LinkedIn Notizie
                </Card.Subtitle>
                <ul className="list-unstyled">
                  <li>
                    <strong> Come sta cambiando il lavoro... </strong> <br />
                    <small className="text-muted">
                      7 ore fa • 6.557 lettori
                    </small>
                  </li>
                  <li>
                    <strong>Torna il Frecciarossa Milano-Parigi </strong> <br />
                    <small className="text-muted">
                      7 ore fa • 6.557 lettori
                    </small>
                  </li>
                  <li>
                    <strong>Mps vuole acquisire Mediobanca </strong> <br />
                    <small className="text-muted">
                      7 ore fa • 6.557 lettori
                    </small>
                  </li>
                  <li>
                    <strong>Lavoro: l impatto del referendum amer... </strong>{" "}
                    <br />
                    <small className="text-muted">
                      7 ore fa • 6.557 lettori
                    </small>
                  </li>
                  <li>
                    <strong>Generali Natale: è il razzismo </strong> <br />
                    <small className="text-muted">
                      7 ore fa • 6.557 lettori
                    </small>
                  </li>
                </ul>
                <Card.Link
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  Vedi altro
                  <ChevronCompactDown
                    className="mx-2"
                    style={{ fontSize: "20px" }}
                  />
                </Card.Link>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>I giochi di oggi</Card.Title>
                <div className="d-flex justify-content-between mb-2">
                  <span>Tango</span>
                  <i className="bi bi-chevron-right"></i>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Queens</span>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomePage;
