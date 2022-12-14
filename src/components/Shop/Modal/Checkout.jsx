import React from "react";
import ShoppingNavBar from "../ShoppingNavBar";
import { useContext } from "react";
import ShopContext from "../../../context/ShopContext";
import axios from "axios";
import OrderConfirmationModal from "./OrderConfirmationModal";

const Checkout = () => {
  const bskCtx = useContext(ShopContext);

  const [isProcessing, setIsProcessing] = React.useState(false);
  const [isOrdered, setIsOrdered] = React.useState(false);

  const orderHandler = async () => {
    const order = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      address:
        document.getElementById("address1").value +
        " " +
        document.getElementById("address2").value,
      mobileNo: document.getElementById("mobileNo").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      country: document.getElementById("country").value,
      zip: document.getElementById("zip").value,
      orderedItems: bskCtx.items,
      total: bskCtx.totalAmount,
      orderData: new Date(),
      orderStatus: "Pending",
      paymentMethod: document.querySelector('input[name="payment"]:checked')
        .value,
      paymentStatus: "Pending",
      orderData: new Date(),
    };

    setIsProcessing(true);
    const ordered = await axios
      .post("http://localhost:5000/api/shop/add", order)
      .then((res) => {

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setInterval(() => {
      setIsProcessing(false);
      setIsOrdered(true);
    }, 3000);
  };

  return (
    <div>
      <ShoppingNavBar />

      <div className="container-fluid p-4">
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <div className="mb-4">
              <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label>First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="John"
                    id="firstName"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Doe"
                    id="lastName"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>E-mail</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="example@email.com"
                    id="email"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Mobile No</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="+123 456 789"
                    id="mobileNo"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Address Line 1</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="123 Street"
                    id="address1"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Address Line 2</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="123 Street"
                    id="address2"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Country</label>
                  <select id="country" className="custom-select">
                    <option selected>Canada</option>
                    <option>United States</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <label>City</label>
                  <input
                    className="form-control"
                    type="text"
                    id="city"
                    placeholder="New York"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>State</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="New York"
                    id="state"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>ZIP Code</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="123"
                    id="zip"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="newaccount"
                    />
                    <label className="custom-control-label" for="newaccount">
                      Create an account
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse mb-4" id="shipping-address">
              <h4 className="font-weight-semi-bold mb-4">Shipping Address</h4>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label>First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="John"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>E-mail</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="example@email.com"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Mobile No</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="+123 456 789"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Address Line 1</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="123 Street"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Address Line 2</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="123 Street"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Country</label>
                  <select className="custom-select">
                    <option selected>Canada</option>
                    <option>United States</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <label>City</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="New York"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>State</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="New York"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>ZIP Code</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-secondary mb-5">
              <div className="card-header bg-secondary border-0">
                <h4 className="font-weight-semi-bold m-0">Order Total</h4>
              </div>
              <div className="card-body">
                <h5 className="font-weight-medium mb-3">Products</h5>

                {bskCtx.items.map((item, index) => (
                  <div key={index} className="d-flex justify-content-between">
                    <p>{item.maker + " " + item.model} </p>
                    <p> {item.amount} </p>
                  </div>
                ))}

                <hr className="mt-0" />
                <div className="d-flex justify-content-between mb-3 pt-1">
                  <h6 className="font-weight-medium">Subtotal</h6>
                  <h6 className="font-weight-medium">
                    {" "}
                    {bskCtx.totalAmount} CAD{" "}
                  </h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">$50</h6>
                </div>
              </div>
              <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Total</h5>
                  <h5 className="font-weight-bold">
                    {" "}
                    {bskCtx.totalAmount + 50} CAD{" "}
                  </h5>
                </div>
              </div>
            </div>

            {isOrdered && (
              <div className="alert alert-success" role="alert">
                Your order has been placed successfully!
              </div>
            )}

            <div className="card border-secondary mb-5">
              <div className="card-header bg-secondary border-0">
                <h4 className="font-weight-semi-bold m-0">Payment</h4>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="payment"
                      id="paypal"
                    />
                    <label className="custom-control-label" for="paypal">
                      Paypal
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="payment"
                      id="directcheck"
                    />
                    <label className="custom-control-label" for="directcheck">
                      Direct Check
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="payment"
                      id="banktransfer"
                    />
                    <label className="custom-control-label" for="banktransfer">
                      Bank Transfer
                    </label>
                  </div>
                </div>
              </div>
              <div className="card-footer border-secondary bg-transparent text-center">
                -
                {!isProcessing ? (
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={orderHandler}
                    className="btn btn-lg btn-block btn-primary text-center font-weight-bold my-3 py-3"
                  >
                    Place Order
                  </button>
                ) : (
                  <>
                    <div
                      className="spinner-border text-center m-auto"
                      role="status"
                    ></div>
                    <span> Processing... </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
