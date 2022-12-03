import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ModalItemCard = ({ index, item, setShopingBasket, shopingBasket , onRemoveHandler, setReRender, reRender }) => {
 
  console.log(index);

  const [quantity, setQuantity] = useState();

  const [isRemove, setIsRemove] = useState(false);

  const onMinusHandler = () => {
    let temp = item;

    if (Number(temp.amount) == 1) {
      setIsRemove(true);
    }

    if (temp.amount > 1) {
      temp.amount = temp.amount - 1;

      let tempArr = Array();

      tempArr = shopingBasket;
      tempArr[index] = temp;

      setShopingBasket(tempArr);

      setQuantity(temp.amount);
      setReRender(reRender + 1);
    }
  };

  const onPlusHandler = () => {
    let temp = item;
    let tempArr = Array();
    temp.amount = Number(temp.amount) + 1;

    tempArr = shopingBasket;
    tempArr[index] = temp;

    setReRender(reRender + 1);
    setShopingBasket(tempArr);

    setQuantity(temp.amount);
  };

  const setParameters = () => {
    console.log("setParameters");
    setQuantity(item.amount);
  };

  useEffect(setParameters, []);

  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-3">
              <img src={item.imgUrl} alt={item.name} className="card-img-top" />
            </div>
            <div className="col-lg-3">
              <h3>
                <strong>{item.maker}</strong>{" "}
              </h3>
              <h4> {item.model} </h4>
            </div>
            <div className="col-lg-3 text-center">
              {isRemove ? (
                <>
                  {" "}
                  <h5>Remove Item?</h5>
                  <button className="btn btn-secondary" onClick = {
                    () => {
                      setIsRemove(false);
                    }
                  } >No</button>
                  <button className="btn btn-secondary" 
                  
                  onClick={() => {
                    onRemoveHandler(index);
                    setReRender(reRender+1);
                  }}

                  >Yes</button>
                </>
              ) : (
                <>
                  {" "}
                  <h5>
                    <strong>Quantity</strong>{" "}
                  </h5>
                  <h4> {quantity} </h4>
                  <button
                    onClick={onMinusHandler}
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <button
                    onClick={onPlusHandler}
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </>
              )}
            </div>
            <div className="col-lg-3 text-center">
              <h5>
                <strong>Amount</strong>{" "}
              </h5>
              <h4>
                {" "}
                {Number(item.price) * Number(item.amount)}{" "}
                {"CAD"}{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalItemCard;
