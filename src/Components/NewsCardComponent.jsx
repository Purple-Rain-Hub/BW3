import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { ChevronCompactDown, ChevronCompactUp } from "react-bootstrap-icons";

const NewsCardComponent = ({ infoHome }) => {
  const [news, setNews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [expanded, setExpanded] = useState(false);
  const API_KEY = "1121e117f9f647919c31cb873e8210c8";
  const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.articles) {
          setNews(data.articles);
        } else {
          console.error("Errore: 'articles' non trovato nella risposta API");
        }
      } catch (error) {
        console.error("Errore nel recupero delle notizie:", error);
      }
    };

    fetchNews();
  }, []);

  const toggleNews = () => {
    if (expanded) {
      setVisibleCount(5);
      setExpanded(false);
    } else {
      setVisibleCount((prevCount) => prevCount + 5);
      setExpanded(true);
    }
  };

  return (
    <Col xs={12} md={12} lg={12} className="mb-3">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={12}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center mb-3">
                <span>In primo piano</span>
                <img
                  src={infoHome}
                  alt="Premium Icon"
                  width="15"
                  height="15"
                  className="ms-auto"
                />
              </Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                a cura di LinkedinNews
              </Card.Subtitle>
              {news.length > 0 ? (
                news.slice(0, visibleCount).map((article, index) => (
                  <Card key={index} className="mb-3">
                    <Card.Body>
                      <Card.Title>{article.title}</Card.Title>
                      <Card.Text>
                        <small className="text-muted">
                          {new Date(article.publishedAt).toLocaleTimeString()} •{" "}
                          {article.source?.name || "Sconosciuto"}
                        </small>
                      </Card.Text>
                      {article.urlToImage && (
                        <Card.Img
                          variant="top"
                          src={article.urlToImage}
                          alt="News"
                          className="mb-2"
                          style={{ borderRadius: "5px" }}
                        />
                      )}
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <Card.Text>Caricamento notizie...</Card.Text>
              )}
              <Button
                variant="link"
                onClick={toggleNews}
                className="text-decoration-none text-dark fw-bold"
              >
                {expanded ? "Mostra meno" : "Vedi altro"}
                {expanded ? (
                  <ChevronCompactUp className="ms-2" />
                ) : (
                  <ChevronCompactDown className="ms-2" />
                )}
              </Button>
            </Card.Body>
          </Card>
          <Card className="mb-3">
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
    </Col>
  );
};

NewsCardComponent.propTypes = {
  infoHome: PropTypes.string.isRequired,
};

export default NewsCardComponent;
