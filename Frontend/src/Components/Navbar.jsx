import React from 'react'
import { Link } from 'react-router-dom'
import useAppContext from '../AppContext'

const Navbar = () => {
  const {loggedIn, logout} = useAppContext();
  console.log(loggedIn)
  const showLoggedin = () => {
    if (loggedIn) {
      return (
        <ul>
          <li>
            {/*<Link to='/Logout' />*/}
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      );
    } else {
      <ul>
        <li>
          <Link to="/Signup">Signup</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    }
  }
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
          {/*<li>
            <Link to="/About">ABOUT</Link>
  </li>*/}
          <li>
            <Link to="/AddProduct">PRODUCT</Link>
          </li>
          <li>
            <Link to="/ProductListing">PRODUCTLIST</Link>
          </li>
          <li>
            <Link to="/ContactUs">CONTACT</Link>
          </li>
          <li>{showLoggedin()}</li>
            
          

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