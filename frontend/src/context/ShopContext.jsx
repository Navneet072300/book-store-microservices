/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../assets/data";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliverCharges = 5;
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId) => {
    const cartData = { ...cartItems };

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      try {
        if (cartItems[item] > 0) totalCount += cartItems[item];
      } catch (error) {
        console.log(error);
      }
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = books.find((book) => book._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const updateQuantity = async (itemId, quantity) => {
    const cartData = { ...cartItems };
    cartData[itemId] = quantity;
    setCartItems(cartData);
  };

  const contextValue = {
    books,
    currency,
    navigate,
    token,
    setToken,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    getCartAmount,
    updateQuantity,
    deliverCharges,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
