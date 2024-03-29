import { Grid } from "@mui/material";
import React from "react";
import { products } from "../../utils";
import { CiHeart } from "react-icons/ci";

const RelatedProducts = () => {
  return (
    <div className="custom-container mt-5 sm:py-16 py-5">
      <p className="font-bold">Related Products</p>{" "}
      <Grid container>
        {products?.slice(0, 4).map((item, index) => (
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
                <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
                <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                  <CiHeart size={30} color="yellow" />
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RelatedProducts;
