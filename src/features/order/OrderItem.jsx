function OrderItem({ pizza }) {
  const { pizzaId, name, quantity, unitPrice, totalPrice } = pizza;
  return (
    <li>
      <div>
        <p className="p-2">
          <span className="font-semibold">&times;{pizza.quantity} </span>
          {pizza.name}
        </p>
      </div>
    </li>
  );
}

export default OrderItem;
