import React from "react";
import { useState } from "react";
const NavBarDropDown = () => {
  const [componentsClicked, setComponentsClicked] = useState(false);

  return (
    <>
      <li className="pb-3">
        <a
          className="collapsed d-flex justify-content-between h3 text-decoration-none"
          href="#"
          onClick={() => {
            componentsClicked
              ? setComponentsClicked(false)
              : setComponentsClicked(true);
          }}
        >
          Components
          <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
        </a>
        <ul
          id="collapseTwo"
          className={
            componentsClicked
              ? "collapse list-unstyled pl-3"
              : "collapse show list-unstyled pl-3"
          }
        >
          <li>
            <a className="text-decoration-none" href="#">
              Sport
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="#">
              Luxury
            </a>
          </li>
        </ul>
      </li>
    </>
  );
};

export default NavBarDropDown;
