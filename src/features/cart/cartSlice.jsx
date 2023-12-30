import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   cart: [],
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = pizzaId
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.unitPrice / item.quantity;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const getCart = (state) => state.cart.cart;
export const getTotalPrice = (state) =>
  state.reduce((acc, cur) => (acc += cur.unitPrice), 0);
export const getTotalQuantity = (state) =>
  state.reduce((acc, cur) => (acc += cur.quantity), 0);
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
