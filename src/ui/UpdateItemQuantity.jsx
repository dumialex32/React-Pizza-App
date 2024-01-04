import { useDispatch } from "react-redux";
import Button from "./Button";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cart/cartSlice";

function UpdateItemQuantity({ children, itemId }) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(itemId))}
      >
        -
      </Button>
      <p className="font-semibold">{children}</p>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(itemId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
