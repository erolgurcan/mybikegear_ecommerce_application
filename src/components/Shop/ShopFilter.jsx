import React from "react";

const ShopFilter = ({ maker, setActiveProducts, activeProducts, products }) => {
  const filterByMaker = (maker) => {
    if (maker === "all") {
      setActiveProducts(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.maker == maker
      );

      setActiveProducts(filteredProducts);
    }
  };

  return (
    <div>
      <ul className="bg-light">
        <p className="h4 pb-4">Filter</p>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Brand
          </label>
          <select
            onChange={(e) => filterByMaker(e.target.value)}
            className="form-select"
            id="inputGroupSelect01"
          >
            <option defaultValue="all">Select Brand</option>

            {maker.map((maker) => (
              <option key={maker} value={maker}>
                {maker}
              </option>
            ))}
          </select>
        </div>
      </ul>
    </div>
  );
};

export default ShopFilter;
