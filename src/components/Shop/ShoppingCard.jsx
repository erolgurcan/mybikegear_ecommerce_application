import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { createArray } from "../../assets/helper/createArray";

const ShoppingCard = ({ data }) => {
  const {
    id,
    item,
    brand,
    category,
    subcategory,
    color,
    model,
    year,
    price,
    description,
    availability,
    image,
    size,
    rating
  } = data;

  console.log(image);

  return (
    <div>
      <div className="col-md-12" style={{ height: "300px", width: "300px" }}>
        <div className="card mb-4 product-wap rounded-0">
          <div className="card rounded-0">
            <img
              className="card-img rounded-0 img-fluid"
              src={require("../../assets/images/img" + image)}
            />
            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
              <ul className="list-unstyled"></ul>
            </div>
          </div>
          <div className="card-body">
            <p href="shop-single.html" className="h4 text-decoration-none">
              {item}
            </p>
            <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
              <li>{size.map((data, index) => data + " ")}</li>
              <li className="pt-2 mt-4">
                {createArray(5).map((data, index) => (
                  <FontAwesomeIcon                  color =  {
                    rating > index? "black": "white"
                 }  icon={faStar} />
                ))}
              </li>
            </ul>
            <p> In Stock:   {
                availability? "Yes": "No"}  </p>

            <p className="text-center mb-0">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
