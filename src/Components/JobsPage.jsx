import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import BorsaLavoro from "../assets/BorsaLavoro.svg";
import { useState, useEffect } from "react";
import NewOfferJob from "../assets/NewOfferJob.svg";
import { BookmarkFill, ListUl } from "react-bootstrap-icons";
//  seLocation per accedere ai parametri dell'URL
import { useLocation } from "react-router-dom";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  // Usa useLocation per ottenere l'oggetto location corrente
  const location = useLocation();
  useEffect(() => {
    // Estrai i parametri di ricerca dall'URL
    const searchParams = new URLSearchParams(location.search);
    const initialSearch = searchParams.get("search");
    if (initialSearch) {
      // Se c'è un parametro di ricerca nell'URL, impostalo come valore di ricerca iniziale
      setSearch(initialSearch);
      fetchJobs(initialSearch);
    } else {
      // Altrimenti, carica tutti i lavori
      fetchJobs();
    }
  }, [location]); // Esegui l'effetto quando cambia la location

  const fetchJobs = async (query = "") => {
    setLoading(true);
    const url = query
      ? `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`
      : "https://strive-benchmark.herokuapp.com/api/jobs";
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setJobs(data.data);
      } else {
        console.error("Errore nel recupero dei dati");
      }
    } catch (error) {
      console.error("Errore durante il fetch:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchJobs(search);
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleNextPage = () => {
    if (indexOfLastJob < jobs.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <Container
      fluid
      className="py-3"
      style={{ backgroundColor: "#F4F2EE", overflow: "hidden" }}
    >
      <Container className="jobs-container">
        <Row>
          {/* Left Sidebar */}
          <Col md={3}>
            <Card>
              <Card.Body>
                <Button className="jobsButton1 d-flex align-items-center py-3 w-100">
                  <ListUl className="me-2" size={32} />
                  <strong>Preferenze</strong>
                </Button>
                <Button className="jobsButton1 d-flex align-items-center my-3 py-3 w-100">
                  <BookmarkFill className="me-2" size={32} />
                  <strong>Le mie offerte di lavoro</strong>
                </Button>
              </Card.Body>
            </Card>
            <div className="py-3">
              <Button
                variant="outline-primary"
                className="w-100 rounded-pill fs-6 newOfferButton"
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
          <Col md={8}>
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={BorsaLavoro}
                    alt="Borsa Lavoro Icon"
                    width="50"
                    height="50"
                    className="me-3 mx-center"
                  />
                </div>
                <h5 className="text-center">Cerca offerte di lavoro</h5>
                <form className="d-flex my-4" onSubmit={handleSearch}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cerca un lavoro"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button className="btn btn-primary ms-2" type="submit">
                    Cerca
                  </button>
                </form>
                {loading ? (
                  <div className="text-center my-5">
                    <Spinner animation="border" role="status"></Spinner>
                  </div>
                ) : currentJobs.length > 0 ? (
                  currentJobs.map((job) => (
                    <div key={job._id} className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">{job.title}</h5>
                        <p className="card-text">
                          <strong>Azienda:</strong> {job.company_name}
                        </p>
                        <p className="card-text">
                          <strong>Categoria:</strong> {job.category}
                        </p>
                        <p className="card-text">
                          <strong>Descrizione:</strong>{" "}
                          <span
                            dangerouslySetInnerHTML={{
                              __html: job.description,
                            }}
                          />
                        </p>
                        <a
                          href="https://i.makeagif.com/media/6-20-2016/OWLxRA.gif"
                          className="btn btn-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Scopri di più
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Nessun lavoro trovato.</p>
                )}
              </Card.Body>
            </Card>

            {/* bottoni avanti e indietro */}
            <div className="d-flex justify-content-center align-items-center my-4">
              <button
                className={`btn ${
                  currentPage === 1 ? "btn-secondary" : "btn-primary"
                } me-3`}
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Indietro
              </button>
              <span>Pagina {currentPage}</span>
              <button
                className="btn btn-primary ms-3"
                onClick={handleNextPage}
                disabled={indexOfLastJob >= jobs.length}
              >
                Avanti
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default JobsPage;
