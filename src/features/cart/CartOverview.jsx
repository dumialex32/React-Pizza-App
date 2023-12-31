import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import { getCart } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const cart = useSelector(getCart);

  const totalPrice = cart.reduce((acc, cur) => (acc += cur.unitPrice), 0);

  return (
    <div className="bg-stone-800 text-stone-200 mt-auto px-4 py-3 flex justify-between">
      <p className="text-stone-300 space-x-4 font-semibold">
        <span>{cart.length} Pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Button type="link" to="/cart">
        &larr; Open cart
      </Button>
    </div>
  );
}

export default CartOverview;
