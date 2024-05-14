import { configureStore } from "@reduxjs/toolkit";

import productSlice from "@/features/products/productSlice";
import authSlice from "@/features/auth/authSlice";
import projectSlice from "@/features/projects/projectSlice";
import gallerySlice from "@/features/gallery/gallerySlice";
import ordersSlice from "@/features/orders/ordersSlice";
import cartSlice, { initializeFromDB } from "@/features/cart/cartSlice";
import wishlistSlice from "@/features/wishlist/wishlistSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    orders: ordersSlice,
    projects: projectSlice,
    gallery: gallerySlice,
    userAuth: authSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
  },
});

store.dispatch(initializeFromDB());

export default store;
