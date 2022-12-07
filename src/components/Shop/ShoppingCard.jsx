import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { createArray } from "../../assets/helper/createArray";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import ShopContext from "../../context/ShopContext";

const ShoppingCard = ({ data, setShopingBasket, shopingBasket, setDetail }) => {
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = React.useState();
  const [price, setPrice] = React.useState();
  const [toBasket, setToBasket] = React.useState([]);
  const [amount, setAmount] = React.useState(0);

  const shpCtx = useContext(ShopContext);

  const { category, id, maker, model, subcategory } = data;

  // const productData = axios
  //   .get(`https://api.99spokes.com/v1/bikes/${id}`, {
  //     params: {
  //       include: "images,prices",
  //     },
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
  //     },
  //   })
  //   .then((response) => {
  //     setImgUrl(response.data.images[0].url);
  //     setPrice(response.data.prices[0].amount);
  //   });


    const productData = axios
    .get(`http://localhost:5000/api/shop/${id}`, {
      params: {
        include: "images,prices",
      },
      headers: {
        accept: 'application/json',
        Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
      },
    })
    .then((response) => {
      console.log(response.data)
      setImgUrl(response.data[0].images[0].url);
      setPrice(response.data[0].prices[0].amount);
    });


  const onChangeHandler = (e) => {
    if (e.target.value > 0) {
      setAmount(e.target.value);

      const product = {
        amount: e.target.value,
        maker: maker,
        model: model,
        price: Number(price),
        id: id,
        imgUrl: imgUrl,
      };

      setToBasket(product);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(amount);
    if (amount > 0) {
      shpCtx.addItem({
        amount: amount,
        maker: maker,
        model: model,
        price: Number(price),
        id: id,
        imgUrl: imgUrl,
      });
    }
  };

  const onClickHandler = (e) => {
    e.preventDefault();

    if (amount > 0) {
      shpCtx.addItem({
        amount: document.getElementById("amount").value,
        maker: maker,
        model: model,
        price: Number(price),
        id: id,
        imgUrl: imgUrl,
      });
    }

    let tempArr = Array();

    tempArr = [...shopingBasket];

    if (toBasket.amount > 0) {
      tempArr.push(toBasket);
      setShopingBasket(tempArr);
    }
  };

  return (
    <div className="col-lg-4 mb-2">
      <div
        className="card mb-4 product-wap rounded"
        style={{
          minHeight: "80%",
        }}
      >
        <div
          className="card rounded-0"
          onClick={() => {
            setDetail(data);
            navigate("../product");
          }}
        >
          {imgUrl ? (
            <img
              className="zoom card-img rounded-0 img-fluid"
              src={imgUrl}
              alt="product"
            />
          ) : (
            <img
              className="card-img rounded-0 img-fluid"
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="product"
            />
          )}

          <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
            <ul className="list-unstyled"></ul>
          </div>
        </div>
        <div className="card-body text-center ">
          <p href="shop-single.html" className="h4 text-decoration-none">
            {maker}
          </p>
          <p href="shop-single.html" className="h5 text-decoration-none">
            {model}
          </p>
          <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
            <li className="pt-2 mt-4">
              {createArray(5).map((data, index) => (
                <FontAwesomeIcon
                  key={index}
                  color={4 > index ? "green" : "grey"}
                  icon={faStar}
                />
              ))}
            </li>
          </ul>

          <p className="text-center">
            <strong>Category: </strong>{" "}
            {String(category).charAt(0).toUpperCase() +
              String(category).slice(1) +
              "-" +
              String(subcategory).charAt(0).toUpperCase() +
              String(subcategory).slice(1)}{" "}
          </p>
          <p className="fs-5 ">
            {" "}
            <strong>{price} CAD</strong>
          </p>
          <form onSubmit={onSubmitHandler}>
            <div className="d-flex justify-content-center form-group">
              <input
                min="0"
                max="10"
                className="col-lg-3 input-sm"
                type="number"
                defaultValue={0}
                id="amount"
                onChange={onChangeHandler}
              ></input>
              <button
                className="btn btn-primary col-lg-3 m-2 "
                // onClick={onClickHandler}
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
