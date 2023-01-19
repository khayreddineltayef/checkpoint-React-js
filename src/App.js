import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Comments from "./components/comments/Comments";
import HeaderNav from "./components/headerNav/HeaderNav";

import ProfileDescription from "./components/profileDescription/ProfileDescription";

import VideoList from "./components/videoList/VideoList";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";

function App() {
  return (
    <div
      style={{ height: "56px", width: "1487px", padding: "0px 16px 0px 16px" }}
      className="App"
    >
      <HeaderNav />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "25px",
        }}
      >
        <div>
          <VideoPlayer />
          <ProfileDescription />
          <Comments />
        </div>
        <VideoList />
      </div>
    </div>
  );
}

export default App;
