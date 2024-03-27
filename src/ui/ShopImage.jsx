import { CiHeart } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

import VintageLampImage1 from "/public/bedroom-interior-2023-11-27-04-57-57-utc 1.png";
import VintageLampImage2 from "/public/bedroom-interior-2023-11-27-04-57-57-utc 1 (1).png";
import VintageLampImage3 from "/public/bedroom-interior-2023-11-27-04-57-57-utc 1 (2).png";
import VintageLampImage4 from "/public/bedroom-interior-2023-11-27-04-57-57-utc 1 (3).png";
import Pagination from "./Pagination";
import { useState } from "react";

function ShopImage() {
  const [isopen, setIsOpen] = useState(false);

  const toogeleDropdown = () => {
    setIsOpen(!isopen);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-around gap-[40rem] relative">
        <p className="text-[20px] text-center">Showing 1–12 of 17 results</p>

        <div className="relative mt-7">
          <select
            className="block  w-[427px] h-[63px] appearance-none bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            onClick={toogeleDropdown}
            onBlur={() => setIsOpen(false)}
          >
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
      <div className="flex flex-col items-center gap-20 mt-">
        <div className="flex items-center gap-20">
          <div className="flex flex-col items-center w-[270px] h-[390px] p-2 group relative overflow-hidden border transition-all duration-300 border-transparent hover:border-2 hover:border-[#969696]">
            <div className="w-[244px] h-[235px] overflow-hidden">
              <img
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                src={VintageLampImage1}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-12 mt-3">
              <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
                Vintage Lamp
              </h1>
              <p className="text-[20px]">
                $<span>36</span>
              </p>
            </div>
            <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
              Vintage ceiling lamp in dark brown shade. Comes with adjustable
              brightness levels.
            </p>
            <div className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
              <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
              <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                <CiHeart size={30} color="yellow" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[270px] h-[390px] p-2 group relative overflow-hidden border transition-all duration-300 border-transparent hover:border-2 hover:border-[#969696]">
            <div className="w-[244px] h-[235px] overflow-hidden">
              <img
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                src={VintageLampImage2}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-12 mt-3">
              <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
                Vintage Lamp
              </h1>
              <p className="text-[20px]">
                $<span>36</span>
              </p>
            </div>
            <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
              Vintage ceiling lamp in dark brown shade. Comes with adjustable
              brightness levels.
            </p>
            <div className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
              <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
              <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                <CiHeart size={30} color="yellow" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[270px] h-[390px] p-2 group relative overflow-hidden border transition-all duration-300 border-transparent hover:border-2 hover:border-[#969696]">
            <div className="w-[244px] h-[235px] overflow-hidden">
              <img
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                src={VintageLampImage3}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-12 mt-3">
              <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
                Vintage Lamp
              </h1>
              <p className="text-[20px]">
                $<span>36</span>
              </p>
            </div>
            <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
              Vintage ceiling lamp in dark brown shade. Comes with adjustable
              brightness levels.
            </p>
            <div className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
              <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
              <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                <CiHeart size={30} color="yellow" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[270px] h-[390px] p-2 group relative overflow-hidden border transition-all duration-300 border-transparent hover:border-2 hover:border-[#969696]">
            <div className="w-[244px] h-[235px] overflow-hidden">
              <img
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                src={VintageLampImage4}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-12 mt-3">
              <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
                Vintage Lamp
              </h1>
              <p className="text-[20px]">
                $<span>36</span>
              </p>
            </div>
            <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
              Vintage ceiling lamp in dark brown shade. Comes with adjustable
              brightness levels.
            </p>
            <div className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
              <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
              <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                <CiHeart size={30} color="yellow" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-20">
          <div className="flex flex-col items-center w-[270px] h-[390px] p-2 group relative overflow-hidden border transition-all duration-300 border-transparent hover:border-2 hover:border-[#969696]">
            <div className="w-[244px] h-[235px] overflow-hidden">
              <img
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                src={VintageLampImage1}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-12 mt-3">
              <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
                Vintage Lamp
              </h1>
              <p className="text-[20px]">
                $<span>36</span>
              </p>
            </div>
            <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
              Vintage ceiling lamp in dark brown shade. Comes with adjustable
              brightness levels.
            </p>
            <div className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
              <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
              <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                <CiHeart size={30} color="yellow" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[270px] h-[390px] p-2 group relative overflow-hidden border transition-all duration-300 border-transparent hover:border-2 hover:border-[#969696]">
            <div className="w-[244px] h-[235px] overflow-hidden">
              <img
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                src={VintageLampImage2}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-12 mt-3">
              <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
                Vintage Lamp
              </h1>
              <p className="text-[20px]">
                $<span>36</span>
              </p>
            </div>
            <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
              Vintage ceiling lamp in dark brown shade. Comes with adjustable
              brightness levels.
            </p>
            <div className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
              <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
              <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                <CiHeart size={30} color="yellow" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[270px] h-[390px] p-2 group relative overflow-hidden border transition-all duration-300 border-transparent hover:border-2 hover:border-[#969696]">
            <div className="w-[244px] h-[235px] overflow-hidden">
              <img
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                src={VintageLampImage3}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-12 mt-3">
              <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
                Vintage Lamp
              </h1>
              <p className="text-[20px]">
                $<span>36</span>
              </p>
            </div>
            <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
              Vintage ceiling lamp in dark brown shade. Comes with adjustable
              brightness levels.
            </p>
            <div className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
              <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
              <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                <CiHeart size={30} color="yellow" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[270px] h-[390px] p-2 group relative overflow-hidden border transition-all duration-300 border-transparent hover:border-2 hover:border-[#969696]">
            <div className="w-[244px] h-[235px] overflow-hidden">
              <img
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                src={VintageLampImage4}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-12 mt-3">
              <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
                Vintage Lamp
              </h1>
              <p className="text-[20px]">
                $<span>36</span>
              </p>
            </div>
            <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
              Vintage ceiling lamp in dark brown shade. Comes with adjustable
              brightness levels.
            </p>
            <div className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
              <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
              <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                <CiHeart size={30} color="yellow" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-20">
          <div className="flex flex-col items-center w-[270px] h-[390px] p-2 group relative overflow-hidden border transition-all duration-300 border-transparent hover:border-2 hover:border-[#969696]">
            <div className="w-[244px] h-[235px] overflow-hidden">
              <img
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                src={VintageLampImage1}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-12 mt-3">
              <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
                Vintage Lamp
              </h1>
              <p className="text-[20px]">
                $<span>36</span>
              </p>
            </div>
            <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
              Vintage ceiling lamp in dark brown shade. Comes with adjustable
              brightness levels.
            </p>
            <div className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
              <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
              <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                <CiHeart size={30} color="yellow" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[270px] h-[390px] p-2 group relative overflow-hidden border transition-all duration-300 border-transparent hover:border-2 hover:border-[#969696]">
            <div className="w-[244px] h-[235px] overflow-hidden">
              <img
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                src={VintageLampImage2}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-12 mt-3">
              <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
                Vintage Lamp
              </h1>
              <p className="text-[20px]">
                $<span>36</span>
              </p>
            </div>
            <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
              Vintage ceiling lamp in dark brown shade. Comes with adjustable
              brightness levels.
            </p>
            <div className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
              <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
              <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                <CiHeart size={30} color="yellow" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[270px] h-[390px] p-2 group relative overflow-hidden border transition-all duration-300 border-transparent hover:border-2 hover:border-[#969696]">
            <div className="w-[244px] h-[235px] overflow-hidden">
              <img
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                src={VintageLampImage3}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-12 mt-3">
              <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
                Vintage Lamp
              </h1>
              <p className="text-[20px]">
                $<span>36</span>
              </p>
            </div>
            <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
              Vintage ceiling lamp in dark brown shade. Comes with adjustable
              brightness levels.
            </p>
            <div className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
              <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
              <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                <CiHeart size={30} color="yellow" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[270px] h-[390px] p-2 group relative overflow-hidden border transition-all duration-300 border-transparent hover:border-2 hover:border-[#969696]">
            <div className="w-[244px] h-[235px] overflow-hidden">
              <img
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                src={VintageLampImage4}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-12 mt-3">
              <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
                Vintage Lamp
              </h1>
              <p className="text-[20px]">
                $<span>36</span>
              </p>
            </div>
            <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
              Vintage ceiling lamp in dark brown shade. Comes with adjustable
              brightness levels.
            </p>
            <div className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
              <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
              <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                <CiHeart size={30} color="yellow" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-20">
          <div className="flex flex-col items-center w-[270px] h-[390px] p-2 group relative overflow-hidden border transition-all duration-300 border-transparent hover:border-2 hover:border-[#969696]">
            <div className="w-[244px] h-[235px] overflow-hidden">
              <img
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                src={VintageLampImage1}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-12 mt-3">
              <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
                Vintage Lamp
              </h1>
              <p className="text-[20px]">
                $<span>36</span>
              </p>
            </div>
            <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
              Vintage ceiling lamp in dark brown shade. Comes with adjustable
              brightness levels.
            </p>
            <div className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
              <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
              <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                <CiHeart size={30} color="yellow" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[270px] h-[390px] p-2 group relative overflow-hidden border transition-all duration-300 border-transparent hover:border-2 hover:border-[#969696]">
            <div className="w-[244px] h-[235px] overflow-hidden">
              <img
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                src={VintageLampImage2}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-12 mt-3">
              <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
                Vintage Lamp
              </h1>
              <p className="text-[20px]">
                $<span>36</span>
              </p>
            </div>
            <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
              Vintage ceiling lamp in dark brown shade. Comes with adjustable
              brightness levels.
            </p>
            <div className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
              <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
              <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                <CiHeart size={30} color="yellow" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[270px] h-[390px] p-2 group relative overflow-hidden border transition-all duration-300 border-transparent hover:border-2 hover:border-[#969696]">
            <div className="w-[244px] h-[235px] overflow-hidden">
              <img
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                src={VintageLampImage3}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-12 mt-3">
              <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
                Vintage Lamp
              </h1>
              <p className="text-[20px]">
                $<span>36</span>
              </p>
            </div>
            <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
              Vintage ceiling lamp in dark brown shade. Comes with adjustable
              brightness levels.
            </p>
            <div className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
              <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
              <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                <CiHeart size={30} color="yellow" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[270px] h-[390px] p-2 group relative overflow-hidden border transition-all duration-300 border-transparent hover:border-2 hover:border-[#969696]">
            <div className="w-[244px] h-[235px] overflow-hidden">
              <img
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                src={VintageLampImage4}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-12 mt-3">
              <h1 className="text-[20px] leading-[25.64px] w-[138px] font-bold">
                Vintage Lamp
              </h1>
              <p className="text-[20px]">
                $<span>36</span>
              </p>
            </div>
            <p className="w-[237px] text-[10px] leading-[12.4px] mt-1">
              Vintage ceiling lamp in dark brown shade. Comes with adjustable
              brightness levels.
            </p>
            <div className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
              <button className="w-48 bg-yellow-300 h-10">Add to cart</button>
              <div className="w-10 border border-yellow-300 h-10 flex items-center justify-center">
                <CiHeart size={30} color="yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
}

export default ShopImage;
