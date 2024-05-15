import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllItemsFromCart } from "@/utils/db"; // Assuming this imports the function to fetch items from the cart

// Define an async thunk to fetch initial cart items
export const fetchInitialCartItems = createAsyncThunk(
  "cart/fetchInitialCartItems",
  async () => {
    try {
      const items = await getAllItemsFromCart();
      return items ? items : [];
    } catch (error) {
      console.error("Error fetching initial cart items:", error);
      return [];
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
    status: "idle", // Add a status field to track the async operation status
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      state.count += 1;
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.count -= 1;
    },
    clearCart(state) {
      state.items = [];
      state.count = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialCartItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.count = action.payload.length;
      state.status = "succeeded";
    });
    builder.addCase(fetchInitialCartItems.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchInitialCartItems.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
