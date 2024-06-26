import PropTypes from "prop-types"; // Import PropTypes from prop-types package
import { FaAngleDown, FaHamburger, FaUser } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import logoImg from "/Chariz Interiors 1.png";
import userImg from "/user.png";
import lineImg from "/Line 4.png";
import searchImg from "/search-01.png";
import { Box, Menu } from "@mui/material";
import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import {
  Person2Outlined,
  SearchOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { BsHeart } from "react-icons/bs";

function Nav({ setIsOpen }) {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.userAuth
  );

  const { items, count } = useSelector((state) => state.cart);
  const { count: wishlistCount } = useSelector((state) => state.wishlist);

  function handleClick() {
    setIsOpen(true);
  }

  const [isSidebar, setIsSidebar] = useState(false);
  const handleSidebarToggle = () => {
    if (window.innerWidth < 767) {
      setIsSidebar(false);
    }
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleSidebarToggle);
    return () => {
      window.removeEventListener("resize", handleSidebarToggle);
    };
  }, []);

  const closeMenus = () => {
    if (isNavDropdownOpen) {
      setIsNavDropdownOpen(false);
    }
  };

  const location = useLocation();
  return (
    <div className="sticky top-0 z-50 bg-white" onClick={closeMenus}>
      <div className="relative">
        <nav className="flex items-center justify-between w-full px-2 py-4 sm:px-20 ">
          <a href="/" className="sm:w-[10%] w-[25%] sm:mt-0 -mt-4">
            <img className="cursor-pointer " src={logoImg} alt="Logo" />
          </a>
          <div className="flex items-center gap-24">
            <ul className="items-center hidden gap-16 mb-5 md:flex">
              <NavLink to="home">
                <li
                  className={`hover:text-[#FFC50A] cursor-pointer ${
                    location.pathname.includes("home") ? "text-[#FFC50A]" : ""
                  }`}>
                  Home
                </li>
              </NavLink>
              <div className="relative">
                <li
                  className="flex items-center justify-center gap-2 hover:text-[#FFC50A] cursor-pointer"
                  onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}>
                  <span>Pages</span>{" "}
                  <span className="mt-1">
                    <FaAngleDown size={20} />
                  </span>{" "}
                </li>
                {isNavDropdownOpen && (
                  <div className="absolute p-5 my-3 bg-gray-100 top-5">
                    <NavLink to="services">
                      <li className="hover:text-[#FFC50A] cursor-pointer mb-5 text-[14px]">
                        Services
                      </li>
                    </NavLink>
                    <NavLink to="about">
                      <li className="hover:text-[#FFC50A] cursor-pointer mb-5 text-[14px]">
                        About Us
                      </li>
                    </NavLink>
                    <NavLink to="consultation">
                      <li className="hover:text-[#FFC50A] cursor-pointer mb-5 text-[14px]">
                        Consultation
                      </li>
                    </NavLink>
                    <NavLink to="projects">
                      <li className="hover:text-[#FFC50A] cursor-pointer mb-5 text-[14px]">
                        Our Project
                      </li>
                    </NavLink>
                  </div>
                )}
              </div>
              <NavLink to="gallery">
                <li
                  className={`hover:text-[#FFC50A] cursor-pointer ${
                    location.pathname.includes("gallery")
                      ? "text-[#FFC50A]"
                      : ""
                  }`}>
                  {" "}
                  Gallery
                </li>
              </NavLink>
              <NavLink to="shop">
                <li
                  className={`hover:text-[#FFC50A] cursor-pointer ${
                    location.pathname.includes("shop") ? "text-[#FFC50A]" : ""
                  }`}>
                  Shop
                </li>
              </NavLink>
              <NavLink to="contact">
                <li
                  className={`hover:text-[#FFC50A] cursor-pointer ${
                    location.pathname.includes("contact")
                      ? "text-[#FFC50A]"
                      : ""
                  }`}>
                  Contact
                </li>
              </NavLink>
              {!user && (
                <NavLink to="login">
                  <li className="hover:text-[#FFC50A] cursor-pointer">Login</li>
                </NavLink>
              )}
            </ul>

            <div className="flex items-center gap-2 mb-5">
              <NavLink to="account">
                <Person2Outlined />
              </NavLink>
              <img src={lineImg} alt="Line" />
              <SearchOutlined onClick={handleClick} />

              {/* <img
                className="cursor-pointer w-[14%]"
                src={searchImg}
                alt="Search"
                onClick={handleClick}
              /> */}
              <img src={lineImg} alt="Line" />
              <NavLink to="cart">
                <Box className="relative">
                  <ShoppingCartOutlined />
                  <span className="absolute -top-0.5 bg-gray-900 text-white rounded-full py-0 px-0.5 -right-0.5 text-[8px]">
                    {count}
                  </span>
                </Box>
              </NavLink>
              <img src={lineImg} alt="Line" />
              <NavLink to="wishlist">
                <Box className="relative">
                  <BsHeart style={{ fontWeight: "bold" }} />
                  <span className="absolute -top-1.5 bg-yellow-500 text-white rounded-full py-0 px-0.5 -right-0.5 text-[8px]">
                    {wishlistCount}
                  </span>
                </Box>
              </NavLink>
              <img src={lineImg} alt="Line" className="block md:hidden" />
              <MdMenu
                size={35}
                className="block md:hidden"
                onClick={() => setIsSidebar(!isSidebar)}
              />
            </div>
          </div>
        </nav>

        {/* mobile */}
        <div
          className={`absolute top-0 bg-white w-full h-screen p-5 transition-transform ${
            isSidebar ? "translate-x-0" : "-translate-x-full"
          }`}>
          <div className="flex items-center justify-between">
            <img
              className="cursor-pointer sm:w-[15%] w-[40%]"
              src={logoImg}
              alt="Logo"
            />
            <IoClose size={40} onClick={() => setIsSidebar(!isSidebar)} />
          </div>
          <ul className="mt-12 mb-5">
            <NavLink to="home" onClick={() => setIsSidebar(false)}>
              <li className="hover:text-[#FFC50A] cursor-pointer mb-5 text-[19px]">
                Home
              </li>
            </NavLink>
            <li className="flex items-center hover:text-[#FFC50A] cursor-pointer mb-5 text-[19px]">
              <span onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Pages
              </span>{" "}
              <span className="mt-1 cursor-pointer">
                <FaAngleDown
                  size={20}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
              </span>{" "}
            </li>
            {isDropdownOpen && (
              <div className="p-5 my-3 bg-gray-100">
                <NavLink to="services" onClick={() => setIsSidebar(false)}>
                  <li className="hover:text-[#FFC50A] cursor-pointer mb-5 text-[14px]">
                    Services
                  </li>
                </NavLink>
                <NavLink to="about" onClick={() => setIsSidebar(false)}>
                  <li className="hover:text-[#FFC50A] cursor-pointer mb-5 text-[14px]">
                    About Us
                  </li>
                </NavLink>

                <NavLink to="consultation" onClick={() => setIsSidebar(false)}>
                  <li className="hover:text-[#FFC50A] cursor-pointer mb-5 text-[14px]">
                    Consultation
                  </li>
                </NavLink>
                <NavLink to="projects" onClick={() => setIsSidebar(false)}>
                  <li className="hover:text-[#FFC50A] cursor-pointer mb-5 text-[14px]">
                    Our Project
                  </li>
                </NavLink>
              </div>
            )}
            <NavLink to="gallery" onClick={() => setIsSidebar(false)}>
              <li className="hover:text-[#FFC50A] cursor-pointer mb-5 text-[19px]">
                Gallery
              </li>
            </NavLink>
            <NavLink to="shop" onClick={() => setIsSidebar(false)}>
              <li className="hover:text-[#FFC50A] cursor-pointer mb-5 text-[19px]">
                Shop
              </li>
            </NavLink>
            <NavLink to="contact" onClick={() => setIsSidebar(false)}>
              <li className="hover:text-[#FFC50A] cursor-pointer mb-5 text-[19px]">
                Contact
              </li>
            </NavLink>
            <NavLink to="login" onClick={() => setIsSidebar(false)}>
              <li className="hover:text-[#FFC50A] cursor-pointer mb-5 text-[19px]">
                Login
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

Nav.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Nav;
