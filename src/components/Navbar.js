import React from 'react'
import '../components/Navbar.css';


export default function Navbar() {
  return (
    <div className="navbar">

      {/* LEFT SECTION */}
      <div className="navbar-left">
        <h2 className="logo">FOSSEE</h2>

        <div className="search-container">
          <input
            className="search-bar"
            placeholder="Search workshops, topics..."
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="navbar-right">
        <button className="nav-btn">Workshops</button>
        <button className="nav-btn">My Bookings</button>
        <button className="premium-btn">Explore Premium</button>
        <button className="login-btn">Login</button>
      </div>

    </div>
   

  )
}


