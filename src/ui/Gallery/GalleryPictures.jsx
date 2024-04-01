import photo1 from "/Maximizing Space_ Clever Office Interior Design Solutions for Efficiency.png";
import photo2 from "/The Simple Serenity of Soft Minimalism.png";
import photo3 from "/New Moon - Wall Lamp.png";
import photo4 from "/wall decorations for living room wall decor art wall decor living room ideas.png";
import photo5 from "/_ (3).png";
import photo6 from "/10 Stunning Ideas for the Perfect TV Accent Wall.png";
import photo7 from "/Bespoke Residential Interiors.png";
import photo8 from "/49 Exquisite Japandi Home Office Styles_ The Harmony of Minimalism and Elegance.png";
import Pagination from "../Pagination";

function GalleryPictures() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-3 mt-12">
        <div className="flex items-center justify-between gap-16 ">
          <p className="text-[20px] relative pb-2  group cursor-pointer">
            Living room Interior
            <span className="absolute top-12 left-0 w-full h-[4px] bg-yellow-400 transform scale-x-100 group-hover:scale-x-100 transition-transform"></span>
          </p>
          <p className="text-[20px] relative pb-2 group cursor-pointer">
            Kitchen Interior
            <span className="absolute top-12 left-0 w-full h-[4px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </p>
          <p className="text-[20px] relative pb-2 group cursor-pointer">
            Room Interior
            <span className="absolute top-12 left-0 w-full h-[4px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </p>
          <p className="text-[20px] relative pb-2 group cursor-pointer">
            Office Interior
            <span className="absolute top-12 left-0 w-full h-[4px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </p>
        </div>
        <hr className="border border-[#000000] w-[898px]" />
      </div>

      {/* Photos */}
      <div className="flex flex-col items-center gap-5 mt-20">
        <div className="flex gap-5">
          <div className="flex flex-col gap-5">
            <img src={photo1} alt="" />
            <img src={photo2} alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <img src={photo3} alt="" />
            <img src={photo4} alt="" />
            <img src={photo5} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <img src={photo6} alt="" />
          </div>
          <div className="flex gap-5">
            <img src={photo7} alt="" />
            <img src={photo8} alt="" />
          </div>
        </div>
      </div>

      <Pagination />
    </div>
  );
}

export default GalleryPictures;
