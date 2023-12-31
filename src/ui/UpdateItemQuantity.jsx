import { useDispatch } from "react-redux";
import Button from "../features/order/Button";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cart/cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
