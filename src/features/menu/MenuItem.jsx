import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="py-3 px-4 flex gap-2 items-center divide-y divide-stone-300">
      <img src={imageUrl} alt={name} className="h-24" />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
      <div className="border-none ml-auto">
        <Button type="primary">Add to cart</Button>
      </div>
    </li>
  );
}

export default MenuItem;
