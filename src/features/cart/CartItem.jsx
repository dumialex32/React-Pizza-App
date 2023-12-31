import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import {
  decreaseItemQuantity,
  getCart,
  getQuantityById,
  increaseItemQuantity,
  removeCartItem,
} from "./cartSlice";
import Button from "../../ui/Button";
import DeleteItem from "../../ui/DeleteItem";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  console.log(totalPrice * quantity);

  return (
    <li className="p-2 flex items-center gap-2 justify-between">
      <div className="flex flex-col gap-2">
        <p>
          {quantity}&times; {name}
        </p>
        <div className="flex items-center gap-4">
          <UpdateItemQuantity
            onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
          >
            -
          </UpdateItemQuantity>
          <p className="font-semibold">{formatCurrency(totalPrice)}</p>
          <UpdateItemQuantity
            onClick={() => dispatch(increaseItemQuantity(pizzaId))}
          >
            +
          </UpdateItemQuantity>
        </div>
      </div>

      <DeleteItem itemId={pizzaId} />
    </li>
  );
}

export default CartItem;
