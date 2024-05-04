// shop-context.js
import React, { createContext, useState } from "react";
import { Cats } from "../data/cats";
import { Cats_Item } from "../data/cats-items";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  // Her iki dizi için de öğelerin id'lerini al
  const allProducts = [...Cats, ...Cats_Item];
  allProducts.forEach((product, index) => {
    cart[index + 1] = 0;
  });
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = getItemInfo(Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  const addToCart = (itemId) => {
     getItemInfo(itemId, Cats.concat(Cats_Item));
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  
  const removeFromCart = (itemId) => {
     getItemInfo(itemId, Cats.concat(Cats_Item));
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  
  const updateCartItemCount = (newAmount, itemId) => {
    getItemInfo(itemId, Cats.concat(Cats_Item));
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const getItemInfo = (itemId) => {
  let item = Cats.find((product) => product.id === itemId);
  if (!item) {
    item = Cats_Item.find((product) => product.id === itemId);
  }
  return item;
};
  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
