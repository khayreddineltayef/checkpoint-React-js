import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

const HeaderNav = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <div style={{ display: "flex", float: "left" }}>
            <Navbar.Brand href="#">
              <img
                width="100px"
                height="auto"
                src="https://logosmarcas.net/wp-content/uploads/2020/04/YouTube-Logo.png"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
          </div>

          {/* <Navbar.Collapse id="navbarScroll">  */}

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form className="d-flex">
              <Form.Control
                style={{ width: "572px", height: "47px" }}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                <BsSearch />
              </Button>
            </Form>
            <Nav.Link
              style={{
                backgroundColor: "gray",
                height: "40px",
                width: "40px",
                marginLeft: "10px",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "36px",
                borderRadius: "100%",
              }}
              href="#action1"
            >
              <FaMicrophone />
            </Nav.Link>
          </div>
          <div style={{ display: "flex" }}>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ display: "flex", maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action2">
                <AiOutlineVideoCameraAdd />
              </Nav.Link>
              <Nav.Link href="#action2">
                <IoMdNotificationsOutline />
              </Nav.Link>
              <NavDropdown title="Profil" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">updates</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* </Navbar.Collapse>   */}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
