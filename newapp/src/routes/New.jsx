import "./New.scss";
import video from "../Components/assets/pexels-joseph-redfield-10755266 (2160p).mp4";
import Navbar from "../Components/Navbar";
import PieChart from "../Components/PieChart";
import BarChart from "../Components/BarChart";
import LineChart from "../Components/LineChart";

function New() {
  return (
    <div className="landing">
      <Navbar />
      <video src={video} autoPlay loop muted />
      <div className="words">
        <h1>NASA DATA</h1>
        <p>Into the Unknown</p>
        <div className="point">Explore</div>
      </div>
      <div className="things">
        <BarChart />
        <div />
        <div className="things2">
          <LineChart />
        </div>
        <div className="things3">
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default New;
