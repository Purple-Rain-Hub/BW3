/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { postComment } from "../redux/action";
import * as Icon from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { deleteComment } from "../redux/action";
import { putComment } from "../redux/action";

function SingleComment(props) {
  const postId = props.postId;
  const dispatch = useDispatch();

  const [writtenComment, setWrittenComment] = useState("");
  const [rateStars, setRateStars] = useState(0);
  const [modifyCommentId, setModifyCommentId] = useState(null);
  const [modifyingComment, setModifyingComment] = useState("");
  const [modifyingRateStars, setModifyingRateStars] = useState(0);

  const handlePublishComment = function () {
    if (rateStars > 0) {
      setWrittenComment("");
      setRateStars(0);
      dispatch(postComment(writtenComment, rateStars, postId));
    } else {
      alert("Valuta il post.");
    }
  };

  const handleDeleteComment = function (commentId) {
    dispatch(deleteComment(commentId));
  };

  const handleModifyComment = function () {
    if (modifyingRateStars > 0) {
      setModifyCommentId(null);
      setModifyingComment("");
      setModifyingRateStars(0);
      dispatch(
        putComment(
          modifyingComment,
          modifyingRateStars,
          postId,
          modifyCommentId
        )
      );
    } else {
      alert("Valuta il post.");
    }
  };

  const comments = useSelector((state) => {
    return state.comments;
  });

  const authorComment = useSelector((state) => {
    return state.authorComment || "samu.converso@gmail.com";
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
            <Form.Select
              className="my-3"
              value={rateStars}
              onChange={(e) => {
                setRateStars(parseInt(e.target.value));
              }}
            >
              <option value="0">Valuta il post</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form>
          <Button
            className="mb-3"
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
          <hr className="mt-0" />
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
                  <div className="d-flex justify-content-between">
                    <Card.Text className="fw-bold mb-0">
                      {comment.author}
                    </Card.Text>
                    {authorComment === comment.author && (
                      <div className="d-flex align-self-center gap-3">
                        {modifyCommentId === comment._id && (
                          <Icon.Check
                            onClick={(e) => {
                              e.preventDefault();
                              if (modifyingComment) {
                                handleModifyComment();
                              } else {
                                alert("Scrivi qualcosa.");
                              }
                            }}
                            className="align-self-center text-success"
                            style={{ cursor: "pointer", fontSize: "24px" }}
                          />
                        )}
                        <Icon.Pencil
                          onClick={(e) => {
                            e.preventDefault();
                            setModifyCommentId(
                              modifyCommentId === comment._id
                                ? null
                                : comment._id
                            );
                            setModifyingComment(comment.comment);
                            if (comment.rate) {
                              setModifyingRateStars(comment.rate);
                            }
                          }}
                          className="align-self-center text-warning"
                          style={{ cursor: "pointer", fontSize: "18px" }}
                        />
                        <Icon.Trash
                          onClick={(e) => {
                            e.preventDefault();
                            handleDeleteComment(comment._id);
                          }}
                          className="align-self-center text-danger"
                          style={{ cursor: "pointer", fontSize: "18px" }}
                        />
                      </div>
                    )}
                  </div>

                  <hr className="m-0" />
                  {comment.rate &&
                    modifyCommentId !== comment._id &&
                    [...Array(comment.rate)].map((_, i) => (
                      <Icon.StarFill key={i} className="text-info" />
                    ))}
                  {modifyCommentId !== comment._id && (
                    <Card.Text>{comment.comment}</Card.Text>
                  )}
                  {modifyCommentId === comment._id && comment.rate && (
                    <Form.Select
                      className="my-3"
                      value={modifyingRateStars}
                      onChange={(e) => {
                        setModifyingRateStars(parseInt(e.target.value));
                      }}
                    >
                      <option value="0">Valuta il post</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Select>
                  )}
                  {modifyCommentId === comment._id && (
                    <Form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (modifyingComment) {
                          handleModifyComment();
                        } else {
                          alert("Scrivi qualcosa.");
                        }
                      }}
                    >
                      <Form.Control
                        value={modifyingComment}
                        onChange={(e) => {
                          setModifyingComment(e.target.value);
                        }}
                        type="text"
                        placeholder="Commenta..."
                        style={{ borderRadius: "25px", fontWeight: "600" }}
                      />
                    </Form>
                  )}
                </div>
              );
            })}
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleComment;
