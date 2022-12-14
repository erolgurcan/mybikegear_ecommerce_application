import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ActiveCategory = ({ activeCategory }) => {
  return (
    <div className="col-md-6">
      <ul className="list-inline shop-top-menu pb-3 pt-1">
        {activeCategory.length>0 && (
          <>
            <li className="list-inline-item">
              <a className="h3 text-dark text-decoration-none mr-3" href="#">
                All {<FontAwesomeIcon icon={faArrowRight} />}
              </a>
            </li>

            <li className="list-inline-item">
              <a className="h3 text-dark text-decoration-none mr-3" href="#">
                {activeCategory && activeCategory[0]}{" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="h3 text-dark text-decoration-none" href="#">
                {activeCategory && activeCategory[1]}
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default ActiveCategory;
