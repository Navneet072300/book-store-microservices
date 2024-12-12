import { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

function CartTotal() {
  const { currency, getCartAmount, deliverCharges } = useContext(ShopContext);

  return (
    <div className="w-full">
      <Title title1={"Cart"} title2={"Total"} titleStyles={"h3"} />
      <div className="flexBetween pt-3">
        <h5 className="h5">SubTotal:</h5>
        <p className="h5">
          {currency}
          {getCartAmount()}
        </p>
      </div>
      <hr className="mx-auto h-[1px] w-full bg-gray-900/10 my-1" />
      <div className="flexBetween pt-3">
        <h5 className="h5">Shipping Fee:</h5>
        <p className="h5">
          {getCartAmount() === 0 ? "0.00" : `${currency}${deliverCharges}.00`}
        </p>
      </div>
      <hr className="mx-auto h-[1px] w-full bg-gray-900/10 my-1" />
      <div className="flexBetween pt-3">
        <h5 className="h5">Total:</h5>
        <p className="h5">
          {currency}
          {getCartAmount() === 0 ? "0.00" : getCartAmount() + deliverCharges}.00
        </p>
      </div>
      <hr className="mx-auto h-[1px] w-full bg-gray-900/10 my-1" />
    </div>
  );
}

export default CartTotal;
