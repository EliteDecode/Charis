import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function Pagination() {
  return (
    <div className="flex items-center justify-between gap-12 m-auto mt-12">
      <MdKeyboardArrowLeft size={30} className="cursor-pointer" />
      <div className="flex items-center justify-center bg-[#FFC50A] border w-[54px] h-[54px] rounded-[50%]">
        <p className="text-[18px] cursor-pointer ">1</p>
      </div>
      <div className="flex items-center justify-center ">
        <p className="text-[18px] cursor-pointer ">2</p>
      </div>
      <div className="flex items-center justify-center ">
        <p className="text-[18px] cursor-pointer ">3</p>
      </div>
      <div className="flex items-center justify-center ">
        <p className="text-[18px] cursor-pointer ">4</p>
      </div>
      <div className="flex items-center justify-center ">
        <p className="text-[18px] cursor-pointer ">5</p>
      </div>
      <MdKeyboardArrowRight size={30} className="cursor-pointer" />
    </div>
  );
}

export default Pagination;
