import { useEffect, useState } from "react";
import buttonIcon from "/public/Group 4 (1).png";
import { orders } from "@/utils";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "@/features/orders/ordersSlice";
import Loader from "@/utils/Loader";
import { Link, useParams } from "react-router-dom";

function SingleOrder() {
  const [showOngoing, setShowOngoing] = useState(true);
  const { user } = useSelector((state) => state.userAuth);

  const { isLoading, orders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders(user?.id));
  }, []);

  const { orderId } = useParams();

  const filteredOrders = orders?.data?.find(
    (order) => order.id == orderId
  )?.order_items;

  console.log(filteredOrders);

  const handleToggle = () => {
    setShowOngoing(!showOngoing);
  };

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
            {filteredOrders.map((order, index) => (
              <div
                className="flex items-center justify-between  border rounded-md shadow-md py-3 md:px-5 px-1"
                key={index}>
                <div className="flex gap-4">
                  <img
                    src={order?.product?.product_image}
                    alt=""
                    className="h-20 w-20"
                  />
                  <div className="space-y-1">
                    <hi>{order?.product?.product_name}</hi>
                    <p className="text-[10px]">
                      Quantity: {order?.product?.quantity}
                    </p>
                    <p className="text-[10px]">
                      Price:{" "}
                      {parseInt(order?.product?.price).toLocaleString("en-US", {
                        style: "currency",
                        currency: "NGN",
                      })}
                    </p>
                  </div>
                </div>
                <Link to={`/shop/${order?.product?.id}`}>
                  <button className="flex space-x-2 items-center justify-end md:px-3 gap-6 cursor-pointer max-w-[230.54px] w-full h-[64.26px]">
                    <p className="text-black text-[13px] font-normal md:flex hidden">
                      View Product
                    </p>
                    <img
                      src={buttonIcon}
                      alt=""
                      className="cursor-pointer w-[20%]"
                    />
                  </button>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default SingleOrder;
