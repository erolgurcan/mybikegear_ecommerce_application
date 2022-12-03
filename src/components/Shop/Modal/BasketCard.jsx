import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import ShopContext from "../../../context/ShopContext";

const BasketCard = ({ index, data }) => {
  const bskCtx = useContext(ShopContext);

  const [isRemove, setIsRemove] = useState(false);

  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-3">
              <img src={data.imgUrl} alt={data.name} className="card-img-top" />
            </div>
            <div className="col-lg-3">
              <h3>
                <strong>{data.maker}</strong>{" "}
              </h3>
              <h4> {data.model} </h4>
            </div>
            <div className="col-lg-3 text-center">
              {isRemove ? (
                <>
                  {" "}
                  <h5>Remove Item?</h5>
                  <button className="btn btn-secondary">No</button>
                  <button className="btn btn-secondary">Yes</button>
                </>
              ) : (
                <>
                  {" "}
                  <h5>
                    <strong>Quantity</strong>{" "}
                  </h5>
                  <h4> {data.amount} </h4>
                  <button
                    onClick={() => {
                      bskCtx.removeItem(data);
                    }}
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <button
                    onClick={() => {
                      bskCtx.addItem({
                        ...data,
                        amount: 1,
                      });
                    }}
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
                {Number(data.price) * Number(data.amount)} {"CAD"}{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
