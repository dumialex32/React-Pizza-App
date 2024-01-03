import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addCartItem, getQuantityById } from "../cart/cartSlice";
import DeleteItem from "../../ui/DeleteItem";
import { getUser } from "../user/userSlice";
import { useState } from "react";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();

  const quantityById = useSelector(getQuantityById(id));
  const isInCart = quantityById > 0;
  const username = useSelector(getUser);

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
        {!soldOut ? (
          <div className="flex gap-6">
            <p>{formatCurrency(unitPrice)}</p>
            {isInCart && (
              <UpdateItemQuantity itemId={id}>
                {quantityById}
              </UpdateItemQuantity>
            )}
          </div>
        ) : (
          <p>Sold out</p>
        )}
      </div>
      <div className="border-none ml-auto">
        {soldOut
          ? ""
          : username && (
              <>
                {!isInCart ? (
                  <Button type="primary" onClick={handleAddItem}>
                    Add to cart
                  </Button>
                ) : (
                  <DeleteItem itemId={id} />
                )}
              </>
            )}
      </div>
    </li>
  );
}

export default MenuItem;
