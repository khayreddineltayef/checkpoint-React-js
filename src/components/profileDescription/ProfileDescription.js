import React from "react";
import { Accordion, Button, ButtonGroup, NavDropdown } from "react-bootstrap";
import {
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineScissor,
} from "react-icons/ai";
import { BiShare } from "react-icons/bi";

const Channel = {
  Imageurl:
    "https://s3.amazonaws.com/startuplist.africa/startups/gomycode/gomycode-logo.png",
  ChannelName: "GoMyCode",
  SubNumber: "100k",
};

const ProfileDescription = () => {
  return (
    <div style={{ width: "942px" }}>
      <div
        style={{
          display: "flex",
          width: "942px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "250px",
            justifyContent: "space-between",
          }}
          id="container Profile"
        >
          <img
            width="40px"
            height="40px"
            style={{ borderRadius: "100%" }}
            src={Channel.Imageurl}
            alt="ProfilePic"
          ></img>
          <div>
            <h4 style={{ fontSize: "14px" }}>{Channel.ChannelName}</h4>
            <p style={{ fontSize: "12px" }}>{Channel.SubNumber}</p>
          </div>
          <Button style={{ height: "40px" }} variant="light">
            S'abonner
          </Button>
        </div>
        <div
          id="viewer-reaction"
          style={{
            display: "flex",
            width: "350px",
            height: "40px",
            justifyContent: "space-evenly",
          }}
        >
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">
              <AiOutlineLike /> 12k
            </Button>
            <Button variant="secondary">
              <AiOutlineDislike />
            </Button>
          </ButtonGroup>
          <Button variant="secondary">
            <BiShare />
            Partager
          </Button>{" "}
          <Button variant="secondary">
            <AiOutlineScissor />
            Extrait
          </Button>{" "}
          <NavDropdown
            style={{
              backgroundColor: "gray",
              borderRadius: "100% ",
              width: "36px",
              height: "36px",
              textAlign: "center",
            }}
            title="..."
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3">
              Créer une chaîne
            </NavDropdown.Item>
            <NavDropdown.Item href="#action4">YouTube Studio</NavDropdown.Item>
            <NavDropdown.Item href="#action5">
              Changer de compte
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3">
              Créer une chaîne
            </NavDropdown.Item>
            <NavDropdown.Item href="#action4">YouTube Studio</NavDropdown.Item>
            <NavDropdown.Item href="#action5">
              Changer de compte
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Description</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProfileDescription;
