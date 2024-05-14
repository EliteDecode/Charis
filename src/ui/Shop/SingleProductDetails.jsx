import { Box, Button, Grid, Typography } from "@mui/material";
import product from "/product.jpg";
import React, { useEffect, useState } from "react"; // Import useState
import {
  Favorite,
  FavoriteOutlined,
  NextPlan,
  Share,
  Star,
  StarHalf,
} from "@mui/icons-material";
import SingleProductReview from "./SingleProductReview";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import Loader from "@/utils/Loader";
import {
  addItemToCart,
  addItemToWishList,
  checkProductInCart,
  checkProductInWishlist,
  removeItemFromCart,
  removeItemFromWishlist,
} from "@/utils/db"; // Import addToCart function from db.js
import { toast } from "react-toastify";
import { addItem, removeItem } from "@/features/cart/cartSlice";
import {
  addItemWishlist,
  removeItemWishlist,
} from "@/features/wishlist/wishlistSlice";
import empty from "../../assets/images/empty.png";

const SingleProductDetails = () => {
  const { singleProduct, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch(); // Initialize dispatch

  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    const checkCart = async () => {
      const result = await checkProductInCart(singleProduct?.data?.id);
      const resultWishlist = await checkProductInWishlist(
        singleProduct?.data?.id
      );
      setInCart(result);
      setInWishlist(resultWishlist);
    };
    if (singleProduct) {
      checkCart();
    }
  }, [singleProduct]);

  const handleAddToCart = async () => {
    const item = {
      id: singleProduct?.data?.id,
      image: singleProduct?.data?.product_image,
      product: singleProduct?.data?.product_name,
      product_price: singleProduct?.data?.price,
      quantity,
      initial: singleProduct?.data?.quantity,
      sum_total: quantity * singleProduct?.data?.price,
    };
    const result = addItemToCart(item); // Call addToCart function
    if (result) {
      setInCart(true);
      dispatch(addItem(item));
      toast.success("Item added to cart successfully");
    } else {
      toast.error("Something went wrong, item not added to cart");
    }
  };

  const handleAddToWishlist = async () => {
    const item = {
      id: singleProduct?.data?.id,
      image: singleProduct?.data?.product_image,
      product: singleProduct?.data?.product_name,
      product_price: singleProduct?.data?.price,
      quantity,
    };
    const result = addItemToWishList(item); // Call addToCart function
    if (result) {
      setInWishlist(true);
      dispatch(addItemWishlist(item));
      toast.success("Item added to wishlist successfully");
    } else {
      toast.error("Something went wrong, item not added to cart");
    }
  };

  const handleRemoveToCart = async () => {
    const result = removeItemFromCart(singleProduct?.data?.id);
    if (result) {
      toast.info("Item removed from cart");
      dispatch(removeItem(singleProduct?.data?.id));
      setInCart(false);
    } else {
      console.error("Error removing item from cart:", result.error);
    }
  };

  const handleRemoveToWishlist = async () => {
    const result = removeItemFromWishlist(singleProduct?.data?.id);
    if (result) {
      toast.info("Item removed from wishlist successfully");
      dispatch(removeItemWishlist(singleProduct?.data?.id));
      setInWishlist(false);
    } else {
      console.error("Error removing item from cart:", result.error);
    }
  };

  const productImages =
    singleProduct && JSON.parse(singleProduct?.data?.images);
  return (
    <Box className="custom-container" style={{ marginTop: "5%" }}>
      {isLoading ? (
        <Loader />
      ) : !isLoading && !singleProduct ? (
        <div className="flex flex-col items-center justify-center">
          <Box className="my-5">
            <Typography>
              Something went wrong, Could not fetch product details
            </Typography>

            <Button
              size="small"
              onClick={() => window.location.reload()}
              sx={{
                bgcolor: "#ffc50a",
                color: "#000",
                fontSize: "10px",
                fontWeight: "bold",
              }}>
              Reload
            </Button>
          </Box>
          <img src={empty} className="sm:w-[50%] w-[100%]" alt="" />
        </div>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} className="">
                <img
                  src={singleProduct?.data?.product_image}
                  alt=""
                  className="flex-end w-full"
                />
              </Grid>
              {productImages?.map((item, index) => (
                <Grid item xs={4} sm={4} md={4} className="space-y-2">
                  <img src={item} alt="" key={index} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box className="relative h-full">
              <p className="font-bold text-[22px]">
                {singleProduct?.data?.product_name}
              </p>
              <Box className="flex items-center space-x-2">
                <Box className="flex items-center space-x-2">
                  <Star style={{ color: "#FFC50A", fontSize: "15px" }} />
                  <Star style={{ color: "#FFC50A", fontSize: "15px" }} />
                  <Star style={{ color: "#FFC50A", fontSize: "15px" }} />
                  <Star style={{ color: "#FFC50A", fontSize: "15px" }} />
                  <StarHalf style={{ color: "#FFC50A", fontSize: "15px" }} />
                </Box>
                <Box>
                  <p className="text-[12px] text-[#777777]">
                    {" "}
                    (1 Customer Review)
                  </p>
                </Box>
              </Box>

              <Box className="space-y-2">
                <Box className="flex items-center space-x-2 mt-5">
                  <Typography sx={{ fontSize: "14px", color: "#777777" }}>
                    Product Description :
                  </Typography>
                  <span
                    className="text-[14px] sm:w-[70%] w-full text-[#777777]"
                    dangerouslySetInnerHTML={{
                      __html: singleProduct?.data?.description,
                    }}
                  />
                </Box>
                <Typography sx={{ fontSize: "14px", color: "#777777" }}>
                  Product Price: {singleProduct?.data?.price.toLocaleString()}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#777777" }}>
                  Product Weight: {singleProduct?.data?.weight}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#777777" }}>
                  Shipping Dimensions: {singleProduct?.data?.dimensions}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#777777" }}>
                  Shipping Location: {singleProduct?.data?.location}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#777777" }}>
                  Product Sku: {singleProduct?.data?.sku}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#777777" }}>
                  Shipping Method: {singleProduct?.data?.shipping_method}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#777777" }}>
                  Shipping Cost: {singleProduct?.data?.shipping_cost}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#777777" }}>
                  Shipping Timeline: {singleProduct?.data?.shipping_time}
                </Typography>
              </Box>

              {inCart ? (
                <Box className="flex items-center space-x-2 mt-5">
                  <Box className="sm:w-auto  w-full">
                    <button
                      onClick={handleRemoveToCart} // Call handleAddToCart function on button click
                      className="py-3 border outline-none px-10 bg-[#FFC50A] sm:w-auto w-full text-[14px] uppercase font-bold">
                      Remove from cart
                    </button>
                  </Box>
                  <Box className="border p-2 cursor-pointer">
                    {inWishlist ? (
                      <FavoriteOutlined
                        style={{ color: "red" }}
                        onClick={handleRemoveToWishlist}
                      />
                    ) : (
                      <Favorite
                        style={{ color: "gray" }}
                        onClick={handleAddToWishlist}
                      />
                    )}
                  </Box>
                </Box>
              ) : (
                <>
                  <Box className="flex flex-wrap items-center space-y-2 space-x-2 mt-5">
                    <p>Quantity</p>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="outline-none py-2 px-2"
                      max={10}
                      min={0}
                      style={{ border: "1px solid gray" }}
                    />
                    <Box className="border p-2 cursor-pointer">
                      {inWishlist ? (
                        <FavoriteOutlined
                          style={{ color: "red" }}
                          onClick={handleRemoveToWishlist}
                        />
                      ) : (
                        <Favorite
                          style={{ color: "gray" }}
                          onClick={handleAddToWishlist}
                        />
                      )}
                    </Box>
                    <Box className="sm:w-auto w-full">
                      <button
                        onClick={handleAddToCart} // Call handleAddToCart function on button click
                        className="py-3 border outline-none px-10 bg-[#FFC50A] sm:w-auto w-full text-[14px] uppercase font-bold">
                        Add To cart
                      </button>
                    </Box>
                  </Box>
                  <Box className="mt-5">
                    <Typography sx={{ fontSize: "16px", color: "#777777" }}>
                      Sum Total: {quantity * singleProduct?.data?.price}
                    </Typography>
                  </Box>
                </>
              )}

              <Box className="mt-5">
                <p className="text-[14px] text-[#777777]">
                  Categories:{" "}
                  {singleProduct?.data?.categories?.map(
                    (item, index, array) => (
                      <span className="underline" key={index}>
                        {item.name}
                        {index !== array.length - 1 && ","}
                      </span>
                    )
                  )}
                </p>

                <p className="text-[14px] text-[#777777]">
                  Tags:{" "}
                  {singleProduct?.data?.tags?.map((item, index, array) => (
                    <span className="underline" key={index}>
                      {item.name}
                      {index !== array.length - 1 && ","}
                    </span>
                  ))}
                </p>
              </Box>

              <Box className="mt-5 flex items-center space-x-2 sm:absolute relative bottom-0 border p-3 bg-[#FFC50A]">
                <Share style={{ fontSize: "15px", color: "#777777" }} />
                <p className="text-[14px] text-[#777777]">Share Product</p>
              </Box>
              <Link
                to={`/shop`}
                className="mt-5 flex items-center space-x-2 sm:absolute relative bottom-0 right-0 border p-3 bg-[#FFC50A]">
                <NextPlan style={{ fontSize: "15px", color: "#777777" }} />
                <p className="text-[14px] text-[#000]">Continue Shopping</p>
              </Link>
            </Box>
          </Grid>
        </Grid>
      )}

      <Box className="mt-28">
        <SingleProductReview singleProduct={singleProduct} />
      </Box>
    </Box>
  );
};

export default SingleProductDetails;
