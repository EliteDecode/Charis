import { getAllItemsFromWishlist } from "@/utils/db";
import { createSlice } from "@reduxjs/toolkit";

const items = await getAllItemsFromWishlist();

const initialState = {
  items: items ? items : [], // Array to store wishlist items
  count: items ? items?.length : 0, // Initial product count in wishlist
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemWishlist(state, action) {
      state.items.push(action.payload); // Add item to wishlist
      state.count += 1; // Increase product count
    },
    removeItemWishlist(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id); // Remove item from wishlist
      state.count -= 1; // Decrease product count
    },
    clearWishlist(state) {
      state.items = []; // Clear wishlist items
      state.count = 0; // Reset product count
    },
    initializeFromDB(state, action) {
      // Check if items exist in DexieDB on initial load
      db.wishlist.toArray().then((items) => {
        if (items.length > 0) {
          state.items = items; // Update wishlist items
          state.count = items.length; // Update product count
        }
      });
    },
  },
});

export const {
  addItemWishlist,
  removeItemWishlist,
  clearWishlist,
  initializeFromDB,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
