import React from 'react'
import { Link } from 'react-router-dom'
// import logo from "../assets/logo.jpg"
import logo from "../../assets/logo.jpg"

const Sidebar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="#">
                        {<img
                            src={logo}
                            alt="navbar" style={{ height: 70 }} />}
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
                                <Link className="nav-link active" aria-current="page" to={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/ManageUser">
                                    ManageUser
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
                                <Link className="nav-link" to="/admin/manageproduct" aria-disabled="true">
                                    ManageProduct
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/AddProduct" aria-disabled="true">
                                    AddProduct
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                           
                            <Link classname="nav-link" to="/"><button className="btn btn-outline-danger me-3" type="submit">
                               Logout
                            </button></Link>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Sidebar