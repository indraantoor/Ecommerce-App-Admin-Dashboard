import React from "react";
import "./topbar.css";
import {
  NotificationsNone,
  Language,
  Settings,
  AccountCircle,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";
import { useHistory, Link } from "react-router-dom";

export default function Topbar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e) => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <span className="logo">Admin Dashboard</span>
          </Link>
        </div>
        <div className="topRight">
          <Link to="/settings" className="link">
            <div className="topbarIconContainer">
              <Settings />
            </div>
          </Link>
          <button onClick={(e) => handleClick(e)}>Logout</button>
          {/* <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          /> */}
          <Link to="/settings" className="link">
            <AccountCircle
              style={{ fontSize: "35px", marginTop: "5px" }}
              className="topAvatar"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
