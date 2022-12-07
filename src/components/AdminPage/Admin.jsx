import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash , faPen} from "@fortawesome/free-solid-svg-icons";
import AdminModal from "./AdminModal";

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderState, setOrderState] = useState(0);

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
  }, [orderState]);




  const deleteOrder = (id) => {
    fetch(`http://localhost:5000/api/shop/auth/delete?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  };

  return (
    <div className="bg-dark p-4" style={{ minHeight: "1200px" }}>
      <NavBar />

    <AdminModal  orderState={orderState} selectedOrder={selectedOrder}  setOrderState = {setOrderState} />
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
                <th scope="col" >Payment Status</th>
                <th scope="col">Delete</th>
                <th scope="col">Update</th>
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
                    <td>{order.paymentStatus}</td>
                    <td>
                      <button
                        onClick={() => {
                          deleteOrder(order._id);
                        }}
                        className="btn btn-danger"
                      >
                        <FontAwesomeIcon icon={faTrash}>
                          Delete{" "}
                        </FontAwesomeIcon>
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        <FontAwesomeIcon icon={faPen}/> 
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
