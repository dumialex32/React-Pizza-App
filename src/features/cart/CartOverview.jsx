import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import { getCart, getTotalPrice, getTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { getUser } from "../user/userSlice";

function CartOverview() {
  const cart = useSelector(getCart);
  const username = useSelector(getUser);

  const totalPrice = getTotalPrice(cart);
  const totalQuantity = getTotalQuantity(cart);

  return (
    <div className="h-12 bg-stone-800 text-stone-200 mt-auto px-4 py-3 flex justify-between items-center">
      {username && (
        <>
          <p className="text-stone-300 space-x-4 font-semibold">
            <span>{totalQuantity} Pizzas</span>
            <span>{formatCurrency(totalPrice)}</span>
          </p>
          <Button type="link" to="/cart">
            &larr; Open cart
          </Button>
        </>
      )}
    </div>
  );
}

export default CartOverview;
