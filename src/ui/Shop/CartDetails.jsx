import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Delete, FavoriteOutlined } from "@mui/icons-material";
import ellipse from "/public/ellipseForward.png";
import { Link } from "react-router-dom";
import empty from "../../assets/images/empty.png";
import db, {
  addItemToWishList,
  getAllItemsFromCart,
  getAllItemsFromWishlist,
  removeItemFromCart,
  removeItemFromWishlist,
} from "@/utils/db"; // Import your IndexedDB instance
import { removeItem } from "@/features/cart/cartSlice";
import {
  addItemWishlist,
  removeItemWishlist,
} from "@/features/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import { getProducts } from "@/features/products/productSlice";

const CartDetails = () => {
  const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({}); // State to store quantities
  const [totalSum, setTotalSum] = useState(0);
  const { products, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.products
  );

  const getItems = async () => {
    const getItems = await getAllItemsFromCart();
    const getWishlist = await getAllItemsFromWishlist();

    if (getItems) {
      setItems(getItems);

      setWishlist(getWishlist);
    }
  };

  useEffect(() => {
    getItems();
    dispatch(getProducts());
  }, [db]);

  // Function to handle quantity change
  const handleQuantityChange = async (id, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));

    // Update quantity and sum total in IndexedDB
    try {
      const itemToUpdate = items.find((item) => item.id === id);
      if (itemToUpdate) {
        const updatedItem = {
          ...itemToUpdate,
          quantity: parseInt(quantity),
          sum_total: parseInt(quantity) * itemToUpdate.product_price,
        };
        const update = await db.cart.put(updatedItem);
        if (update) {
          getItems();
        }

        // Calculate updated total sum of all items' sum totals
        const updatedTotalSum = items?.reduce(
          (total, item) => total + item.sum_total,
          0
        );
        setTotalSum(updatedTotalSum);
      }
    } catch (error) {
      console.error(
        "Error updating quantity and sum total in IndexedDB:",
        error
      );
    }
  };

  // Function to remove item from cart
  const handleRemoveItem = (id) => {
    const removeItemFromDb = removeItemFromCart(id);
    if (removeItemFromDb) {
      getItems();
      dispatch(removeItem(id));
    }
  };

  useEffect(() => {
    if (items) {
      const sum = items?.reduce((total, item) => total + item.sum_total, 0);
      setTotalSum(sum);
    }
  }, [items]);

  const handleAddToWishlist = async (id) => {
    const item = products?.data?.filter((list) => list.id == id);
    console.log(item);

    const data = {
      id: item[0].id,
      image: item[0].product_image,
      product: item[0].product_name,
      product_price: item[0].price,
    };
    const result = addItemToWishList(data); // Call addToCart function
    if (result) {
      setWishlist([...wishlist, data]);
      toast.success("Item added to wishlist successfully");
      dispatch(addItemWishlist(item));
    } else {
      toast.error("Something went wrong, item not added to cart");
    }
  };

  const handleRemoveToWishlist = async (id) => {
    const removeItemFromDb = removeItemFromWishlist(id);
    if (removeItemFromDb) {
      getItems();
      toast.info("Item removed from wishlist successfully");
      dispatch(removeItemWishlist(id));
    }
  };

  return (
    <div className="nt-12 py-16">
      <Box className="sm:w-[90%] w-[95%] m-auto ">
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8} className="space-y-4">
              <>
                {items?.length < 1 ? (
                  <div className="flex flex-col items-center justify-center">
                    <Box className="my-5">
                      <Typography>
                        Cart Empty, Proceed to{" "}
                        <span className="uppercase font-bold">Shop</span>
                      </Typography>
                      <Link to="/shop">
                        <Button
                          size="small"
                          sx={{
                            bgcolor: "#ffc50a",
                            color: "#000",
                            fontSize: "10px",
                            fontWeight: "bold",
                          }}>
                          Visit Shop
                        </Button>
                      </Link>
                    </Box>
                    <img src={empty} className="sm:w-[50%] w-[100%]" alt="" />
                  </div>
                ) : (
                  <>
                    {items?.map((item, index) => (
                      <Box
                        className="border bg-white p-3 rounded-md shadow-md"
                        key={index}>
                        <Box className=" relative h-full  space-x-4">
                          <Grid container>
                            <Grid xs={12} sm={6} md={6}>
                              <div className="sm:w-[90%] w-[100%]">
                                <img
                                  src={item.image}
                                  alt=""
                                  className="w-[100%]"
                                />
                              </div>
                            </Grid>
                            <Grid xs={12} sm={6} md={6}>
                              <Box className="space-y-2 mt-3">
                                <p>{item?.product}</p>
                                <p>N {item?.product_price}</p>
                                <div>
                                  <input
                                    type="number"
                                    min={0}
                                    max={item.initial}
                                    value={quantities[item.id] || item.quantity} // Use quantity from state or default to item's quantity
                                    className="py-2 w-full rounded-md border-[#FFC50A] outline-none px-2"
                                    style={{ border: "1px solid #FFC50A" }}
                                    onChange={(e) =>
                                      handleQuantityChange(
                                        item.id,
                                        e.target.value
                                      )
                                    } // Handle quantity change
                                  />
                                </div>
                                <p>
                                  Sub-total: N
                                  {parseInt(
                                    quantities[item.id] || item.quantity
                                  ) * item?.product_price}
                                </p>
                                <div className="mt-5 space-x-2">
                                  <button
                                    className="border px-4 py-1 rounded-md outline-none"
                                    onClick={() => handleRemoveItem(item.id)} // Handle remove item
                                  >
                                    <Delete style={{ color: "red" }} />
                                  </button>
                                  {wishlist?.find(
                                    (list) => list.id == item.id
                                  ) ? (
                                    <button className="border px-4 py-1 rounded-md outline-none">
                                      <FavoriteOutlined
                                        style={{ color: "red" }}
                                        onClick={() =>
                                          handleRemoveToWishlist(item.id)
                                        }
                                      />
                                    </button>
                                  ) : (
                                    <button className="border px-4 py-1 rounded-md outline-none">
                                      <FavoriteOutlined
                                        style={{ color: "gray" }}
                                        onClick={() =>
                                          handleAddToWishlist(item.id)
                                        }
                                      />
                                    </button>
                                  )}
                                </div>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    ))}
                  </>
                )}
              </>
            </Grid>
            {items?.length > 0 && (
              <Grid item xs={12} sm={12} md={4}>
                <Box className="border p-3 rounded-md bg-[#F2F2F2] relative shadow-md h-[40vh]">
                  <p className="my-3">Cart Totals</p>

                  <hr style={{ border: "1px solid gray" }} />

                  <div className="flex items-center justify-between mt-3">
                    <p className="text-[12px] text-[#777777]">Subtotal</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-[12px] text-[#777777]">Total</p>
                    <p className="text-[12px] text-[#777777]">
                      N{totalSum.toFixed(2)}
                    </p>
                  </div>

                  <a href="/billing">
                    <div className="flex items-center p-2 bg-[#FFC50A] justify-between absolute bottom-2 w-[93%]">
                      <p>Proceed to Checkout</p>
                      <img src={ellipse} alt="" className="w-[10%]" />
                    </div>
                  </a>
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default CartDetails;
