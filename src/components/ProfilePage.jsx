import { Col, Container, Row } from "react-bootstrap";
import CentralSection from "./CentralSection";
import SideBar from "./SideBar";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../redux/action";
import { useEffect } from "react";

function ProfilePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfile());
  });

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
