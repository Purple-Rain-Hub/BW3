/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";

function SingleComment(props) {
  const postId = props.postId;
  //const dispatch = useDispatch();

  const [writtenComment, setWrittenComment] = useState("");

  const handlePublishComment = function () {};

  const comments = useSelector((state) => {
    return state.comments;
  });

  useEffect(() => {
    // roba
  }, []);

  return (
    <>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              if (writtenComment) {
                handlePublishComment();
              } else {
                alert("Scrivi qualcosa.");
              }
            }}
          >
            <Form.Group className="d-flex">
              <img
                className="me-2"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                alt=""
                style={{
                  width: "10%",
                  borderRadius: "50%",
                }}
              />
              <Form.Control
                value={writtenComment}
                onChange={(e) => {
                  setWrittenComment(e.target.value);
                }}
                type="text"
                placeholder="Commenta..."
                style={{ borderRadius: "25px", fontWeight: "600" }}
              />
            </Form.Group>
          </Form>
          <Button
            className="my-3"
            onClick={(e) => {
              e.preventDefault();
              if (writtenComment) {
                handlePublishComment();
              } else {
                alert("Scrivi qualcosa.");
              }
            }}
          >
            Pubblica commento
          </Button>
          <Card.Title>Commenti</Card.Title>
          {comments
            .filter((comment) => {
              return comment.elementId === postId;
            })
            .reverse()
            .slice(0, 25)
            .map((comment) => {
              return (
                <div
                  key={comment._id}
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    marginTop: "10px",
                    border: "1px solid gray",
                    borderRadius: "10px",
                    padding: "4px",
                  }}
                >
                  <Card.Text className="fw-bold mb-0">
                    {comment.author}
                  </Card.Text>
                  <hr className="mt-0" />
                  <Card.Text>{comment.comment}</Card.Text>
                </div>
              );
            })}
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleComment;
