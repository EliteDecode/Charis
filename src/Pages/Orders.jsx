import { useState } from "react";
import buttonIcon from "/public/Group 4 (1).png";
import { orders } from "@/utils";

function Orders() {
  const [showOngoing, setShowOngoing] = useState(true);

  const handleToggle = () => {
    setShowOngoing(!showOngoing);
  };

  const filteredOrders = showOngoing
    ? orders.filter(
        (order) => order.status === "Ongoing" || order.status === "Delivered"
      )
    : orders.filter(
        (order) => order.status === "Canceled" || order.status === "Returned"
      );

  return (
    <>
      <h1 className="text-[24px] leading-[30.77px] font-bold ml-20 mt-5 mb-5">
        Account details
      </h1>
      <hr className="border-black" />
      <div className="flex flex-col gap-3 px-5 mt-3 md:px-20">
        <div className="items-center justify-between hidden md:gap-36 sm:flex">
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
        </div>
        <hr className="border border-[#000000] max-w-[898px] w-full" />
        {filteredOrders.map((order, index) => (
          <div
            className="flex items-center justify-between border border-[#000000] py-3 md:px-5 px-1"
            key={index}
          >
            <div className="flex gap-4">
              <img src={order.image} alt="" />
              <div>
                <hi>{order.name}</hi>
                <p className="text-[10px]">Order No.: 23456789345678</p>
                <div
                  className={`${
                    order.status === "Ongoing"
                      ? "bg-[#FFC50A]"
                      : order.status === "Delivered"
                      ? "bg-[#3AB52F]"
                      : order.status === "Returned"
                      ? "bg-[#777777]"
                      : "bg-[#EB001B]"
                  } max-w-[95px] w-full h-[23px] text-[10px] text-white flex items-center px-2`}
                >
                  {order.status}
                </div>
                <p className="text-[10px]">
                  {order.status === "Ongoing"
                    ? `Expected delivery on ${order.expectedDate}`
                    : `on ${order.expectedDate}`}
                </p>
              </div>
            </div>
            <button className="flex items-center md:justify-between justify-end md:px-3 gap-6 cursor-pointer max-w-[230.54px] w-full h-[64.26px]">
              <p className="text-black text-[18px] font-normal md:flex hidden">
                View Details
              </p>
              <img src={buttonIcon} alt="" className="cursor-pointer" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Orders;
