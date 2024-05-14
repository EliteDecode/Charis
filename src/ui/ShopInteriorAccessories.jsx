import { CiHeart } from "react-icons/ci";

import VintageLampImage1 from "/bedroom-interior-2023-11-27-04-57-57-utc 1.png";
import VintageLampImage2 from "/bedroom-interior-2023-11-27-04-57-57-utc 1 (1).png";
import VintageLampImage3 from "/bedroom-interior-2023-11-27-04-57-57-utc 1 (2).png";
import VintageLampImage4 from "/bedroom-interior-2023-11-27-04-57-57-utc 1 (3).png";
import Group4_1Image from "/Group 4 (1).png";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ShopInteriorAccessories() {
  const { products, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.products
  );

  return (
    <div className="sm:py-16 py-5  custom-container">
      <div className="mb-8">
        <h1
          className="sm:text-[54px] text-[36px] font-bold text-center text-[#000]"
          style={{ lineHeight: "2rem" }}>
          Shop Interior Accessories
        </h1>
      </div>
      <Grid container spacing={3} className="mt-12">
        {products?.data.slice(0, 4).map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <div className="p-2 group relative overflow-hidden border transition-all duration-300 rounded-md shadow-md hover:border-2 hover:border-[#969696]">
              <div className="py-2 overflow-hidden">
                <img
                  className="w-full sm:h-[35vh] h-[30vh] transform transition-transform duration-300 group-hover:scale-110"
                  src={item.product_image}
                  alt=""
                />
              </div>
              <div className="flex items-center justify-between gap-12 mt-3">
                <h1 className="text-[17px] leading-[25.64px]  font-bold">
                  {item.product_name.length > 15
                    ? `${item.product_name.slice(0, 10)}...`
                    : item.product_name}
                </h1>
                <p className="text-[17px]">
                  $<span>{item.price}</span>
                </p>
              </div>

              <div
                className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all 
                    duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
                <Link to={`/shop/${item.id}`}>
                  <button className="w-48 bg-yellow-300 h-10">
                    Add to cart
                  </button>
                </Link>
                <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                  <CiHeart size={30} color="yellow" />
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>

      <div className="flex items-center justify-center gap-6 cursor-pointer mt-5">
        <p className="text-black text-[18px] font-normal">
          Shop Interior Accessories
        </p>
        <img src={Group4_1Image} alt="" className="cursor-pointer" />
      </div>
    </div>
  );
}

export default ShopInteriorAccessories;
