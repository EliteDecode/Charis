import ViewMoreImage from "/Group 4 (1).png";
import TabsGallery from "../../helpers/TabsGallary";

function GalleryHeader() {
  return (
    <div className="py-5 sm:py-5 custom-container">
      <h1 className=" text-center sm:text-[200px] text-[80px] text-[#FFC50A1A] cursor-default">
        GALLERY
      </h1>
      <div className="-mt-16 text-center sm:-mt-36">
        <h1 className="sm:text-[54px] text-[36px] font-bold text-[#000]">
          Gallery
        </h1>
        <p className="sm:text-[17px] text-[14px] sm:w-[60%] w-[90%] m-auto text-center text-[#777777]">
          We will continue to grow and evolve Chariz Interiors for the
          betterment of our clients and our people. Vision includes the
          continual expansion.
        </p>
      </div>
      <div className="mt-5">
        <TabsGallery />
      </div>
      <div className="flex items-center justify-center gap-6 mt-5 cursor-pointer">
        <p className="text-black text-[18px] font-normal">View More</p>
        <img src={ViewMoreImage} alt="" className="cursor-pointer" />
      </div>
    </div>
  );
}

export default GalleryHeader;
