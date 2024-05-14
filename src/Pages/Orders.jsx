import { useEffect, useState } from "react";
import buttonIcon from "/public/Group 4 (1).png";
import { orders } from "@/utils";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "@/features/orders/ordersSlice";
import Loader from "@/utils/Loader";
import { Link } from "react-router-dom";

function Orders() {
  const [showOngoing, setShowOngoing] = useState(true);
  const { user } = useSelector((state) => state.userAuth);

  const { isLoading, orders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders(user?.id));
  }, []);

  const handleToggle = () => {
    setShowOngoing(!showOngoing);
  };

  // const filteredOrders = showOngoing
  //   ? orders.filter(
  //       (order) => order.status === "Ongoing" || order.status === "Delivered"
  //     )
  //   : orders.filter(
  //       (order) => order.status === "Canceled" || order.status === "Returned"
  //     );

  return (
    <>
      <h1 className="text-[24px] leading-[30.77px] font-bold ml-20 mt-5 mb-5">
        Account details
      </h1>
      <hr className="border-gray-200 border" />
      <div className="flex flex-col gap-3 px-5 mt-3 md:px-20">
        {/* <div className="items-center justify-between hidden md:gap-36 sm:flex">
          <p
            className={`text-[20px] relative pb-2 group cursor-pointer ${
              showOngoing ? "text-black" : "text-gray-500"
            }`}
            onClick={handleToggle}
          >
            Ongoing/Delivered
            <span
              className={`absolute top-12 left-0 w-full h-[4px] ${
                showOngoing ? "bg-yellow-400 " : ""
              } transform scale-x-100 group-hover:scale-x-100 transition-transform`}
            ></span>
          </p>
          <p
            className={`text-[20px] relative pb-2 group cursor-pointer ${
              !showOngoing ? "text-black" : "text-gray-500"
            }`}
            onClick={handleToggle}
          >
            Canceled/Returned
            <span
              className={`absolute top-12 left-0 w-full h-[4px] ${
                !showOngoing ? "bg-yellow-400" : ""
              } transform scale-x-100 group-hover:scale-x-100 transition-transform`}
            ></span>
          </p>
        </div> */}
        <hr className="border border-[#fafafa] max-w-[898px] w-full" />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {orders?.data?.map((order, index) => (
              <Link to={`/orders/${order?.id}`} key={index}>
                <div className="flex items-center justify-between  border rounded-md shadow-md py-3 md:px-5 px-1">
                  <div className="flex gap-4">
                    <img src={order.image} alt="" />
                    <div className="space-y-2">
                      <p className="text-[12px]">
                        Order No.:{" "}
                        <span className="font-semibold">
                          {order?.order_number}
                        </span>
                      </p>
                      <p className="text-[12px]">
                        Ordered Items:{" "}
                        <span className="font-semibold">
                          {order?.order_items?.length}
                        </span>
                      </p>
                      <p className="text-[12px]">
                        Total Price:{" "}
                        <span className="font-semibold">
                          {parseInt(order?.total_price).toLocaleString(
                            "en-US",
                            {
                              style: "currency",
                              currency: "NGN",
                            }
                          )}
                        </span>
                      </p>
                      <p className="text-[12px]">
                        Order Date:{" "}
                        <span className="font-semibold">
                          {new Date(order?.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </p>
                      <div
                        className={`${
                          order.status === "ongoing"
                            ? "bg-[#FFC50A]"
                            : order.status === "delivered"
                            ? "bg-[#3AB52F]"
                            : order.status === "returned"
                            ? "bg-[#777777]"
                            : "bg-[#EB001B]"
                        } max-w-[95px] w-full h-[23px] capitalize text-[10px] text-white flex items-center px-2`}>
                        {order.status}
                      </div>
                    </div>
                  </div>
                  <button className="flex space-x-2 items-center justify-end md:px-3 gap-6 cursor-pointer max-w-[230.54px] w-full h-[64.26px]">
                    <p className="text-black text-[13px] font-normal md:flex hidden">
                      View Details
                    </p>
                    <img
                      src={buttonIcon}
                      alt=""
                      className="cursor-pointer w-[20%]"
                    />
                  </button>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default Orders;
