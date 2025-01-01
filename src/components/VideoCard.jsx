import React from "react";
import { Card } from "react-bootstrap";

function VideoCard() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://picsum.photos/200/300" />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h6>Video Caption</h6>
            <button className="btn btn-danger">
              <i class="fa-solid fa-trash-can"></i>{" "}
            </button>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default VideoCard;
