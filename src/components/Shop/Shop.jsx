import React from "react";
import ShoppingCard from "./ShoppingCard";
import { useState } from "react";
import NavBarDropDown from "./NavBarDropDown";
import { dummyShopData } from "../../assets/dummyData";


const Shop = () => {


  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
              <NavBarDropDown />

              <NavBarDropDown />

              <NavBarDropDown />
            </ul>
          </div>

          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-6">
                <ul className="list-inline shop-top-menu pb-3 pt-1">
                  <li className="list-inline-item">
                    <a className="h3 text-dark text-decoration-none mr-3" href="#">
                      All
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="h3 text-dark text-decoration-none mr-3" href="#">
                      Men's
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="h3 text-dark text-decoration-none" href="#">
                      Women's
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 pb-4">
                <div className="d-flex">
                  <select className="form-control">
                    <option>Featured</option>
                    <option>A to Z</option>
                    <option>Item</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="d-flex ">

                {
                    dummyShopData.map(

                        (data,index) => (
                            <ShoppingCard key={index} data = {data} />
                        )
                    )
                }

            </div>

          </div>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default Shop;
