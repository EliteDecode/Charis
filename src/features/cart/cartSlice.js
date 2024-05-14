import db, { getAllItemsFromCart } from "@/utils/db";
import { createSlice } from "@reduxjs/toolkit";

const items = await getAllItemsFromCart();

const initialState = {
  items: items ? items : [], // Array to store cart items
  count: items ? items?.length : 0, // Initial product count in cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload); // Add item to cart
      state.count += 1; // Increase product count
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id); // Remove item from cart
      state.count -= 1; // Decrease product count
    },
    clearCart(state) {
      state.items = []; // Clear cart items
      state.count = 0; // Reset product count
    },
    initializeFromDB(state, action) {
      // Check if items exist in DexieDB on initial load
      db.cart.toArray().then((items) => {
        if (items.length > 0) {
          state.items = items; // Update cart items
          state.count = items.length; // Update product count
        }
      });
    },
  },
});

export const { addItem, removeItem, clearCart, initializeFromDB } =
  cartSlice.actions;
export default cartSlice.reducer;
