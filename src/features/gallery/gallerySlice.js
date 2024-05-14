import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import galleryService from "./galleryService";
import { createAsyncThunkWithHandler } from "../Api";

const gallery = JSON.parse(localStorage.getItem("chariz_gallery"));

const initialState = {
  gallery: gallery ? gallery : [],
  singleGallery: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const addGallery = createAsyncThunkWithHandler(
  "gallery/addGallery",
  async (project, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await galleryService.addGallery(token, project);
  }
);

export const getGallery = createAsyncThunkWithHandler(
  "gallery/getGallery",
  async (_, thunkAPI) => {
    return await galleryService.getGallery();
  }
);

export const getGalleryById = createAsyncThunkWithHandler(
  "gallery/getGalleryById",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await galleryService.getGalleryById(token, id);
  }
);

export const editGallery = createAsyncThunkWithHandler(
  "gallery/editGallery",
  async (gallery, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await galleryService.editGallery(token, gallery);
  }
);
export const deleteGallery = createAsyncThunkWithHandler(
  "gallery/deleteGallery",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await galleryService.deleteGallery(token, id);
  }
);

const gallerySlice = createSlice({
  name: "gallery",
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
      .addCase(addGallery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addGallery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Gallery added successfully";
      })
      .addCase(addGallery.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.customMessage = "Gallery not added";
        state.isSuccess = false;
      })
      .addCase(getGallery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGallery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.gallery = action.payload;
      })
      .addCase(getGallery.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })
      .addCase(getGalleryById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGalleryById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleGallery = action.payload;
      })
      .addCase(getGalleryById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })
      .addCase(editGallery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editGallery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Gallery edited successfully";
        // Update project in state
      })
      .addCase(editGallery.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.customMessage = "Gallery not edited";
        state.isSuccess = false;
      })
      .addCase(deleteGallery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteGallery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Gallery deleted successfully";
        // Remove project from state
      })
      .addCase(deleteGallery.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.customMessage = "Gallery not deleted";
        state.isSuccess = false;
      });
  },
});

export const { reset } = gallerySlice.actions;
export default gallerySlice.reducer;
