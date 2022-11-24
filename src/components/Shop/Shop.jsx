import React from "react";
import ShoppingCard from "./ShoppingCard";
import { useState, useEffect } from "react";
import NavBarDropDown from "./NavBarDropDown";
import { dummyShopData } from "../../assets/dummyData";
import { dummyCategoryData } from "../../assets/dummyData";
import ActiveCategory from "./ActiveCategory";
import { bikeCategoryData } from "../../assets/enumerateData/categoryData";
import axios from "axios";

const Shop = () => {

  const [activeCategory, setActiveCataegory] = useState([]);
  const [defaultBikeBrand, setDefaultBikeBrand] = useState("Trek");
  console.log(activeCategory);



  const bikeData = async () => {
    const response = await axios.get("https://api.99spokes.com/v1/bikes", {
      params: {
        q:  defaultBikeBrand + " " + activeCategory[2],
      },
      headers: {
        accept: 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50TmFtZSI6ImVyb2xndXJjYW4iLCJ2ZXJzaW9uIjoxLCJpYXQiOjE2NjkxNjgwODh9.q-p0alHlL3jvbvl_aW1mKf6CKMMNv0g1M5Iy8CFoKn0"
    }});
    console.log(response);
  };

useEffect(() => {
    bikeData();
  }, [activeCategory]);


  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
              {dummyCategoryData.map((category) => (
                <NavBarDropDown
                  key={category.id}
                  category={category.category}
                  subcategory={category.subcategory}
                  setActiveCataegory={setActiveCataegory}
                />
              ))}
            </ul>
          </div>

          <div className="col-lg-9">
            <div className="row">
                <ActiveCategory activeCategory = {activeCategory} />
              <div className="col-md-6 pb-4">
                <div className="d-flex">
                  <select className="form-control">
                    <option>Featured</option>
                    <option>A to Z</option>
                    <option>Item</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="d-flex ">
              {dummyShopData.map((data, index) => (
                <ShoppingCard key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
