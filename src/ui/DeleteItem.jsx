import { useDispatch } from "react-redux";
import { removeCartItem } from "../features/cart/cartSlice";
import Button from "./Button";

function DeleteItem({ itemId }) {
  const dispatch = useDispatch();

  return (
    <Button type="secondary" onClick={() => dispatch(removeCartItem(itemId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
