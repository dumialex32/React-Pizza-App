import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addCartItem, getQuantityById } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const test = useSelector(getQuantityById(id));
  console.log(test);

  function handleAddItem() {
    console.log("test");
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addCartItem(newItem));
  }

  return (
    <li
      className={`py-3 px-4 flex gap-3 items-center divide-y divide-stone-300 ${
        soldOut && "grayscale opacity-80"
      }`}
    >
      <img src={imageUrl} alt={name} className="h-24" />
      <div className="p-1 space-y-1">
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div className="font-semibold">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
      <div className="border-none ml-auto">
        {soldOut ? (
          ""
        ) : (
          <Button type="primary" onClick={handleAddItem}>
            Add to cart
          </Button>
        )}
      </div>
    </li>
  );
}

export default MenuItem;
