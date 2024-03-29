import { CiHeart } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

import VintageLampImage1 from "/bedroom-interior-2023-11-27-04-57-57-utc 1.png";
import VintageLampImage2 from "/bedroom-interior-2023-11-27-04-57-57-utc 1 (1).png";
import VintageLampImage3 from "/bedroom-interior-2023-11-27-04-57-57-utc 1 (2).png";
import VintageLampImage4 from "/bedroom-interior-2023-11-27-04-57-57-utc 1 (3).png";
import Pagination from "../Pagination";
import { useState } from "react";
import { Grid } from "@mui/material";
import { products } from "../../utils";
import { Link } from "react-router-dom";

function ShopImage() {
  const [isopen, setIsOpen] = useState(false);

  const toogeleDropdown = () => {
    setIsOpen(!isopen);
  };

  return (
    <div>
      <div className="py-16 custom-container">
        <div className="flex items-center justify-between  relative">
          <p className="text-[17px] text-center">Showing 1–12 of 17 results</p>

          <div className="relative ">
            <select
              className="block appearance-none bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              onClick={toogeleDropdown}
              onBlur={() => setIsOpen(false)}>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              {/* Replace 'ChevronDownIcon' with your custom downward icon */}
              {isopen ? <FaAngleDown /> : <FaAngleUp />}
            </div>
          </div>
        </div>
        <div className="">
          <Grid container>
            {products?.map((item, index) => (
              <Grid item xs={6} sm={6} md={3} key={index}>
                <div className="p-2 group relative overflow-hidden border transition-all duration-300 border-transparent hover:border-2 hover:border-[#969696]">
                  <div className="py-2 overflow-hidden">
                    <img
                      className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-between gap-12 mt-3">
                    <h1 className="text-[17px] leading-[25.64px]  font-bold">
                      {item.name}
                    </h1>
                    <p className="text-[17px]">
                      $<span>{item.price}</span>
                    </p>
                  </div>
                  <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
                    {item.description}
                  </p>
                  <div className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
                    <Link to="/shop/6">
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
        </div>
      </div>
    </div>
  );
}

export default ShopImage;
