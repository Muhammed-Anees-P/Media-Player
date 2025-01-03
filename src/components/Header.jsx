import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="bg-body-tertiary bg-dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link to={'/'} style={{textDecoration:"none"}}>
            <i class="fa-solid fa-video fa-bounce text-warning"></i>{" "}
            <span className="text-white">Video Player</span>
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
