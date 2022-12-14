import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavBarDropDown = ({ category, subcategory, setActiveCataegory, products, setActiveProducts }) => {
  const [componentsClicked, setComponentsClicked] = useState(true);

  const filterProduct = (category) => {

    console.log(category);
    const filteredProducts = products.filter((product) => {
      return product.category === category;    });

    console.log(filteredProducts);

    setActiveProducts(filteredProducts);
  };


  return (
    <>
      <li className="pb-3">
        <a
          className="collapsed d-flex justify-content-between flex-row h3 text-decoration-none"
          href="#"
          onClick={() => {
            componentsClicked
              ? setComponentsClicked(false)
              : setComponentsClicked(true);
          }}
        >
          {category}
          <FontAwesomeIcon icon={faCircleChevronDown} />
        </a>

        <ul
          id="collapseTwo"
          className={
            componentsClicked
              ? "collapse list-unstyled pl-3"
              : "collapse show list-unstyled pl-3"
          }
        >
          {subcategory.map((sub) => (
            <li key={sub.id}>
              <a
                className="text-decoration-none"
                href="#"
                onClick={(e) => {

                  filterProduct(sub.code);
                  setActiveCataegory([category, sub.name]);


                }}
              >
                {sub.name}
              </a>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};

export default NavBarDropDown;
