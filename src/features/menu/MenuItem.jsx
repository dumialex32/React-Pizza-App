/* eslint-disable no-constant-condition */
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import Button from "../order/Button";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../../ui/DeleteItem";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";
import { useState } from "react";

function MenuItem({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  console.log(quantity);

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  console.log(currentQuantity);
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity,
      unitPrice,
      totalPrice: unitPrice * quantity,
    };
    dispatch(addItem(newItem));
    console.log("test");
  }

  return (
    <li className="flex gap-4 py-2 items-center">
      <img
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""} `}
        src={imageUrl}
        alt={name}
      />
      <div className="flex flex-col flex-grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <>
              <div className="flex gap-6 items-centers justify-center">
                <p className="text-sm">{formatCurrency(unitPrice)}</p>
              </div>
            </>
          ) : (
            <p className="text-sm uppercase font-medium text-stone-500">
              Sold out
            </p>
          )}

          {isInCart ? (
            <DeleteItem id={id} />
          ) : (
            <>
              {!soldOut && (
                <Button
                  type="small"
                  disabled={soldOut}
                  onClick={handleAddToCart}
                >
                  {soldOut ? "Sold out" : "Add to cart"}
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
