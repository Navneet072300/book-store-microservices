import { FaTrashAlt } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import Title from "../components/Title";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { books, navigate, cartItems, currency, updateQuantity } =
    useContext(ShopContext);

  return (
    <section className="max-padd-container">
      <div className="pt-28">
        <Title title1={"Cart"} title2={"List"} titleStyles={"h3"} />
        <div className="mt-6">
          {books.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id} className="bg-white p-2 mt-3 rounded-lg">
                  <div className="flex gap-x-3">
                    <div className="flex items-center gap-6">
                      <img
                        src={item.image}
                        alt="itemImage"
                        className="w-14 rounded"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <h5 className="h3 !my-0 line-clamp-1">{item.name}</h5>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="mb-1.5">{item.category}</p>
                          <div className="flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden bg-primary">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item._id,
                                  cartItems[item._id] - 1
                                )
                              }
                              className="p-1.5 bg-white rounded-full shadow-md"
                            >
                              <TiMinus className="text-xs" />
                            </button>
                            <p className="px-2">{cartItems[item._id]}</p>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item._id,
                                  cartItems[item._id] + 1
                                )
                              }
                              className="p-1.5 bg-white rounded-full shadow-md"
                            >
                              <FaPlus className="text-xs" />
                            </button>
                          </div>
                        </div>
                        <h4 className="h4 ">
                          {currency}
                          {item.price}
                        </h4>
                        <FaTrashAlt
                          onClick={() => updateQuantity(item._id, 0)}
                          className="cursor-pointer text-xl text-secondary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="flex mt-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <button
              onClick={() => navigate("/place-order")}
              className="btn-secondaryOne mt-7"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;