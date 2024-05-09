import React from 'react'
import useAppContext from '../AppContext'
import { Link } from 'react-router-dom';
import useProductContext from './context/ProductContext';

const Navbar = () => {

  const { loggedIn, logout } = useAppContext();
  const { getCartItemsCount } = useProductContext();

  const showLoggedIn = () => {
    if (loggedIn) {
      return (
        <div className='d-flex'>
          <button onClick={logout} className="btn btn-outline-danger me-3" type="submit">
            Logout
          </button>
        </div>
      )
    } else {
      return (
        <form className="d-flex" role="search">
          {/* <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      /> */}
          <Link to={"/Signup"} className="btn m-3" type="submit">
            Signup
          </Link>
          <Link to={"/Login"} className="btn m-3" type="submit">
            Login
          </Link>
        </form>
      )

    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand p-4" href="#">
            {<img src="https://t3.ftcdn.net/jpg/05/02/02/12/360_F_502021280_N2OFgvIWez0go7VN92TyBaOS97fZ4uGP.jpg" alt="" style={{ height: 70 }} />}

          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="" to={"/ProductListing"}>
                  Product
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link className="" to={"/Contactus"}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a className="" aria-disabled="true">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="">
               <span>{getCartItemsCount()}<i className="bi bi-cart-check-fill"></i></span>   
                </a>

              </li>
            </ul>
            {
              showLoggedIn()
            }
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar