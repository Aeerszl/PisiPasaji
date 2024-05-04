import React from "react";
import { Product } from "./shop/product";
import {PawPrint  } from "phosphor-react";
import "./shop/shop.css";
import { Cats_Item } from "../data/cats-items";
export const Material = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PisiPasajı <PawPrint size={32} /></h1>


      </div>

      <div className="products">
        {Cats_Item.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default Material;