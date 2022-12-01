import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = ({ isAuth, setIsAuth }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="/">
            Home
          </Link>

          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shoping/all">
                  Shop
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>

              <li className="nav-item">
                {!isAuth ? (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                ) : (
                  <a
                    className="nav-link"
                    onClick={() => {
                      setIsAuth(false);
                    }}
                  >
                    Logout
                  </a>
                )}

                {/* <Link className = "nav-link" to = "/login">Login</Link>
                  <FontAwesomeIcon icon={faUser} /> */}
              </li>


              <li className="nav-item px-2">
                {isAuth && (
                  <span className="nav-link">
                    <FontAwesomeIcon icon={faUser} /> Erol Gurcan
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
