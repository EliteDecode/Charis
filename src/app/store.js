import { configureStore } from "@reduxjs/toolkit";

import productSlice from "@/features/products/productSlice";
import authSlice from "@/features/auth/authSlice";
import projectSlice from "@/features/projects/projectSlice";
import gallerySlice from "@/features/gallery/gallerySlice";
import ordersSlice from "@/features/orders/ordersSlice";

import {
  fetchInitialWishlistItems,
  wishlistReducer,
} from "@/features/wishlist/wishlistSlice";
import { cartReducer, fetchInitialCartItems } from "@/features/cart/cartSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    orders: ordersSlice,
    projects: projectSlice,
    gallery: gallerySlice,
    userAuth: authSlice,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

store.dispatch(fetchInitialCartItems());
store.dispatch(fetchInitialWishlistItems());

export default store;
