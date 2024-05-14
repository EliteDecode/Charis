import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Delete, FavoriteOutlined } from "@mui/icons-material";
import ellipse from "/public/ellipseForward.png";
import { Link } from "react-router-dom";
import empty from "../../assets/images/empty.png";
import db, {
  getAllItemsFromWishlist,
  removeItemFromCart,
  removeItemFromWishlist,
} from "@/utils/db"; // Import your IndexedDB instance
import { removeItem } from "@/features/cart/cartSlice";
import { removeItemWishlist } from "@/features/wishlist/wishlistSlice";

const WishlistDetails = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  const getItems = async () => {
    const getItems = await getAllItemsFromWishlist();
    if (getItems) {
      setItems(getItems);
    }
  };

  useEffect(() => {
    getItems();
  }, [db]);

  const handleRemoveItem = (id) => {
    // Dispatch removeItem action
    const removeItemFromDb = removeItemFromWishlist(id);

    if (removeItemFromDb) {
      getItems();
      dispatch(removeItemWishlist(id));
    }
  };

  return (
    <div className="nt-12 bg-[#fafafa] py-16">
      <Box className="sm:w-[90%] w-[95%] m-auto ">
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} className="space-y-4">
              <>
                {items?.length < 1 ? (
                  <div className="flex flex-col items-center justify-center">
                    <Box className="my-5">
                      <Typography>
                        Wishlist Empty, Proceed to{" "}
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
                    <Box className="grid sm:grid-cols-4 grid-cols-1">
                      {items?.map((item, index) => (
                        <Box
                          className="border bg-white p-3 rounded-md shadow-md"
                          key={index}>
                          <Box className=" relative h-full  space-x-4">
                            <Grid container>
                              <Grid xs={12} sm={12} md={12}>
                                <div className="sm:w-[100%] w-[100%]">
                                  <img
                                    src={item.image}
                                    alt=""
                                    className="w-[100%]"
                                  />
                                </div>
                              </Grid>
                              <Grid xs={12} sm={12} md={12}>
                                <Box className="space-y-2 mt-3 flex items-center justify-between">
                                  <div>
                                    <p>{item?.product}</p>
                                    <p>N {item?.product_price}</p>
                                  </div>

                                  <div className="mt-5 space-x-2">
                                    <button className="border px-4 py-1 cursor-pointer rounded-md outline-none">
                                      <FavoriteOutlined
                                        style={{ color: "red" }}
                                        onClick={() =>
                                          handleRemoveItem(item.id)
                                        }
                                      />
                                    </button>
                                  </div>
                                </Box>
                                <Link to={`/shop/${item.id}`}>
                                  <button className=" py-2 px-4 mt-3 text-[11px] bg-[#f1f1f1] rounded-md">
                                    View Product
                                  </button>
                                </Link>
                              </Grid>
                            </Grid>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </>
                )}
              </>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default WishlistDetails;
