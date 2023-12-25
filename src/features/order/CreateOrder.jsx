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
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  const formErrors = useActionData();
  const navigation = useNavigation();
  const isSubmmitting = navigation.state === "submitting";

  return (
    <div className="flex justify-center">
      <div className="py-8 px-8 space-y-4 w-42">
        <h2 className="text-xl font-semibold text-center mb-8">
          Ready to order? Let's go!
        </h2>

        <Form method="POST" className=" space-y-4">
          <div className="grid grid-cols-[7rem,1fr] gap-4 items-center">
            <label className="basis-40">First Name</label>
            <input type="text" name="customer" required className="input" />
          </div>

          <div className="grid grid-cols-[7rem,1fr] gap-4">
            <label>Phone number</label>
            <div>
              <input type="tel" name="phone" required className="input" />
            </div>
            {formErrors?.phone && (
              <p className="input text-center col-start-2 text-red-100 bg-red-500 ">
                {formErrors?.phone}
              </p>
            )}
          </div>

          <div className="grid grid-cols-[7rem,1fr] gap-4">
            <label>Address</label>
            <div>
              <input type="text" name="address" required className="input" />
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              name="priority"
              id="priority"
              // value={withPriority}
              // onChange={(e) => setWithPriority(e.target.checked)}
            />
            <label htmlFor="priority">
              Want to yo give your order priority?
            </label>
          </div>

          <div>
            <Button type="primary" disabled={isSubmmitting}>
              Order Now
            </Button>
          </div>

          <input name="cart" hidden defaultValue={JSON.stringify(cart)}></input>
        </Form>
      </div>
    </div>
  );
}

export default CreateOrder;

export async function action({ request }) {
  const formData = await request.formData();
  const form = Object.fromEntries(formData);

  const data = {
    ...form,
    cart: JSON.parse(form.cart),
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
