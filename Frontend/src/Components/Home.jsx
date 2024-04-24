import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div><>
    <title>Webpage Design</title>
    <link rel="stylesheet" href="style.css" />
    <div className="main">
      <div className="navbar">
        <div className="icon">
          <h2 className="logo">DIYSpark</h2>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/Home">HOME</Link>
            </li>
            <li>
              <Link  to="/About">ABOUT</Link>
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
      <div className="content">
        <h1>
          Web Design &amp; <br />
          <span>Development</span> <br />
          Course
        </h1>
        <p className="par">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque
          expedita atque eveniet <br /> quis nesciunt. Quos nulla vero
          consequuntur, fugit nemo ad delectus
          <br /> a quae totam ipsa illum minus laudantium?
        </p>
        <button className="cn">
          <a href="#">JOIN US</a>
        </button>
        <div className="form">
          <h2>Login Here</h2>
          <input type="email" name="email" placeholder="Enter Email Here" />
          <input type="password" name="" placeholder="Enter Password Here" />
          <button className="btnn">
            <a href="#">Login</a>
          </button>
          <p className="link">
            Don't have an account
            <br />
            <a href="#">Sign up </a> here
          </p>
          <p className="liw">Log in with</p>
          <div className="icons">
            <a href="#">
              <ion-icon name="logo-facebook" />
            </a>
            <a href="#">
              <ion-icon name="logo-instagram" />
            </a>
            <a href="#">
              <ion-icon name="logo-twitter" />
            </a>
            <a href="#">
              <ion-icon name="logo-google" />
            </a>
            <a href="#">
              <ion-icon name="logo-skype" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </></div>
  )
}

export default Home
