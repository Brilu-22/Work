import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <div className="h1">Standings</div>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <p className="title">Team Name:</p>
        <p className="Team">Celtics</p>
        <p className="desc">‘Different Here’</p>

        <div className="summary">
          <div className="items">
            <div className="itemTitle">Points</div>
            <div className="itemResult positive">
              <ArrowDropUpIcon fontSize="small" />
              <div className="resultAmount">121.3</div>
            </div>
          </div>

          <div className="items">
            <div className="itemTitle">Rebounds</div>
            <div className="itemResult positive">
              <ArrowDropUpIcon fontSize="small" />
              <div className="resultAmount">121.3</div>
            </div>
          </div>

          <div className="items">
            <div className="itemTitle">Assists</div>
            <div className="itemResult negative">
              <ArrowDropDownIcon fontSize="small" />
              <div className="resultAmount">121.3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
