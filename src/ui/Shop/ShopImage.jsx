import { CiHeart } from "react-icons/ci";
import { FaAngleDown, FaAngleLeft, FaAngleUp } from "react-icons/fa6";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { FaAngleRight } from "react-icons/fa";

function ShopImage() {
  const { products, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.products
  );
  const [isopen, setIsOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const pagesVisited = pageNumber * itemsPerPage;

  const pageCount = Math.ceil(products?.data?.length / itemsPerPage);

  const toogleDropdown = () => {
    setIsOpen(!isopen);
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className="py-16 custom-container">
        <div className="flex items-center justify-between  relative">
          <p className="text-[17px] text-center">
            Showing {pagesVisited + 1}–{pagesVisited + parseInt(itemsPerPage)}{" "}
            of {products?.data?.length} results
          </p>

          <div className="relative ">
            <select
              className="block appearance-none bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              onClick={toogleDropdown}
              onBlur={() => setIsOpen(false)}
              onChange={(e) => setItemsPerPage(e.target.value)}>
              <option value={8}>8</option>
              <option value={16}>16</option>
              <option value={24}>24</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              {isopen ? <FaAngleDown /> : <FaAngleUp />}
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Grid container spacing={3}>
            {products?.data
              ?.slice(pagesVisited, pagesVisited + itemsPerPage)
              .map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <div className="p-2 group relative overflow-hidden border rounded-md shadow-md transition-all duration-300  hover:border-2 hover:border-[#969696]">
                    <div className="py-2 overflow-hidden">
                      <img
                        className="w-full sm:h-[35vh] h-[30vh] transform transition-transform duration-300 group-hover:scale-110"
                        src={item?.product_image}
                        alt=""
                      />
                    </div>
                    <div className="flex items-center justify-between gap-12 mt-3">
                      <h1 className="text-[17px] leading-[25.64px]  font-bold">
                        {item?.product_name?.length > 15
                          ? `${item?.product_name?.slice(0, 10)}...`
                          : item?.product_name}
                      </h1>
                      <p className="text-[17px]">
                        $<span>{item?.price}</span>
                      </p>
                    </div>

                    <div
                      className="flex flex-row opacity-0 items-center gap-1 mt-5 flex-grow justify-between transition-all 
                    duration-300 group-hover:opacity-100 absolute inset-x-0 bottom-0 bg-white p-4 transform translate-y-4 group-hover:translate-y-0">
                      <Link to={`/shop/${item?.id}`}>
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
        <ReactPaginate
          previousLabel={<FaAngleLeft />}
          nextLabel={<FaAngleRight />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination flex justify-center mt-5 space-x-6"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={
            "pagination__link--active bg-yellow-300 rounded-full px-3 py-1 text-black"
          }
        />
      </div>
    </div>
  );
}

export default ShopImage;
