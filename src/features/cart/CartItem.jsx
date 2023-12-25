import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="p-2 flex items-center gap-2 justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
