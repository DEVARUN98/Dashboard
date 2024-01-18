import React from "react";
import IMAGES from "./Images";
import { Container, Nav, Navbar } from "react-bootstrap";

function Sidebar() {
  return (
    <>
      <div className=" sidebar ">
        <div className="brand">
          <div className="">
            <span className="">
              <img src={IMAGES.briefcase} alt="" className="briefcase ms-4" />
            </span>
          </div>
          <div>
            <span>
              <img src={IMAGES.statBoard} alt="" className=" ms-4" />
            </span>
          </div>
        </div>

        <div className="mt-3">
          <a
            href=""
            className="list-group-item list-group-item-action ms-4 text-white"
          >
            <img src={IMAGES.circled_menu} alt="" /> Dashboard
          </a>
          <a
            href=""
            className="list-group-item list-group-item-action my-2 ms-4 text-white"
          >
            <img src={IMAGES.support} alt="" /> Support
          </a>
          <a
            href=""
            className="list-group-item list-group-item-action my-2 ms-4 text-white"
          >
            <img src={IMAGES.puzzle} alt="" /> Plugins
          </a>
          <a
            href=""
            className="list-group-item list-group-item-action my-2 ms-4 text-white"
          >
            <img src={IMAGES.help} alt="" /> Help
          </a>
        </div>

        <div className="logout bg-white text-center my-1 p-2 logout">
          Logout
          <img src={IMAGES.shutdown} alt="" />
        </div>
      </div>

      <div className="navbarr">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">
              {" "}
              <img src={IMAGES.briefcase} alt="" className=" ms-4" />
            </Navbar.Brand>
            <img src={IMAGES.statBoard} alt="" className=" ms-4" />

            <Nav className="me-auto">
              <Nav.Link href="#home">
                {" "}
                <img src={IMAGES.circled_menu} alt="" /> Dashboard
              </Nav.Link>
              <Nav.Link href="#features">
                {" "}
                <img src={IMAGES.support} alt="" /> Support
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <img src={IMAGES.puzzle} alt="" /> Plugins
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <img src={IMAGES.help} alt="" /> Help
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <img src={IMAGES.shutdown} alt="" />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Sidebar;
