import React from "react";
import { Button, ButtonGroup, NavDropdown } from "react-bootstrap";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { MdSort } from "react-icons/md";
const feedbacks = [
  {
    id: Math.random(),
    name: "rym",
    comment: "c'est très interessant",
  },
  {
    id: Math.random(),
    name: "adem",
    comment: "u made my day friend",
  },
  {
    id: Math.random(),
    name: "seif",
    comment: "wow",
  },
  {
    id: Math.random(),
    name: "khayri",
    comment: "thank you very much",
  },
  {
    id: Math.random(),
    name: "wael",
    comment: "We need a second part",
  },
  {
    id: Math.random(),
    name: "meriem",
    comment: "Merci bcq",
  },
];

const Comments = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",

          height: "23px",
          width: "716px",
          marginLeft: "30px",
        }}
      >
        <p style={{ marginRight: "15px" }}>450 commentaires</p>
        <div style={{ display: "flex" }}>
          <span>
            <MdSort />
          </span>
          <NavDropdown title="Trier par" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">updates</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          width: "942px",
          justifyContent: "space-evenly",
          height: "40px",
        }}
      >
        <img
          src="https://yt3.ggpht.com/yti/AJo0G0mlmY0jChv-qW55x7P5zxYNTvpAD-W_dtA1z-Tzvg=s88-c-k-c0x00ffffff-no-rj"
          alt=""
          width="40px"
          height="40px"
          style={{
            borderRadius: "100%",
          }}
        />
        <textarea
          style={{
            width: "883px",
            height: "25px",
            backgroundColor: "white",
            outline: "none",
            border: "none",
            borderStyle: "none",
            fontWeight: "bold",
            borderBottom: "1px solid ",
          }}
          placeholder="Enter your comment"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      {feedbacks.map((el) => (
        <div key={el.id} style={{ display: "flex", marginTop: "10px" }}>
          <img
            src="https://www.pngarts.com/files/5/Cartoon-Avatar-PNG-Image-Transparent.png"
            alt="logo"
            style={{ width: "80px", height: "40px", borderRadius: "100%" }}
          />
          <div style={{ marginLeft: "15px" }}>
            <h5 style={{ fontSize: "18px" }}>{el.name}</h5>
            <p>{el.comment}</p>
            <div style={{ display: "flex" }}>
              <Button variant="light">
                <AiOutlineLike />
              </Button>
              <p>23</p>
              <Button variant="light">
                <AiOutlineDislike />
              </Button>
              <Button variant="light">Répondre</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
