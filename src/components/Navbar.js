import React from 'react'
import '../components/Navbar.css';
import { FaHome } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
         <FaHome className="home-icon" />
        <h2 className="logo">FOSSEE</h2>

        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            className="search-bar"
            placeholder="   Search for workshops..."
          />
        </div>
      </div>

     
      <div className="navbar-right">
        <div className="nav-item">
        <button className="nav-btn">Workshops<IoIosArrowDown className="arrow-icon" /></button>
        </div>
        <button className="nav-btn">My Bookings</button>
        <button className="premium-btn">Explore Premium</button>
        <button className="login-btn">Login</button>
        
      </div>

    </div>
   

  )
}


