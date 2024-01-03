import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {
      state.cart.push(action.payload);
    },
    removeCartItem(state, action) {
      state.cart = state.cart.filter(
        (items) => items.pizzaId !== action.payload,
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      console.log(item);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      if (item.quantity === 0)
        state.cart.dispatch(removeCartItem(action.payload));
      item.totalPrice = item.unitPrice * item.quantity;
    },
    clearCartItems(state) {
      state.cart = [];
    },
  },
});

export const getTotalPrice = (state) =>
  state.reduce((acc, cur) => (acc += cur.unitPrice * cur.quantity), 0);
export const getTotalQuantity = (state) =>
  state.reduce((acc, cur) => (acc += cur.quantity), 0);
export const getCart = (state) => state.cart.cart;
export const getQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export default cartSlice.reducer;
export const {
  addCartItem,
  removeCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCartItems,
} = cartSlice.actions;
