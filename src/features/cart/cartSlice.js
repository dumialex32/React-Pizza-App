import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      name: "Mediterranean",
      pizzaId: 12,
      quantity: 2,
      unitPrice: 16,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {
      state.cart.push(action.payload);
    },
    removeCartItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {},
    decreaseItemQuantity(state, action) {},
    clearCartItems(state, action) {},
  },
});

export const getCart = (state) => state.cart.cart;

export default cartSlice.reducer;
export const {
  addCartItem,
  removeCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCartItems,
} = cartSlice.actions;
