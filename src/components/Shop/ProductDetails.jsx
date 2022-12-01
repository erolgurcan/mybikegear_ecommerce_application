import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import ShoppingNavBar from "./ShoppingNavBar";
import axios from "axios";
const ProductDetails = ({ detail }) => {
  console.log(detail);
  const [imgSrc, setImgSrc] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [components, setComponents] = React.useState([]);

  const fethcData = async () => {
    const productData = axios
      .get(`https://api.99spokes.com/v1/bikes/${detail.id}`, {
        params: {
          include: "images,prices,components",
        },
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
        },
      })
      .then((response) => {
        console.log(response.data);
        setImgSrc(response.data.images[0].url);
        setPrice(
          response.data.prices[0].amount +
            " " +
            response.data.prices[0].currency
        );
        setComponents(response.data.components && response.data.components);
      });
  };

  React.useEffect(() => {
    fethcData();
  }, []);

  return (
    <>
    <ShoppingNavBar />
    <div className="m-auto text-center p-4">
      <div className="row mt-4 p-4 ">
        <div className=" d-flex justify-content-around">
          <div className="col-lg-4 col-sm-12">
            <img
              className="card-img rounded-0 img-fluid"
              src={imgSrc}
              alt="productDetail"
            />
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className="d-flex ">
              {" "}
              <h2 className="font-weight-semi-bold"> {detail.maker + " "} </h2>
              <h2 className="font-weight-semi-bold"> {" " + detail.model} </h2>
            </div>

            <h3 className="font-weight-semi-bold mb-4 text-left">{price}</h3>
            <div className="d-flex align-items-center mb-4 pt-2">
              <div
                className="input-group quantity mr-3"
                style={{ width: "130px" }}
              >
                <div className="input-group-btn">
                  <button className="btn btn-primary btn-minus">
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control bg-light text-center"
                  value="1"
                />
                <div className="input-group-btn">
                  <button className="btn btn-primary btn-plus">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
              <button className="btn btn-primary px-3">
                <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
              </button>
            </div>

      
          </div>
        </div>

        <div className="row px-xl-5 mt-4">
          <div className="col">
            <div className="nav nav-tabs justify-content-center border-secondary mb-4">
              <a
                className="nav-item nav-link active"
                data-toggle="tab"
                href="#tab-pane-1"
              >
                Description
              </a>
            </div>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-pane-1">
                <h4 className="mb-3">Product Description</h4>
                <p>Some Description Here</p>
                <table class="table table-striped table-responsive-sm mt-4">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Component</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Fork</th>
                      <td>{components?.fork?.display}</td>
                      <td>{components?.fork?.description}</td>
                    </tr>

                    <tr>
                      <th scope="row">Frame</th>
                      <td>{components?.frame?.material}</td>
                      <td>{components?.frame?.description}</td>
                    </tr>

                    <tr>
                      <th scope="row">Rear Derailleur</th>
                      <td>{components?.rearDerailleur?.display}</td>
                      <td>{components?.rearDerailleur?.description}</td>
                    </tr>

                    <tr>
                      <th scope="row">Front Derailleur</th>
                      <td>{components?.frontDerailleur?.display}</td>
                      <td>{components?.frontDerailleur?.description}</td>
                    </tr>

                    <tr>
                      <th scope="row">Crankset</th>
                      <td>{components?.crank?.display}</td>
                      <td>{components?.crank?.description}</td>
                    </tr>

                    <tr>
                      <th scope="row">Cassette</th>
                      <td>{components?.cassette?.display}</td>
                      <td>{components?.cassette?.description}</td>
                    </tr>

                    <tr>
                      <th scope="row">Chain</th>
                      <td>{components?.chain?.display}</td>
                      <td>{components?.chain?.description}</td>
                    </tr>

                    <tr>
                      <th scope="row">Brakes</th>
                      <td>{components?.brakes?.display}</td>
                      <td>{components?.brakes?.description}</td>
                    </tr>

                    <tr>
                      <th scope="row">Handlebar</th>
                      <td>{components?.handlebar?.display}</td>
                      <td>{components?.handlebar?.description}</td>
                    </tr>

                    <tr>
                      <th scope="row">Stem</th>

                      <td>{components?.stem?.display}</td>
                      <td>{components?.stem?.description}</td>
                    </tr>

                    <tr>
                      <th scope="row">Seatpost</th>
                      <td>{components?.seatpost?.display}</td>

                      <td>{components?.seatpost?.description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
