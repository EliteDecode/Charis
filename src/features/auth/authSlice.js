import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { createAsyncThunkWithHandler } from "../Api";

const user = JSON.parse(localStorage.getItem("charizUser"));

const initialState = {
  token: user ? user.token : null,
  user: user ? user.user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const data = await authService.login(user);
    return data;
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        (error.response.data.message || error.response.data.error)) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const register = createAsyncThunkWithHandler(
  "auth/register",
  async (user, thunkAPI) => {
    return await authService.register(user);
  }
);

export const update = createAsyncThunkWithHandler(
  "auth/update",
  async (user, thunkAPI) => {
    const token = thunkAPI.getState().userAuth.token;
    return await authService.update(user, token);
  }
);

export const sendMessage = createAsyncThunkWithHandler(
  "auth/sendMessage",
  async (message, thunkAPI) => {
    return await authService.sendMessage(message);
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  await authService.logout();
});

const authSlice = createSlice({
  name: "auth",
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
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        state.isSuccess = false;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        state.isSuccess = false;
      })
      .addCase(update.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload.user;
      })
      .addCase(update.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })
      .addCase(sendMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
