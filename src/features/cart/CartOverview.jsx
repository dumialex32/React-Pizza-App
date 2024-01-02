import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";

function CartOverview() {
  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = useSelector(getTotalPrice);
  const totalQuantity = useSelector(getTotalQuantity);

  // const totalPrice = cart.reduce((acc, cur) => (acc += cur.unitPrice), 0);
  // const totalQuantity = cart.reduce((acc, cur) => (acc += cur.quantity), 0); // this is cart logic so it will be placed in the cartSlice.js

  return (
    <div className="bg-stone-800  text-stone-200 uppercase px-4 py-3 sm:px-6 sm:py-2 sm:text-sm md:text-base flex justify-between items-center">
      <p className="text-stone-300 fonst-semibold space-x-4 sm:space-x-6">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
