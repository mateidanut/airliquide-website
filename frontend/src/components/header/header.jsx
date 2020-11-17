import { Link } from "gatsby"
import React from "react"
import logo from "../../images/airliquide2.png"

import "./header.css"

const Header = (props) => {
  console.log('PATHHHH', props.pathname);
  return (
    <header className="al-header">
      <div className="al-logo">
        <Link to="#logo">
          <img src={logo} alt="" width="auto" height="50px"></img>
        </Link>
      </div>
      <div className="header-nav-links">
        <Link to="/" className={(props.pathname === "/overview" || props.pathname === "/") ? "active" : ""}>Overview</Link>
        <Link to="/alerts" className={props.pathname === "/alerts" ? "active" : ""}>Alerts</Link>
        <Link to="/data" className={props.pathname === "/data" ? "active" : ""}>Data</Link>
      </div>
    </header>
  )
}

export default Header