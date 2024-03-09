import "./app.scss";
import video from "../Components/assets/pexels-joseph-redfield-10755266 (2160p).mp4";
import Navbar from "../Components/Navbar";

function New() {
  return (
    <div className="App">
      <div className="landing">
        <Navbar />
        <div className="overlay">
          <video src={video} autoPlay loop muted />
          <div className="content"></div>
        </div>
      </div>
    </div>
  );
}

export default New;
