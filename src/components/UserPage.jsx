import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import SecondCentralSection from "./SecondCentralSection";

function UserPage() {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-8">
            <SecondCentralSection />
          </Col>
          <Col className="col-4">
            <SideBar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserPage;
