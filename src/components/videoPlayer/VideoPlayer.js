import React from "react";
const VideoLink = {
  url: "https://www.youtube.com/embed/-w3H6WUN1mU",
  videoName:
    "ChatGPT Tutorial for Developers - 38 Ways to 10x Your Productivity",
  hachtag: "#New to Web Development? Start here!",
};

const VideoPlayer = () => {
  return (
    <div>
      <iframe
        width="942"
        height="530"
        title="video"
        src={VideoLink.url}
      ></iframe>
      <p style={{ color: "blue", fontSize: "12px" }}>{VideoLink.hachtag}</p>
      <h3 style={{ color: "black", fontSize: "30px" }}>
        {VideoLink.videoName}
      </h3>
    </div>
  );
};

export default VideoPlayer;
