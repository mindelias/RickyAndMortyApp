import React from 'react'
import { Link} from 'react-router-dom'




function SideBar() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-sm-5">
        <Link to="/">
          <h1 className="navbar-brand mt-2">RickyApp</h1>
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              Character
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/location" className="nav-link text-white">
              Location
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/episodes" className="nav-link text-white">
              Episodes
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
   
  export default SideBar;