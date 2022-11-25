import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { createArray } from "../../assets/helper/createArray";
import axios from "axios";

const ShoppingCard = ({ data }) => {



  const [imgUrl, setImgUrl] = React.useState();
  const [productInfo, setProductInfo] = React.useState([]);

console.log(productInfo)

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

  const productData =  axios.get(
    `https://api.99spokes.com/v1/bikes/${id}`,
    {
      params: {
        include: "images,prices"
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer `,
      },
    }
  ).then((response) => {
    // setImgUrl(response.data.images[0].url);
    setProductInfo(response.data);

  });





  return (

      <div className="col-lg-3 mb-2">
        <div className="card mb-4 product-wap rounded" style={
          {
            minHeight: "100%"
          }
        } >
          <div className="card rounded-0">

            {
              imgUrl ? <img

                className="card-img rounded-0 img-fluid"
                src = {productInfo[0].images.url}
                alt="product"


              /> : <img
                className="card-img rounded-0 img-fluid"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="product"
              />

            }

            {/* <img
              className="card-img rounded-0 img-fluid"
              src={require("../../assets/images/img" )}
            /> */}
            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
              <ul className="list-unstyled"></ul>
            </div>
          </div>
          <div className="card-body text-center ">
            <p href="shop-single.html" className="h4 text-decoration-none">
               { maker}
            </p>
            <p href="shop-single.html" className="h5 text-decoration-none">
               { model}
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
