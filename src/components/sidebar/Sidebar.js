import { React, useEffect, useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  faFutbol,
  faGlobeAfrica,
  faRunning,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

const getActive = (route, path) => {
  if (route === path) {
    return true
  }
  return false
}

export const Sidebar = () => {
  const [route, setRoute] = useState('')
  const location = useLocation();
  useEffect(() => {
    setRoute(location.pathname)
  }, [location]);
  return (
    <div className="side-bar min-vh-100">
      <ProSidebar>
        <Menu iconShape="square">
          <SidebarHeader className="sidebar-header">
            <img
              src="https://www.seekpng.com/png/full/4-47500_fifa-world-cup-png-fifa-18-legacy-edition.png"
              alt=""
            />
            <h4>Dashboard</h4>
          </SidebarHeader>
          <MenuItem id="menu-world" active={getActive(route, '/')} className="menu-item">
            <Link to="/">
              <FontAwesomeIcon icon={faGlobeAfrica} /> &nbsp;
              <h6 className="m-0">World</h6>
            </Link>
          </MenuItem>
          <MenuItem id="menu-league" active={getActive(route, '/league')} className="menu-item">
            <Link to="/league">
              <FontAwesomeIcon icon={faFutbol} /> &nbsp;
              <h6 className="m-0">league</h6>
            </Link>
          </MenuItem>
          <MenuItem id="menu-teams" active={getActive(route, '/teams')} className="menu-item">
            <Link to="/teams">
              <FontAwesomeIcon icon={faUsers} /> &nbsp;
              <h6 className="m-0">Teams</h6>
            </Link>
          </MenuItem>
          <MenuItem id="menu-players" active={getActive(route, '/players')} className="menu-item">
            <Link to="/players">
              <FontAwesomeIcon icon={faRunning} /> &nbsp;
              <h6 className="m-0">Players</h6>
            </Link>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
};
