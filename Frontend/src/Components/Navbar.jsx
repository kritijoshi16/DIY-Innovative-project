import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
 
    <div className="navbar ">
      <div className="icon">
        <h2 className="logo">DIYSpark</h2>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/Home">HOME</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/Contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/Login">LOGIN</Link>
          </li>
          <li>
            <Link to="/Signup">SIGNUP</Link>
          </li>

        </ul>
      </div>
      <div className="search">
        <input
          className="srch"
          type="search"
          name=""
          placeholder="Type To text"
        />
        <a href="#">
          {" "}
          <button className="btn">Search</button>
        </a>
      </div>
    </div>
   </>
  )
}

export default Navbar