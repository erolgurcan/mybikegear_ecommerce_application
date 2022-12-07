import React from "react";

const AdminModal = ({ selectedOrder, setOrderState, orderState }) => {

  const onClickHandler = async (e) => {
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const paymentStatus = document.getElementById("paymentStatus").value;

    // Update order

    await fetch("http://localhost:5000/api/shop/auth/update" ,  {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
            id: selectedOrder._id,
            email: email,
            adress: address,
            paymentStatus: paymentStatus,
        }),
    }).then(
        (response) => response.json(),
        (error) => console.log(error)

    ).then(
        (data) => {
            console.log("data" , data);
            setOrderState();

        }
    );


  };
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
                Update Order{" "}
                {selectedOrder?.orderDate +
                  " " +
                  selectedOrder?.firstName +
                  " " +
                  selectedOrder?.lastName}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div
                  className="form-group
                    "
                >
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue = {selectedOrder?.email}
                    id="email"
                    aria-describedby="email"
                    placeholder={selectedOrder?.email}
                  />
                </div>
                <div
                  className="form-group
                    "
                >
                  <label for="address">Adress</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={selectedOrder?.address}
                    id="address"
                    aria-describedby="email"
                    placeholder={selectedOrder?.address}
                  />
                </div>
                <div
                  className="form-group
                    "
                >
                  <label for="address">Payment Status</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={selectedOrder?.paymentStatus}
                    id="paymentStatus"
                    aria-describedby="paymentStatus"
                    placeholder={selectedOrder?.paymentStatus}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button onClick = {onClickHandler} type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminModal;
