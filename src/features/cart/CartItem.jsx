import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { getCart, getQuantityById, removeCartItem } from "./cartSlice";
import Button from "../../ui/Button";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  const cart = useSelector(getCart);

  return (
    <li className="p-2 flex items-center gap-2 justify-between">
      <div className="flex flex-col gap-2">
        <p>
          {quantity}&times; {name}
        </p>
        <div className="flex items-center gap-4">
          <Button type="round">-</Button>
          <p className="font-semibold">{formatCurrency(totalPrice)}</p>
          <Button type="round">+</Button>
        </div>
      </div>

      <Button
        type="secondary"
        onClick={() => dispatch(removeCartItem(pizzaId))}
      >
        Delete
      </Button>
    </li>
  );
}

export default CartItem;
