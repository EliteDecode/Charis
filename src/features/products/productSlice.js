import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";
import { createAsyncThunkWithHandler } from "../Api";

const tags = JSON.parse(localStorage.getItem("chariz_product_tags"));
const categories = JSON.parse(
  localStorage.getItem("chariz_product_categories")
);
const products = JSON.parse(localStorage.getItem("chariz_products"));

const initialState = {
  products: products ? products : [],
  tags: tags ? tags : [],
  categories: categories ? categories : [],
  singleProduct: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  customMessage: "",
};

export const addProduct = createAsyncThunkWithHandler(
  "product/addProduct",
  async (product, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await productService.addProduct(token, product);
  }
);

export const getProducts = createAsyncThunkWithHandler(
  "product/getProducts",
  async (_, thunkAPI) => {
    return await productService.getProducts();
  }
);

export const getProductById = createAsyncThunkWithHandler(
  "product/getProductById",
  async (id, thunkAPI) => {
    return await productService.getProductById(id);
  }
);

export const getProductTags = createAsyncThunkWithHandler(
  "product/getProductTags",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await productService.getProductTags(token);
  }
);

export const getProductCategories = createAsyncThunkWithHandler(
  "product/getProductCategories",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await productService.getProductCategories(token);
  }
);

export const editProduct = createAsyncThunkWithHandler(
  "product/editProduct",
  async (product, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await productService.editProduct(token, product);
  }
);

export const deleteProduct = createAsyncThunkWithHandler(
  "product/deleteProduct",
  async (productId, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await productService.deleteProduct(token, productId);
  }
);

export const addProductTags = createAsyncThunkWithHandler(
  "product/addProductTags",
  async (tag, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await productService.addProductTags(token, tag);
  }
);

export const editProductTag = createAsyncThunkWithHandler(
  "product/editProductTags",
  async (tag, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await productService.editProductTags(token, tag);
  }
);

export const editProductCategory = createAsyncThunkWithHandler(
  "product/editProductCategory",
  async (tag, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await productService.editProductCategory(token, tag);
  }
);

export const deleteProductTag = createAsyncThunkWithHandler(
  "product/deleteProductTag",
  async (tagId, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await productService.deleteProductTags(token, tagId);
  }
);

export const addProductCategory = createAsyncThunkWithHandler(
  "product/addProductCategory",
  async (category, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await productService.addProductCategory(token, category);
  }
);

export const deleteProductCategory = createAsyncThunkWithHandler(
  "product/deleteProductCategory",
  async (categoryId, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    return await productService.deleteProductCategory(token, categoryId);
  }
);

const productSlice = createSlice({
  name: "product",
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
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Product added successfully";
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.customMessage = "Product not added";
        state.isSuccess = false;
      })
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleProduct = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })
      .addCase(editProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Product edited successfully";
        // Update product in state
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.customMessage = "Product not edited";
        state.isSuccess = false;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Product deleted successfully";
        // Remove product from state
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.customMessage = "Product not deleted";
        state.isSuccess = false;
      })
      .addCase(addProductTags.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProductTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Tags added successfully";
      })
      .addCase(addProductTags.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.customMessage = "Tags not added";
        state.isSuccess = false;
      })
      .addCase(editProductTag.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProductTag.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Tags editted successfully";
      })
      .addCase(editProductTag.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.customMessage = "Tags not editted";
        state.isSuccess = false;
      })
      .addCase(editProductCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProductCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Category editted successfully";
      })
      .addCase(editProductCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
        state.customMessage = "Category not editted";
      })
      .addCase(deleteProductTag.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProductTag.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Tags deleted successfully";
      })
      .addCase(deleteProductTag.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
        state.customMessage = "Tags not deleted";
      })
      .addCase(deleteProductCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProductCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Category deleted successfully";
      })
      .addCase(deleteProductCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
        state.customMessage = "Category not deleted";
      })
      .addCase(addProductCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProductCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Category added successfully";
      })
      .addCase(addProductCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })

      .addCase(getProductTags.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.tags = action.payload;
      })
      .addCase(getProductTags.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })
      .addCase(getProductCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.categories = action.payload;
      })
      .addCase(getProductCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
