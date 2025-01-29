/* eslint-disable react/prop-types */
import { Card, Image, Button, Form } from "react-bootstrap";
import { HandThumbsUp, ChatDots } from "react-bootstrap-icons";
//import send from "../assets/send.svg";
import * as Icon from "react-bootstrap-icons";
import { myID } from "../redux/action";
import { useDispatch } from "react-redux";
import { deletePost } from "../redux/action";
import { modifyPost } from "../redux/action";
import { useState } from "react";
//commento

function SinglePost(props) {
  //const urlImg = "https://placecats.com/50/50";

  const dispatch = useDispatch();

  const handleDelete = function (postId) {
    dispatch(deletePost(postId));
  };

  const handleModify = function (postId, text) {
    dispatch(modifyPost(postId, text));
  };

  const [showModify, setShowModify] = useState(false);
  const [modifiedPost, setModifiedPost] = useState("");

  return (
    <Card className="mb-2">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <Image
            src={props.post.user.image}
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
        {!showModify && <Card.Text>{props.post.text}</Card.Text>}
        {props.post.image ? (
          <img src={props.post.image} />
        ) : (
          <img src="https://placecats.com/50/50" />
        )}
        {showModify && (
          <Form
            className="my-2"
            onSubmit={(e) => {
              e.preventDefault();
              setShowModify(false);
              handleModify(props.post._id, modifiedPost);
            }}
          >
            <Form.Group className="d-flex">
              {/* <img
                className="me-2"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                alt=""
                style={{ width: "10%", borderRadius: "50%" }}
              /> */}
              <Form.Control
                value={modifiedPost}
                onChange={(e) => {
                  setModifiedPost(e.target.value);
                }}
                type="text"
                placeholder="Modifica il post..."
                style={{ borderRadius: "25px", fontWeight: "600" }}
              />
            </Form.Group>
          </Form>
        )}
        <div className="d-flex justify-content-between">
          {!showModify ? (
            <>
              {" "}
              <Button variant="light" className="commentButton">
                <HandThumbsUp /> Consiglia
              </Button>
              <Button variant="light" className="commentButton">
                <ChatDots /> Commenta
              </Button>
            </>
          ) : (
            <Button
              onClick={() => {
                setShowModify(false);
                handleModify(props.post._id, modifiedPost);
              }}
              variant="light"
              className="commentButton text-success"
            >
              <Icon.Check style={{ fontSize: "28px" }} /> Aggiorna post
            </Button>
          )}
          {myID === props.post.user._id ? (
            <Button
              onClick={() => {
                setModifiedPost(props.post.text);
                setShowModify(!showModify);
              }}
              variant="light"
              className="commentButton text-warning fw-bold"
            >
              <Icon.Pencil className="text-warning" />{" "}
              {showModify ? "Annulla..." : "Modifica"}
            </Button>
          ) : (
            <Button variant="light" className="commentButton">
              <Icon.ArrowRepeat /> Diffondi post
            </Button>
          )}
          {myID === props.post.user._id ? (
            <Button
              onClick={() => {
                handleDelete(props.post._id);
              }}
              variant="light"
              className="commentButton text-danger fw-bold"
            >
              {/* <img
              src={send}
              alt="Premium Icon"
              width="15"
              height="15"
              className="me-2"
            /> */}
              <Icon.X className="text-danger" style={{ fontSize: "28px" }} />
              Elimina
            </Button>
          ) : (
            <Button variant="light" className="commentButton">
              {/* <img
              src={send}
              alt="Premium Icon"
              width="15"
              height="15"
              className="me-2"
            /> */}
              <Icon.Share />
              Condividi
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default SinglePost;
