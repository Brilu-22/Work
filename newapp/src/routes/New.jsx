import "./New.scss";
import video from "../Components/assets/pexels-joseph-redfield-10755266 (2160p).mp4";
import Navbar from "../Components/Navbar";
import PieChart from "../Components/PieChart";
import BarChart from "../Components/BarChart";
import LineChart from "../Components/LineChart";

function New() {
  return (
    <div className="New">
      <div className="landing">
        <Navbar />
        <div className="overlay">
          <video src={video} autoPlay loop muted />
          <div className="things">
            <PieChart />
            <BarChart className="bar" />
            <LineChart className="Line" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
