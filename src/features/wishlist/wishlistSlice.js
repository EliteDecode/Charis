import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllItemsFromWishlist } from "@/utils/db"; // Assuming this imports the function to fetch items from the wishlist

// Define an async thunk to fetch initial wishlist items
export const fetchInitialWishlistItems = createAsyncThunk(
  "wishlist/fetchInitialWishlistItems",
  async () => {
    try {
      const items = await getAllItemsFromWishlist();
      return items ? items : [];
    } catch (error) {
      console.error("Error fetching initial wishlist items:", error);
      return [];
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    count: 0,
    status: "idle", // Add a status field to track the async operation status
  },
  reducers: {
    addItemWishlist(state, action) {
      state.items.push(action.payload);
      state.count += 1;
    },
    removeItemWishlist(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.count -= 1;
    },
    clearWishlist(state) {
      state.items = [];
      state.count = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialWishlistItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.count = action.payload.length;
      state.status = "succeeded";
    });
    builder.addCase(fetchInitialWishlistItems.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchInitialWishlistItems.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { addItemWishlist, removeItemWishlist, clearWishlist } =
  wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
