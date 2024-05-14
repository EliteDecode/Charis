import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ordersService from "./ordersService";
import { createAsyncThunkWithHandler } from "../Api";

const orders = JSON.parse(localStorage.getItem("chariz_user_orders"));

const initialState = {
  orders: orders ? orders : [],
  singleOrders: null,
  checkoutDetails: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getOrders = createAsyncThunkWithHandler(
  "orders/getOrders",
  async (userId, thunkAPI) => {
    const token = thunkAPI.getState().userAuth.token;
    return await ordersService.getOrders(token, userId);
  }
);

export const checkout = createAsyncThunkWithHandler(
  "orders/checkout",
  async (checkoutDetails, thunkAPI) => {
    const token = thunkAPI.getState().userAuth.token;
    return await ordersService.checkout(token, checkoutDetails);
  }
);

export const editOrder = createAsyncThunkWithHandler(
  "orders/editOrder",
  async (order, thunkAPI) => {
    const token = thunkAPI.getState().userAuth.token;
    return await ordersService.editOrder(token, order);
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })
      .addCase(checkout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.checkoutDetails = action.payload;
      })
      .addCase(checkout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })

      .addCase(editOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Gallery edited successfully";
        // Update project in state
      })
      .addCase(editOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.customMessage = "Gallery not edited";
        state.isSuccess = false;
      });
  },
});

export const { reset } = ordersSlice.actions;
export default ordersSlice.reducer;
