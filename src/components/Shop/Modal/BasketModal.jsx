import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faBicycle } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ShopContext from "../../../context/ShopContext";
import BasketCard from "./BasketCard";

import { useNavigate } from "react-router-dom";

const BasketModal = () => {
  const bskCtx = useContext(ShopContext);

  const navigate = useNavigate();


  return (
    <div>


      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Your Shoping Basket
                <FontAwesomeIcon
                  className="ml-2"
                  icon={faBasketShopping}
                  color="#f4623a"
                />
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
              </button>
            </div>
            <div className="modal-body">
              <section
                className="h-100 h-custom"
                style={{ style: "background-color: #eee" }}
              >
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col">
                    <div className="card">
                      <div className="card-body p-4">
                        <div className="row">
                          <div className="col-lg-12">
                            <h5 className="mb-3"></h5>
                            <hr></hr>

                            <div className="d-flex justify-content-between align-items-center mb-4">
                              <div className="m-auto">
                                {bskCtx.items?.length === 0 ? (
                                  <div className="text-center">
                                    <h3 className="mb-3 text-center">
                                      <strong>Your basket is empty</strong>
                                    </h3>
                                  </div>
                                ) : (
                                  <div>
                                    <p className="mb-0">
                                      {" "}
                                      You have {bskCtx.items?.length} items in
                                      your basket
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>

                            {bskCtx.items?.map((data, index) => (
                              <BasketCard
                                key={index}
                                data={data}
                                index={index}
                              />
                            ))}

                          </div>
                          <div className="col-lg-12 col-sm-12 ">
                            <div className="text-right">
                              {bskCtx.items?.length === 0 ? (
                                <div></div>
                              ) : (
                                <>
                                  <h3>Total Cost</h3>
                                  <h2>
                                    <strong>
                                      <p> {bskCtx.totalAmount} </p>
                                      <p>CAD</p>
                                    </strong>
                                  </h2>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button                 type="button"
 
                data-dismiss="modal"
                aria-label="Close" onClick={
                () => {
                  navigate('../../shoping/checkout')
                }
              } className="btn btn-primary" >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketModal;
