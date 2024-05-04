import React from "react";
import { Product } from "./product";
import "./shop.css";
import {PawPrint  } from "phosphor-react";
import { Cats } from "../../data/cats";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PisiPasajı <PawPrint size={32} /></h1>


      </div>

      <div className="products">
        {Cats.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};