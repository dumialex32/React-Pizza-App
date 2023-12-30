import { useDispatch } from "react-redux";
import Button from "../features/order/Button";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button onClick={() => dispatch()}>-</Button>
      <Button>+</Button>;
    </div>
  );
}

export default UpdateItemQuantity;
