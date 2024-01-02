import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "../../ui/DeleteItem";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm: justify-between">
      <div className="flex gap-6">
        <p className="mb-1 sm:mb-0">
          {quantity}&times; {name}
        </p>
      </div>

      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} quantity={quantity} />
        <DeleteItem id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
