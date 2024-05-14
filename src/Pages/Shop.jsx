import { getProducts } from "@/features/products/productSlice";
import ContactForm from "../ui/ContactForm";
import ContactSection from "../ui/ContactSection";
import ShopBanner from "../ui/Shop/ShopBanner";
import ShopImage from "../ui/Shop/ShopImage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProducts());
  }, []);
  return (
    <div className="">
      <div className=" mt-[0.2rem]">
        <ShopBanner />
        <ShopImage />
        <ContactForm />
        <ContactSection />
      </div>
    </div>
  );
}

export default Shop;
