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

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
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
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors?.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
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
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <button disabled={isSubmmitting}>Order now</button>
        </div>

        <input name="cart" hidden defaultValue={JSON.stringify(cart)}></input>
      </Form>
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
