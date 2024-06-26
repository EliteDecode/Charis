import icon1 from "/ear-rings-01.png";
import icon2 from "/time-03.png";
import icon3 from "/pot-01.png";
import icon4 from "/chair-barber.png";
import icon5 from "/idea-01.png";
import icon6 from "/toy-train.png";
import icon7 from "/favourite.png";
import icon8 from "/shopping-cart-01.png";
import imageBackground from "/istockphoto-1191817260-612x612 1.png";

function ShopHeader() {
  return (
    <div
      className="relative "
      style={{ marginLeft: "-80px", marginRight: "-80px" }}>
      <img src={imageBackground} alt="" />
      <div className="absolute flex flex-col gap-10 items-center justify-center bg-white bg-opacity-70 inset-0">
        <h1 className="text-[64px] leading-[71.42px]">Shop</h1>
        <div className="flex items-center gap-8 ">
          <div className="flex items-center gap-3">
            <img src={icon1} alt="" />
            <p>Accessories</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={icon2} alt="" />
            <p>Accessories</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={icon3} alt="" />
            <p>Accessories</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={icon4} alt="" />
            <p>Accessories</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={icon5} alt="" />
            <p>Accessories</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={icon6} alt="" />
            <p>Accessories</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={icon7} alt="" />
            <p>Accessories</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={icon8} alt="" />
            <p>Accessories</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopHeader;
