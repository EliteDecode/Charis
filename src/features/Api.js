import { createAsyncThunk } from "@reduxjs/toolkit";

export const API_URL = "https://chariz.digicreeb.com/api";

const handleAsyncError = (error, thunkAPI) => {
  const message =
    (error.response &&
      error.response.data &&
      (error.response.data.message || error.response.data.error)) ||
    error.message ||
    error.toString();

  return thunkAPI.rejectWithValue(message);
};

export const createAsyncThunkWithHandler = (name, thunkFunction) =>
  createAsyncThunk(name, async (arg, thunkAPI) => {
    try {
      return await thunkFunction(arg, thunkAPI);
    } catch (error) {
      return handleAsyncError(error, thunkAPI);
    }
  });
