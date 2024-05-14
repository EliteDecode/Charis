import { useEffect, useState } from "react";
import backgroundImage from "../../public/istockphoto-1191817260-612x612 1.png";
import userIcon from "../../public/user (2).png";
import notificationIcon from "../../public/notification-02.png";
import OrderIcon from "../../public/shopping-cart-check-01.png";
import CreditCard from "../../public/credit-card-pos.png";
import SettingsIcon from "../../public/settings-01.png";
import LogoutIcon from "../../public/logout-03.png";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom/dist";
import { useDispatch } from "react-redux";
import { logout } from "@/features/auth/authSlice";

function Account() {
  const location = useLocation();
  const url = location.pathname.slice(1);
  const [currentUrl, SetCurrentUrl] = useState(url);

  const handlecurrentUrl = (i) => {
    SetCurrentUrl(i);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menuItems = [
    { icon: userIcon, label: "My Account", NavLink: "account" },
    // {
    //   icon: notificationIcon,
    //   label: "Notifications",
    //   NavLink: "notifications",
    // },
    { icon: OrderIcon, label: "My Orders", NavLink: "orders" },
    // { icon: CreditCard, label: "Payment Methods", NavLink: "payment" },
    // { icon: SettingsIcon, label: "Settings", NavLink: "settings" },
    { icon: LogoutIcon, label: "Logout" },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-[1512px] w-full mt-[0.2rem]">
        <div className="w-full">
          <div className="relative ">
            <img className="w-full h-auto" src={backgroundImage} alt="" />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
              <h1 className="p-4 text-2xl font-bold text-white rounded-lg sm:text-4xl md:text-6xl">
                {menuItems.find((item) => item.NavLink === currentUrl)?.label}
              </h1>
            </div>
          </div>
          <div className="flex bg-[#D9D9D9] md:px-20 px-1 relative">
            <div className="z-10 max-h-full bg-[#D9D9D9] mt-5 lg:flex hidden">
              <ul className="flex flex-col  w-full min-w-[250px]">
                {menuItems.map((item, index) => (
                  <>
                    {item.label == "Logout" ? (
                      <NavLink onClick={handleLogout} key={index}>
                        <li
                          className={`w-full max-w-[250px] h-[63px] ${
                            url === item.NavLink ? "bg-[#FFC50A]" : ""
                          } flex items-center gap-5 pl-4`}
                          onClick={() => handlecurrentUrl(item.NavLink)}>
                          <img src={item.icon} alt="" />
                          <span>{item.label}</span>
                        </li>
                      </NavLink>
                    ) : (
                      <NavLink
                        to={`/${
                          item.NavLink ? item.NavLink.toLowerCase() : ""
                        }`}
                        key={index}>
                        <li
                          className={`w-full max-w-[250px] h-[63px] ${
                            url === item.NavLink ? "bg-[#FFC50A]" : ""
                          } flex items-center gap-5 pl-4`}
                          onClick={() => handlecurrentUrl(item.NavLink)}>
                          <img src={item.icon} alt="" />
                          <span>{item.label}</span>
                        </li>
                      </NavLink>
                    )}
                  </>
                ))}
              </ul>
            </div>
            <div className="z-10 max-h-full bg-[#D9D9D9] mt-5 lg:hidden flex">
              <ul className="flex flex-col  w-full min-w-[40px]">
                {menuItems.map((item, index) => (
                  <NavLink
                    to={`/${
                      item.NavLink ? item.NavLink.toLowerCase() : "login"
                    }`}
                    key={index}>
                    <li
                      className={`w-full max-w-[250px] h-[63px] ${
                        url === item.NavLink ? "bg-[#FFC50A]" : ""
                      } flex items-center gap-5 pl-4`}
                      onClick={() => handlecurrentUrl(item.NavLink)}>
                      <img src={item.icon} alt="" />
                    </li>
                  </NavLink>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-[#FFC50A] max-w-[1122px] w-full  md:-mt-16 mt-1 overflow-scroll custom-scrollbar">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
