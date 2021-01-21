import React from "react";
import { Link } from "react-router-dom";

export default function CardItem() {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link">
          <figure className="cards__item__pic-wrap">
            
          </figure>
          <div className="cards__item_info">
            <h5 className="cards__item__text"> </h5>
          </div>
        </Link>
      </li>
    </>
  );
}
