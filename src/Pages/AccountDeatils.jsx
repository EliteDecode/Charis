import cameraIcon from "/public/camera-01.png";
import buttonIcon from "/public/Group 4 (1).png";

function AccountDeatils() {
  return (
    <>
      <h1 className="text-[24px] leading-[30.77px] font-bold ml-20 mt-5 mb-5">
        Account details
      </h1>
      <hr className="border-black" />

      <form className="flex flex-col w-full gap-3 p-3 md:flex-row">
        <div className="w-full border border-[#777777] flex flex-col items-center md:max-w-[303px] h-full min-h-[380px] md:min-h-[477px]">
          <div className="bg-[#D9D9D9] w-[146px] h-[146px] rounded-full relative mt-10">
            <div className="w-[42px] h-[42px] rounded-full bg-[#FFC50A] flex items-center justify-center absolute right-2 top-[6.5rem]">
              <img src={cameraIcon} alt="" />
            </div>
          </div>
          <h1 className="text-[20px] font-bold leading-[25.64px] mt-5">
            Jamie Lannister
          </h1>
          <p className="text-[10px] leading-[12.29px] text-[#777777]">
            jamielannister@gmail.com
          </p>
          <div className="max-w-[259px] w-full h-[53px] border border-[#000000] flex items-center justify-center mt-5 text-[20px] leading-[24.8px] text-[#777777]">
            Abuja, Nigeria
          </div>
        </div>
        <div className="flex flex-col w-full gap-3 mx-auto lg:flex-row">
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-col">
              <label className="text-[#777777] text-[20px]">First Name</label>
              <input
                className="md:max-w-[323px] max-w-[700px] h-[53px] w-full border border-[#777777] pl-3"
                type="text"
                placeholder="Enter First Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#777777] text-[20px]">Phone Number</label>
              <input
                className="md:max-w-[323px] max-w-[700px] h-[53px] w-full border border-[#777777] pl-3"
                type="tel"
                placeholder="Enter phone number"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#777777] text-[20px]">Address</label>
              <input
                className="md:max-w-[323px] max-w-[700px] h-[53px] w-full border border-[#777777] pl-3"
                type="text"
                placeholder="Enter Address"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#777777] text-[20px]">Country</label>
              <input
                className="md:max-w-[323px] max-w-[700px] h-[53px] w-full border border-[#777777] pl-3"
                type="text"
                placeholder="Enter Country"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-col">
              <label className="text-[#777777] text-[20px]">Last Name</label>
              <input
                className="md:max-w-[323px] max-w-[700px] h-[53px] w-full border border-[#777777] pl-3"
                type="text"
                placeholder="Enter Last Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#777777] text-[20px]">
                Email Address
              </label>
              <input
                className="md:max-w-[323px] max-w-[700px] h-[53px] w-full border border-[#777777] pl-3"
                type="text"
                placeholder="Enter Email Address"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#777777] text-[20px]">City/State</label>
              <input
                className="md:max-w-[323px] max-w-[700px] h-[53px] w-full border border-[#777777] pl-3"
                type="Enter City/State"
                placeholder="Jamie"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#777777] text-[20px]">Postal Code</label>
              <input
                className="md:max-w-[323px] max-w-[700px] h-[53px] w-full border border-[#777777] pl-3"
                type="Postal Code"
                placeholder="Jamie"
              />
            </div>
            <button className="flex items-center justify-between px-3 gap-6 mt-5 cursor-pointer max-w-[297.54px] w-full h-[64.26px] bg-[#FFC50A]">
              <p className="text-black text-[18px] font-normal">
                Save & Update
              </p>
              <img src={buttonIcon} alt="" className="cursor-pointer" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AccountDeatils;
