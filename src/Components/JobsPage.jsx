import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  useEffect(() => {
    fetchJobs();
  }, []);

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

  {
    /* Funzione bottoni avanti e indietro */
  }
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
    <div className="container mt-5">
      <h1>Lavori</h1>
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
      <div>
        {loading ? (
          <div className="text-center my-5">
            {/*Spinner */}
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
                  <span dangerouslySetInnerHTML={{ __html: job.description }} />
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
      </div>

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
    </div>
  );
}

export default JobsPage;
