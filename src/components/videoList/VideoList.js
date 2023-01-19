import React from "react";
const videos = [
  {
    id: Math.random(),
    url: "https://www.youtube.com/embed/-w3H6WUN1mU",
    titre: "Python for Beginners - Learn Python in 1 Hour",
  },
  {
    id: Math.random(),
    url: "https://www.youtube.com/embed/-w3H6WUN1mU",
    titre: "Python for Beginners - Learn Python in 1 Hour",
  },
  {
    id: Math.random(),
    url: "https://www.youtube.com/embed/-w3H6WUN1mU",
    titre: "Python for Beginners - Learn Python in 1 Hour",
  },
  {
    id: Math.random(),
    url: "https://www.youtube.com/embed/-w3H6WUN1mU",
    titre: "Python for Beginners - Learn Python in 1 Hour",
  },
  {
    id: Math.random(),
    url: "https://www.youtube.com/embed/-w3H6WUN1mU",
    titre: "Python for Beginners - Learn Python in 1 Hour",
  },
  {
    id: Math.random(),
    url: "https://www.youtube.com/embed/-w3H6WUN1mU",
    titre: "Python for Beginners - Learn Python in 1 Hour",
  },
  {
    id: Math.random(),
    url: "https://www.youtube.com/embed/-w3H6WUN1mU",
    titre: "Python for Beginners - Learn Python in 1 Hour",
  },
  {
    id: Math.random(),
    url: "https://www.youtube.com/embed/-w3H6WUN1mU",
    titre: "Python for Beginners - Learn Python in 1 Hour",
  },
  {
    id: Math.random(),
    url: "https://www.youtube.com/embed/-w3H6WUN1mU",
    titre: "Python for Beginners - Learn Python in 1 Hour",
  },
  {
    id: Math.random(),
    url: "https://www.youtube.com/embed/-w3H6WUN1mU",
    titre: "Python for Beginners - Learn Python in 1 Hour",
  },
  {
    id: Math.random(),
    url: "https://www.youtube.com/embed/-w3H6WUN1mU",
    titre: "Python for Beginners - Learn Python in 1 Hour",
  },
  {
    id: Math.random(),
    url: "https://www.youtube.com/embed/-w3H6WUN1mU",
    titre: "Python for Beginners - Learn Python in 1 Hour",
  },
  {
    id: Math.random(),
    url: "https://www.youtube.com/embed/-w3H6WUN1mU",
    titre: "Python for Beginners - Learn Python in 1 Hour",
  },
];
const VideoList = () => {
  return (
    <div>
      {videos.map((el) => (
        <div style={{ display: "flex", margin: "10px" }} key={el.id}>
          <iframe
            width="200px"
            height="auto"
            src={el.url}
            title="video1"
          ></iframe>
          <h5 style={{ fontSize: "12px", margin: "10px", width: "90px" }}>
            {el.titre}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
