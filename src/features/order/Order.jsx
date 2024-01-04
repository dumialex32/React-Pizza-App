// Test ID: IIDSAT

import { useFetcher, useLoaderData, useNavigation } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import UpdatePriority from "./UpdatePriority";
import OrderItem from "./OrderItem";
import { useEffect } from "react";

const order = {
  id: "ABCDEF",
  customer: "Jonas",
  phone: "123456789",
  address: "Arroios, Lisbon , Portugal",
  priority: true,
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [
    {
      pizzaId: 7,
      name: "Napoli",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: "Diavola",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: "Romana",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: "-9.000,38.000",
  orderPrice: 95,
  priorityPrice: 19,
};

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  console.log(order);
  // const fetcher = useFetcher();

  // console.log(fetcher);

  // useEffect(() => {
  //   fetcher.load("/menu");
  // }, [fetcher]);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="w-full py-4 px-6 space-y-8">
      <div className="space-y-3 sm:flex gap-4 items-center justify-between">
        <h2 className="text-lg sm:text-xl ">
          Order <span className="font-semibold">{id}</span> status
        </h2>

        <div className="space-x-2">
          {priority && (
            <span className="font-semibold bg-red-400 py-1 px-2 rounded-full">
              Priority
            </span>
          )}
          <span className="font-semibold bg-green-400 py-1 px-2 rounded-full">
            Order {status}
          </span>
        </div>
      </div>

      <ul className="divide-y border-y">
        {cart.map((pizza) => (
          <OrderItem key={pizza.pizzaId} pizza={pizza} />
        ))}
      </ul>

      <div className="flex gap-4 items-center justify-between bg-stone-200 py-2 px-4">
        <p className="font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <div className="flex items-center gap-2 justify-between py-2 px-4  font-semibold bg-stone-200">
        <div>
          <p>Price pizza: {formatCurrency(orderPrice)}</p>
          {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        </div>
        {!priority && <UpdatePriority />}
      </div>
      <p className="bg-yellow-400 inline-block py-1 px-2 rounded-lg">
        To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
      </p>
    </div>
  );
}

export default Order;

export async function loader({ params }) {
  const id = params.orderId;
  if (!id) return;
  const order = await getOrder(id);

  return order;
}
