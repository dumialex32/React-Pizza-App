import Button from "../../ui/Button";

function CartOverview() {
  return (
    <div className="bg-stone-800 text-stone-200 mt-auto px-4 py-3 flex justify-between">
      <p className="text-stone-300 space-x-2 font-semibold">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Button type="link" to="/cart">
        &larr; Open cart
      </Button>
    </div>
  );
}

export default CartOverview;
