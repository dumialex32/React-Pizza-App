import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { getUser } from "../user/userSlice";
import { clearCartItems, getCart } from "./cartSlice";
import CreateUser from "../user/CreateUser";

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
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const username = useSelector(getUser);

  if (!username)
    return (
      <div className="text-center font-semibold py-6 space-y-4">
        <p>Please go back and create a username</p>
        <Button type="link" to={"/"}>
          &larr; Go back
        </Button>
      </div>
    );

  return (
    <div className="px-4 py-3">
      <Button type="link" to="/menu">
        &larr; Back to menu
      </Button>
      {(cart.length > 0 && (
        <div className="space-y-8">
          <h2 className="text-xl font-semibold mt-8 mb-2">
            Your cart, {username}
          </h2>

          <ul className="divide-y  divide-stone-200 border-y">
            {cart?.map((item) => (
              <CartItem key={item.pizzaId} item={item} />
            ))}
          </ul>

          <div className="flex justify-between">
            <Button to="/order/new" type="primary">
              Order now
            </Button>
            <Button type="secondary" onClick={() => dispatch(clearCartItems())}>
              Clear cart
            </Button>
          </div>
        </div>
      )) || <p>Your cart is empty. Start ordering some 🍕 ! </p>}
    </div>
  );
}

export default Cart;
