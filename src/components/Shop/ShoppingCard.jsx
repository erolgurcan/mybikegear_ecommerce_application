import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { createArray } from "../../assets/helper/createArray";

const ShoppingCard = ({ data }) => {
  const {
    buildKind,
    category,
    family,
    gender,
    id,
    isEbike, isFrameset,
    maker,
    markerID,
    model,
    subcategory,
    url,
    year,
  
  } = data;

  console.log(data);

  return (

      <div className="col-md-12" style={{ height: "300px", width: "300px" }}>
        <div className="card mb-4 product-wap rounded-0">
          <div className="card rounded-0">
            {/* <img
              className="card-img rounded-0 img-fluid"
              src={require("../../assets/images/img" )}
            /> */}
            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
              <ul className="list-unstyled"></ul>
            </div>
          </div>
          <div className="card-body">
            <p href="shop-single.html" className="h4 text-decoration-none">
               { maker + " " +  model}
            </p>
            <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
              {/* <li>{size.map((data, index) => data + " ")}</li> */}
              <li className="pt-2 mt-4">
                {/* {createArray(5).map((data, index) => (
                  <FontAwesomeIcon                  color =  {
                    rating > index? "black": "white"
                 }  icon={faStar} />
                ))} */}
              </li>
            </ul>
            {/* <p> In Stock:   {
                availability? "Yes": "No"}  </p> */}

            <p className="text-center mb-0"><strong>Category: </strong> { 
            
              String(category).charAt(0).toUpperCase() + String(category).slice(1) + "-" + String(subcategory).charAt(0).toUpperCase() + String(subcategory).slice(1) 

            } </p>      
            <p className="text-center mb-0">${}</p>
          </div>
        </div>
      </div>

  );
};

export default ShoppingCard;
