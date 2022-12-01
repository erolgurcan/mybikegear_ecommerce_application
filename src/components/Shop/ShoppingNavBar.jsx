import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import BasketModal from "../Shop/Modal/BasketModal";
import userEvent from "@testing-library/user-event";


const ShoppingNavBar = ({ products, setActiveProducts }) => {
  const onClickHander = (e) => {
    e.preventDefault();

    const searchKey = document.getElementById("searchKey").value;

    let filteretProducts = Array();

    products.forEach((product) => {
      if (
        product.maker.toLowerCase().includes(searchKey.toLowerCase()) ||
        product.model.toLowerCase().includes(searchKey.toLowerCase()) ||
        product.category.toLowerCase().includes(searchKey.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(searchKey.toLowerCase()) ||
        product.model.toLowerCase().includes(searchKey.toLowerCase())
      ) {
        filteretProducts.push(product);
      }
    });
    setActiveProducts(filteretProducts);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="nav-item" to = "../../">        <img
                  class="img-fluid"
                  src={require("../../assets/images/img/logo.png")}
                  alt="..."
                  style={{"width": "50px"}}
                /></Link>


          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav"
          >
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto w-50">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shoping/all">
                    {" "}
                    Shop{" "}
                  </Link>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar align-self-center d-flex">
              <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputMobileSearch"
                    placeholder="Search ..."
                  />
                  <div className="input-group-text">
                    <i className="fa fa-fw fa-search"></i>
                  </div>
                </div>
              </div>
              <div className="nav-icon d-none d-lg-inline">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    id="searchKey"
                  />
                  <button className="btn btn-primary" onClick={onClickHander}>
                    Search
                  </button>
                </form>
              </div>
              <div className="nav-icon px-4 d-none d-lg-inline"></div>
              <button
                type="button"
                data-toggle="modal"
                data-target="#exampleModal"
                className="btn btn-primary position-relative"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  99+
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>

              <BasketModal />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ShoppingNavBar;
