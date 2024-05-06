import React from 'react';
import { Link } from 'react-router-dom';
 import useAppContext from '../AppContext';

const Navbar = () => {
   const { loggedIn, logout } = useAppContext();

   const showLoggedIn = () => {
     if (loggedIn) {
       return (
         <ul>
           <li>
             {/*<Link to='/Logout' />*/}
             <button onClick={logout}>Logout</button>
           </li>
         </ul>
       );
     } else{
      return <div >
        <ul >
        <Link className="nav-link" to="SignUp">
            Signup
          </Link>
          <Link className="nav-link" to="Login">
            Login
          </Link>

        </ul>

      </div>
    }
  }

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="logo" href="#">
          DIVSpark
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav" aria-current="page" href="Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav" href="ProductListing">
                ProductList
              </a>
            </li>
            <li className="nav-item">
              <a className="nav" href="Contactus">
                Contact
              </a>
            </li>
            
            {showLoggedIn()}
            <li className="nav-item dropdown">
              <a
                className="nav dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
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
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>

              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
