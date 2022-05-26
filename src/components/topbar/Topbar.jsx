import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";
import { useHistory } from "react-router-dom";

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
          <span className="logo">IndraanAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <button onClick={(e) => handleClick(e)}>Logout</button>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
