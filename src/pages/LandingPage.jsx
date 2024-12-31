import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
      <Row className="d-flex justify-content-evenly align-items-center w-100">
        <Col></Col>
        <Col lg={5}>
          <h2>
            Welcome to <span className="text-warning">Media Player</span>
          </h2>
          <p style={{ textAlign: "justify" }} className="mt-3">
            Welcome to our React-powered media player! Enjoy a smooth, intuitive
            experience for streaming and managing your favorite music and
            videos. With advanced features like playlists, custom themes, and
            lightning-fast performance, we bring entertainment to your
            fingertips. Explore, play, and immerse yourself in a world of
            endless multimedia enjoyment!
          </p>
          <button onClick={()=>navigateByUrl('/home')} className="btn btn-warning text-white">
            Get Started{" "}
            <i class="fa-duotone fa-solid fa-right-to-bracket ms-2"></i>
          </button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img
            src="https://media1.tenor.com/m/lhlDEs5fNNEAAAAd/music-beat.gif"
            alt="image"
          />
        </Col>
        <Col></Col>
      </Row>
      <div className="container d-flex justify-content-center align-items-center w-100 flex-column">
        <h3>Features</h3>
        <div className="cards mt-5 mb-5 d-flex justify-content-center align-items-center justify-content-between w-100">
          <Card className="p-3 h-100" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.gifer.com/origin/ce/ce9b1b80a59bc4090dcded493ccba5f3_w200.webp"
            />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Effortlessly organize, edit, and enjoy your video library. With
                intuitive controls and powerful tools, managing your videos has
                never been easier. Create playlists, categorize content, and
                rediscover your favorites seamlessly.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="p-3 h-100" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.gifer.com/origin/91/9186eb0e475eeff5c6856e8ed43eb31e_w200.webp"
            />
            <Card.Body>
              <Card.Title>Categorised Videos</Card.Title>
              <Card.Text>
                Browse videos effortlessly with our categorized library. Explore
                content sorted by genres, themes, or preferences, making it easy
                to find exactly what you’re looking for. Enjoy organized
                entertainment!
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="p-3 h-100" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.gifer.com/origin/05/05bd96100762b05b616fb2a6e5c223b4_w200.webp"
            />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Effortlessly track all the videos you’ve watched with our
                comprehensive Watch History feature. Quickly locate your
                favorite moments, resume from where you paused, and relive
                memorable experiences.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container border border-2 border-secondary rounded w-100 mb-5 d-flex align-items-center justify-content-between">
        <Row>
          <Col lg={5}>
          <h2 className="text-warning mb-5">Simple Fast and Powerful</h2>
          <h6 className="mb-3"> <span className="fw-bolder fs-5">Lorem ipsum dolor:</span>  sit amet consectetur adipisicing elit. Cumque excepturi nam assumenda eius reprehenderit, </h6>

          <h6 className="mb-3"><span className="fw-bolder fs-5">Lorem ipsum dolor:</span>  sit amet consectetur adipisicing elit. Cumque excepturi nam assumenda eius reprehenderit,</h6>

          <h6 className="mb-3"><span className="fw-bolder fs-5">Lorem ipsum dolor:</span>  sit amet consectetur adipisicing elit. Cumque excepturi nam assumenda eius reprehenderit</h6>
          </Col>
          <Col ></Col>
          <Col lg={6}>
          <iframe className="mt-3" width="100%" height="400" src="https://www.youtube.com/embed/SqcY0GlETPk" title="React Tutorial for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default LandingPage;
