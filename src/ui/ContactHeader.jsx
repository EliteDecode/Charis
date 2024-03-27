function ContactHeader() {
  return (
    <div className="flex items-center justify-center flex-col mt-20 gap-10">
      <h1 className="text-[55px] leading-[61.38px]">Contact Us</h1>
      <div className="flex items-center">
        <div className="w-[450px] h-[252px] border border-[#FFC50A] border-r-0 flex items-start flex-col gap-1 px-20 py-10">
          <h2 className="text-[33px] text-[#1E1E1E]">Phone Number</h2>
          <p className="text-[20px] text-[#777777]">091 521 64668</p>
        </div>
        <div className="w-[450px] h-[252px] border border-[#FFC50A] border-r-0 flex items-center flex-col gap-1 px-20 py-10">
          <h2 className="text-[33px] text-[#1E1E1E]">Email Address</h2>
          <p className="text-[20px] text-[#777777]">
            business@charizinteriors.com
          </p>
        </div>
        <div className="w-[450px] h-[252px] border border-[#FFC50A] flex items-start flex-col gap-1 px-20 py-10">
          <h2 className="text-[33px] text-[#1E1E1E]">Phone Number</h2>
          <p className="text-[20px] text-[#777777]">
            4th floor, Ocean Centre,off Oladipo Diya Road, Gudu, Apo, Abuja
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactHeader;
