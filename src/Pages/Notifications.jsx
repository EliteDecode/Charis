import { useState } from "react";

function Notifications() {
  const [isEmail, SetIsEmail] = useState(false);
  const [IsSms, setIsSms] = useState(false);

  const handleToggleEmail = () => {
    SetIsEmail(!isEmail);
  };

  const handleToggleSms = () => {
    setIsSms(!IsSms);
  };

  return (
    <>
      <h1 className="text-[24px] leading-[30.77px] font-bold ml-20 mt-5 mb-5">
        Notifications
      </h1>
      <hr className="border-black" />
      <div className="flex flex-col gap-1 mx-1 mt-5 sm:ml-16">
        <div className="flex items-center gap-16">
          <p>Email notifications</p>
          <div className="relative">
            <div
              className={`w-[114px] h-[53px] border border-black bg-black flex items-center justify-between px-5 cursor-pointer relative transition-colors ${
                isEmail ? "bg-white" : "bg-black"
              }`}
              onClick={handleToggleEmail}
            >
              <span
                className={`text-[20px] leading-[24.8px] ${
                  isEmail ? "text-black" : "text-gray-500"
                } transition-opacity opacity-${isEmail ? "100" : "0"}`}
              >
                On
              </span>
              <span
                className={`text-[20px] leading-[24.8px] ${
                  isEmail ? "text-gray-500" : "text-white"
                } transition-opacity opacity-${isEmail ? "0" : "100"}`}
              >
                Off
              </span>
              <div
                className={`bg-[#FFC50A] w-[32px] h-[34px] absolute top-2 transition-transform duration-300 ${
                  isEmail ? "left-[70px]" : "left-4"
                }`}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[4.5rem]">
          <p>SMS notifications</p>
          <div className="relative">
            <div
              className={`w-[114px] h-[53px] border border-black bg-black flex items-center justify-between px-5 cursor-pointer relative transition-colors ${
                IsSms ? "bg-white" : "bg-black"
              }`}
              onClick={handleToggleSms}
            >
              <span
                className={`text-[20px] leading-[24.8px] ${
                  IsSms ? "text-black" : "text-gray-500"
                } transition-opacity opacity-${IsSms ? "100" : "0"}`}
              >
                On
              </span>
              <span
                className={`text-[20px] leading-[24.8px] ${
                  IsSms ? "text-gray-500" : "text-white"
                } transition-opacity opacity-${IsSms ? "0" : "100"}`}
              >
                Off
              </span>
              <div
                className={`bg-[#FFC50A] w-[32px] h-[34px] absolute top-2 transition-transform duration-300 ${
                  IsSms ? "left-[70px]" : "left-4"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifications;
