import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  console.log(orders);

  useEffect(() => {
    fetch("http://localhost:5000/api/shop/auth/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  return (
    <div className="bg-dark p-4" style={{ minHeight: "1200px" }}>
      <NavBar />

      <div className="row">
        <div className="col-lg-8 m-auto text-center">
          <h3 className="mt-5 text-light ">Admin Panel</h3>
          <h4 className="mt-2 text-light"> Ordered Items </h4>
          <table className="table table-dark mt-4">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date </th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Mobile No</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">Zip</th>
                <th scope="col">Country</th>
                <th scope="col">Total</th>
                <th scope="">Items</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr
                    onClick={() => {
                      setSelectedOrder(order);
                    }}
                    key={index}
                  >
                    <th scope="row">{index + 1}</th>
                    <td>{new Date(order.orderDate).toUTCString()}</td>
                    <td>{order.firstName}</td>
                    <td>{order.lastName}</td>
                    <td>{order.mobileNo}</td>
                    <td>{order.email}</td>
                    <td>{order.address}</td>
                    <td>{order.city}</td>
                    <td>{order.zip}</td>
                    <td>{order.country}</td>
                    <td>{order.total} CAD</td>
                    <td>
                      {" "}
                      {order.orderedItems.reduce(
                        (acc, item) => acc + item.amount + "*" + item.id,
                        ""
                      )}{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          <h4 className="mt-2 text-light"> Pick Item </h4>

          <form className="mt-4 col-lg-10 m-auto text-left">
            <div className="mb-3">
              <label
                for="exampleInputEmail1 "
                className="form-label text-light"
              >
                Email address
              </label>
              <input
                className="form-control"
                id="exampleInputEmail1"
                placeholder={selectedOrder.email}
              />
              <label
                for="exampleInputEmail1 "
                className="form-label text-light"
              >
                Name
              </label>
              <input
                className="form-control"
                id="exampleInputEmail1"
                placeholder={selectedOrder.firstName}
              />
                            <label
                for="exampleInputEmail1 "
                className="form-label text-light"
              >
                Last Name
              </label>
              <input
                className="form-control"
                id="exampleInputEmail1"
                placeholder={selectedOrder.lastName}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
