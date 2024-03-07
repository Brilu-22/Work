import "./sidebar.scss";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">LOGO</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <SpaceDashboardIcon className="Icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <PersonOutlineOutlinedIcon className="Icon" />
            <span>User</span>
          </li>
          <p className="title">TEAMS & PLAYERS</p>

          <Link to="/Chart" style={{ textDecoration: "none" }}>
            <li>
              <CompareArrowsOutlinedIcon className="Icon2" />
              <span>Chart</span>
            </li>
          </Link>

          <li>
            <StarBorderOutlinedIcon className="Icon2" />
            <span>Highlights</span>
          </li>
          <p className="title">OFFICIAL GAMES</p>

          <li>
            <DoubleArrowOutlinedIcon className="Icon3" />
            <span>Seasons</span>
          </li>
          <li>
            <FiberManualRecordOutlinedIcon className="Icon3" />
            <span>Standings</span>
          </li>
          <li>
            <SportsBasketballIcon className="Icon3" />
            <span>Games</span>
          </li>

          <p className="title">SERVICE</p>

          <li>
            <SettingsTwoToneIcon className="Icon4" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>

          <li>
            <AccountCircleRoundedIcon className="Icon4" />
            <span>Profile</span>
          </li>
          <li>
            <LockOutlinedIcon className="Icon4" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
