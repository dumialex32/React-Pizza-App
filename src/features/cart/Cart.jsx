import Button from "../../ui/Button";
import CartItem from "./CartItem";

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
  const cart = fakeCart;

  return (
    <div className="px-4 py-3 space-y-4">
      <Button type="link" to="/menu">
        &larr; Back to menu
      </Button>
      <h2 className="text-xl font-semibold mt-8 mb-2">Your cart</h2>

      <ul className="divide-y  divide-stone-200 border-y">
        {fakeCart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <div>
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
