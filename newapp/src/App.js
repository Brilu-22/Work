import "./App.css";
import video from "./Components/assets/pexels-joseph-redfield-10755266 (2160p).mp4";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="landing">
        <Navbar />
        <div className="overlay">
          <video src={video} autoPlay loop muted />
          <div className="content">
            <h1>WELCOME</h1>
            <p>Into the Unknown</p>
            <div className="button">Explore</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
