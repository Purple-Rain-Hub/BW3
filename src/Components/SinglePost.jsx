/* eslint-disable react/prop-types */
import { Card, Image, Button } from "react-bootstrap";
import { ArrowRepeat, HandThumbsUp, ChatDots } from "react-bootstrap-icons";
import send from "../assets/send.svg";

function SinglePost(props) {
  const urlImg = "https://placecats.com/50/50";
  return (
    <Card className="mt-2">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <Image
            src={props.post.image ? props.post.image : urlImg}
            roundedCircle
            className="me-2"
            width="48"
            height="48"
          />
          <div>
            <h6 className="mb-0">{`${props.post.user.name} ${props.post.user.surname}`}</h6>
            <small className="text-muted">
              992.394 follower <br /> Post sponsorizzato
            </small>
          </div>
        </div>
        <Card.Title>{props.post.user.title}</Card.Title>
        <Card.Text>{props.post.text}</Card.Text>
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
    </Card>
  );
}

export default SinglePost;
