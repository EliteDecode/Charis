import Dexie from "dexie";
const user = JSON.parse(localStorage.getItem("charizUser"));

const db = new Dexie("cartDB");

db.version(1).stores({
  cart: "++id,image, product, product_price, quantity, initial, sum_total",
  wishlist: "++id,image, product, product_price, quantity",
});

// Function to add item to cart
export const addItemToCart = async (item) => {
  const currentcart = await getAllItemsFromCart();
  const updatedCart = [...currentcart, item];
  await db.cart.clear();
  await db.cart.bulkAdd(updatedCart);
};

export const clearCartDb = async () => {
  await db.cart.clear();
};

// Function to add item to wishlist
export const addItemToWishList = async (item) => {
  const currentWishlist = await getAllItemsFromWishlist();
  const updatedWishlist = [...currentWishlist, item];
  await db.wishlist.clear();
  await db.wishlist.bulkAdd(updatedWishlist);
};

// Function to edit item quantity in cart
export const editCartItem = async (itemId, newQuantity) => {
  await db.cart.update(itemId, { quantity: newQuantity });
};

// Function to remove item from cart
export const removeItemFromCart = async (itemId) => {
  await db.cart.delete(itemId);
};

// Function to remove item from wishlist
export const removeItemFromWishlist = async (itemId) => {
  await db.wishlist.delete(itemId);
};

// Function to fetch all items from cart
export const getAllItemsFromCart = async () => {
  return await db.cart.toArray();
};

// Function to fetch all items from cart
export const getAllItemsFromWishlist = async () => {
  return await db.wishlist.toArray();
};

export const checkProductInCart = async (productId) => {
  try {
    const item = await db.cart.get(productId);
    return !!item; // Return true if item exists, false otherwise
  } catch (error) {
    console.error("Error checking product in cart:", error);
    return false; // Return false if there's an error
  }
};

export const checkProductInWishlist = async (productId) => {
  try {
    const item = await db.wishlist.get(productId);
    return !!item; // Return true if item exists, false otherwise
  } catch (error) {
    console.error("Error checking product in wishlist:", error);
    return false; // Return false if there's an error
  }
};

export default db;
