import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { removeFromFavorites } from "../redux/action";

const Favourites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <Container className="mt-4">
      <h2>Le tue offerte lavorative salvate</h2>
      {favorites.length > 0 ? (
        <Row>
          {favorites.map((job) => (
            <Col md={6} lg={4} key={job._id} className="mb-3">
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Title>{job.title}</Card.Title>
                      <Card.Text>
                        <strong>Azienda:</strong> {job.company_name}
                        <br />
                        <strong>Categoria:</strong> {job.category}
                      </Card.Text>
                    </div>
                  </div>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeFromFavorites(job._id))}
                  >
                    Rimuovi dai preferiti
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>Nessuna offerta preferita.</p>
      )}
    </Container>
  );
};

export default Favourites;
