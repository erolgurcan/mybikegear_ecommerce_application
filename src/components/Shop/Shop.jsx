import React from "react";
import ShoppingCard from "./ShoppingCard";
import { useState, useEffect } from "react";
import NavBarDropDown from "./NavBarDropDown";
import { dummyShopData } from "../../assets/dummyData";
import { dummyCategoryData } from "../../assets/dummyData";
import ActiveCategory from "./ActiveCategory";
import { bikeCategoryData } from "../../assets/enumerateData/categoryData";
import axios from "axios";
import ShoppingNavBar from "./ShoppingNavBar";
import ShopFilter from "./ShopFilter";

const Shop = ({ isAuth, setDetail }) => {
  const [activeCategory, setActiveCataegory] = useState([]);
  const [bikeBrand, setBikeBrand] = useState("Trek");
  const [products, setProducts] = useState([]);
  const [activeProducts, setActiveProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [maker, setMaker] = useState([]);
  const [category, setCategory] = useState([]);
  const [shopingBasket, setShopingBasket] = useState([]);

  const bikeData = async () => {
    setIsLoading(true);
    const response = await axios
      .get("http://localhost:5000/api/shop/all", {})
      .then((response) => {
        console.log(response.data);
        setActiveProducts(response.data);
        setProducts(response.data);
        setIsLoading(false);
        let makerList = Array();
        let categoryList = Array();
        response.data.forEach((element) => {
          if (!categoryList.includes(element.category)) {
            categoryList.push(element.category);
          }

          if (!makerList.includes(element.maker)) {
            makerList.push(element.maker);
          }
        });

        setMaker(makerList);
        setCategory(categoryList);
      });

    setIsLoading(false);
  };

  const onSelectHandler = (e) => {
    // Order by price

    if (e.target.value === "A to Z") {
      let sortedProducts = activeProducts.sort((a, b) =>
        a.model > b.model ? 1 : -1
      );

      console.log(sortedProducts);

      setActiveProducts([...sortedProducts]);
    }

    if (e.target.value === "Z to A") {
      let sortedProducts = activeProducts.sort((a, b) =>
        a.model < b.model ? 1 : -1
      );

      console.log(sortedProducts);

      setActiveProducts([...sortedProducts]);
    }
  };

  useEffect(() => {
    bikeData();
  }, [bikeBrand]);

  return (
    <div>
      <ShoppingNavBar
        products={products}
        setActiveProducts={setActiveProducts}
      />
      <div className="container py-5">
        <div className="d-flex flex-wrap">
          <div className="col-lg-3 col-sm-12">
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
              {dummyCategoryData.map((category) => (
                <NavBarDropDown
                  key={category.id}
                  category={category.category}
                  subcategory={category.subcategory}
                  setActiveCataegory={setActiveCataegory}
                  setActiveProducts={setActiveProducts}
                  products={products}
                />
              ))}
            </ul>

            <ShopFilter
              maker={maker}
              setActiveProducts={setActiveProducts}
              activeProducts={activeProducts}
              products={products}
            />
          </div>

          <div className="col-lg-9 col-sm-12">
            <div className="row">
              <ActiveCategory activeCategory={activeCategory} />
              <div className="col-md-6 pb-4">
                <div className="d-flex">
                  <select className="form-control" onChange={onSelectHandler}>
                    <option>Featured</option>
                    <option>A to Z</option>
                    <option>Z to A</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row d-flex flew-wrap">
              {isLoading ? (
                <div
                  className="spinner-grow"
                  style={{
                    marginTop: "100px",
                    margin: "auto",
                  }}
                  role="status"
                ></div>
              ) : (
                activeProducts?.map((data, index) => (
                  <ShoppingCard
                    key={index}
                    data={data}
                    setIsLoading={setIsLoading}
                    setShopingBasket={setShopingBasket}
                    shopingBasket={shopingBasket}
                    setDetail= {setDetail}

                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
