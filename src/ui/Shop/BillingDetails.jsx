import { Box, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import product from "/product.jpg";
import product2 from "/3d-illustration-mockup-photo-frame-in-lounge-rende-2023-11-27-05-32-31-utc.png";
import product3 from "/public/Maximizing Space_ Clever Office Interior Design Solutions for Efficiency.png";
import { Delete, FavoriteOutlined } from "@mui/icons-material";
import ellipse from "/public/ellipseForward.png";
import { products } from "../../utils";
import BillingForm from "./BillingForm";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { billingSchema } from "@/utils/Schema";
import { PaystackButton } from "react-paystack";
import { clearCartDb, getAllItemsFromCart } from "@/utils/db";
import { CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "@/utils/Loader";
import { checkout, reset } from "@/features/orders/ordersSlice";
import { FaNairaSign } from "react-icons/fa6";
import { clearCart } from "@/features/cart/cartSlice";
import CheckoutDetails from "./CheckoutDetails";

const BillingDetails = () => {
  const [cart, setCart] = useState();
  const { isLoading, isError, isSuccess, message, checkoutDetails } =
    useSelector((state) => state.orders);
  const { user } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

  const fetchCart = async () => {
    const data = await getAllItemsFromCart();
    if (data) {
      setCart(data);
    }
  };

  const sortedCart = [];
  cart?.map((item) =>
    sortedCart.push({
      product_id: item.id,
      quantity: item.quantity,
      product_price: item.product_price,
    })
  );

  useEffect(() => {
    fetchCart();
  }, []);

  const btnRef = useRef();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      company_name: "",
      street_address: "",
      town_city: "",
      state: "",
      country: "",
      zip_code: "",
    },
    validationSchema: billingSchema,
    onSubmit: (values) => {
      btnRef.current.click();
    },
  });

  const publicKey = "pk_test_7f3e3e3e91534fe27a6fcc7b297273436b6a2faa";
  const amount = cart?.reduce((acc, curr) => acc + curr.sum_total, 0) * 100;

  const fullname = `${formik.values.firstname} ${formik.values.lastname}`;
  const phone = `${formik.values.phone}`;
  const email = formik.values.email;
  const componentProps = {
    email,
    amount,
    metadata: {
      name: fullname,
      phone,
    },
    publicKey,
    text: (
      <div className="flex cursor-pointer items-center p-2 bg-[#FFC50A] justify-between mt-5 w-full">
        <p>Place Order</p>
        <img src={ellipse} alt="" className="w-[10%]" />
      </div>
    ),
    onSuccess: (response) => {
      const data = {
        ...formik.values,
        user_id: user?.id,
        reference: response.reference,
        trxref: response.trxref,
        cart_items: sortedCart,
        payment_method: "paystack",
        total_cost: cart?.reduce((acc, curr) => acc + curr.sum_total, 0),
      };
      console.log(data);

      dispatch(checkout(data));
    },
    onClose: () => alert("Wait! Don't leave :("),
  };

  const isFormFilled = () => {
    return Object.values(formik.values).every((value) => !!value);
  };

  const clearAllItems = async () => {
    await clearCartDb();
    dispatch(clearCart());
  };

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        onClose: () => {
          dispatch(reset());
        },
      });
    }

    if (isSuccess) {
      toast.success("Order placed successfully", {
        onClose: () => {
          dispatch(reset());
          formik.resetForm();
          clearAllItems();
          setCart([]);
        },
      });
    }

    dispatch(reset());
  }, [isError, isSuccess, dispatch, message]);

  return (
    <div className="py-16 mt-12">
      <input type="" ref={btnRef} />

      <Box className="sm:w-[80%] w-[95%] m-auto ">
        <Box>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {checkoutDetails ? (
                <CheckoutDetails order={checkoutDetails.order} />
              ) : (
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={12} md={7} className="space-y-4">
                    <Box className="">
                      <p className="text-[20px] font-bold">Billing Details</p>
                      <BillingForm formik={formik} />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={5}
                    style={{ position: "sticky", top: "150px" }}>
                    <Box className="border p-3 rounded-md bg-[#F2F2F2] relative shadow-md py-3">
                      <p className="my-3">Your Order</p>

                      <hr style={{ border: "1px solid gray" }} />

                      <div className="">
                        <div className="table-container">
                          <table className="w-full">
                            <thead>
                              <tr>
                                <th className="text-left">Product</th>
                                <th className="text-right">Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cart?.map((product, index) => (
                                <tr key={index}>
                                  <td className="text-left text-[12px] text-[#777777]">
                                    {product.product}
                                  </td>
                                  <td className="text-right text-[12px] text-[#777777]">
                                    N {product.sum_total}
                                  </td>
                                </tr>
                              ))}

                              <tr>
                                <td className="text-left text-[12px] font-bold">
                                  Total
                                </td>
                                <td className="text-right  font-bold text-[12px]">
                                  N{" "}
                                  {cart?.reduce(
                                    (acc, curr) => acc + curr.sum_total,
                                    0
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {!isFormFilled() && (
                        <div
                          onClick={formik.handleSubmit}
                          className="flex cursor-pointer items-center p-2 bg-[#FFC50A] justify-between mt-5 sm:w-[63%] w-full">
                          <p>Place Order</p>
                          <img src={ellipse} alt="" className="w-[10%]" />
                        </div>
                      )}

                      {isFormFilled() && (
                        <PaystackButton
                          {...componentProps}
                          ref={btnRef}
                          className="sm:w-[63%] w-full"
                        />
                      )}

                      {/* <Link to="/payments">
                  <div className="flex items-center p-2 bg-[#FFC50A] justify-between mt-5  w-[63%]">
                    <p>Place Order</p>
                    <img src={ellipse} alt="" className="w-[10%]" />
                  </div>
                </Link> */}
                    </Box>
                  </Grid>
                </Grid>
              )}
            </>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default BillingDetails;
