import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../order/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { getUsername } from "../user/userSlice";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  // const username = useSelector((state) => state.user.username);
  // SELECTOR FUNCTION
  const username = useSelector(getUsername);

  // const cart = fakeCart;
  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  function handleClearCart() {
    if (cart.length === 0) return;
    dispatch(clearCart());
  }

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="divide-y divide-stone-200 border-b mt-3">
        {cart?.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        {cart.length > 0 ? (
          <>
            <Button type="primary" to="/order/new">
              Order pizzas
            </Button>
            <Button type="secondary" onClick={handleClearCart}>
              Clear cart
            </Button>
          </>
        ) : (
          <p>No items in your cart! Start ordering some pizzas.</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
