/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
  Form,
  redirect,
  useActionData,
  useNavigation,
  useRouteError,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { getUser } from "../user/userSlice";
import GetUserPosition from "../user/GetUserPosition";
import { getCart } from "../cart/cartSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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

function CreateOrder() {
  const cart = useSelector(getCart);
  const username = useSelector(getUser);
  const { address, position, error } = useSelector((state) => state.user);
  console.log(position);

  const formErrors = useActionData();
  const navigation = useNavigation();
  const isSubmmitting = navigation.state === "submitting";

  return (
    <div className="flex justify-center">
      <div className="py-8 px-8 space-y-4 w-45">
        <h2 className="text-xl font-semibold text-center mb-8">
          Ready to order? Let's go!
        </h2>

        <Form method="POST" className="space-y-4">
          <div className="flex flex-col items-center gap-y-2 text-center sm:grid grid-cols-[8rem,1fr] sm:gap-4 sm:items-center">
            <label className="sm:basis-40">First Name</label>
            <div className="w-full flex justify-center">
              <input
                type="text"
                name="customer"
                defaultValue={username}
                required
                className="input w-80 sm:w-full "
              />
            </div>
          </div>

          <div className="flex flex-col text-center sm:grid grid-cols-[8rem,1fr] gap-x-4 gap-y-2 items-center">
            <label>Phone number</label>
            <div className="flex">
              <input
                type="tel"
                name="phone"
                required
                className="input self-center justify-self-center w-80 sm:w-full"
              />
            </div>

            {formErrors?.phone && (
              <div className="col-start-2 justify-self-center">
                <p className="text-sm rounded-full py-0.5 px-1.5 text-center text-red-100 bg-red-400">
                  {formErrors?.phone}
                </p>
              </div>
            )}
          </div>

          <div className="relative flex flex-col gap-y-2 text-center sm:grid grid-cols-[8rem,1fr] sm:gap-4 items-center">
            <label>Address</label>
            <div className="flex">
              <input
                type="text"
                name="address"
                defaultValue={address}
                required
                className="input w-80 sm:w-full "
              />
            </div>
            {error && (
              <div className="col-start-2 justify-self-center">
                <p className="text-sm rounded-full py-0.5 px-1.5 text-center text-red-100 bg-red-400">
                  {error}
                </p>
              </div>
            )}
            {!address && (
              <div className="block sm:absolute sm:top-0 sm:right-0 md:-top-1 ">
                <GetUserPosition />
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <input type="checkbox" name="priority" id="priority" />
            <label htmlFor="priority">
              Want to yo give your order priority?
            </label>
          </div>

          <div>
            <Button type="primary" disabled={isSubmmitting}>
              Order Now
            </Button>
          </div>

          <input name="cart" hidden defaultValue={JSON.stringify(cart)} />
          <input
            name="location"
            type="hidden"
            value={JSON.stringify(position)}
          />
        </Form>
      </div>
    </div>
  );
}

export default CreateOrder;

export async function action({ request }) {
  const formData = await request.formData();
  const form = Object.fromEntries(formData);
  console.log(form);

  const data = {
    ...form,
    cart: JSON.parse(form.cart),
    location: JSON.parse(form.location),
    priority: form.priority === "on",
  };

  console.log(data);
  if (!data) return;

  const errors = {};

  if (!isValidPhone(data.phone)) errors.phone = "The phone number is wrong";
  console.log(errors);

  if (Object.entries(errors).length > 0) return errors;

  const newOrder = await createOrder(data);
  console.log(newOrder);

  return redirect(`/order/${newOrder.id}`);
}
