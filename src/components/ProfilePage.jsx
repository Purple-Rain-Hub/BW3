import { Col, Container, Row } from "react-bootstrap";
import CentralSection from "./CentralSection";
import SideBar from "./SideBar";

function ProfilePage() {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-8">
            <CentralSection />
          </Col>
          <Col className="col-4">
            <SideBar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfilePage;
