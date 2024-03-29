import ContactForm from "../ui/ContactForm";
import ContactSection from "../ui/ContactSection";
import ShopBanner from "../ui/Shop/ShopBanner";
import SingleProductBanner from "../ui/Shop/SingleProductBanner";
import SingleProductDetails from "../ui/Shop/SingleProductDetails";
import ShopHeader from "../ui/ShopHeader";
import ShopImage from "../ui/Shop/ShopImage";
import RelatedProducts from "../ui/Shop/RelatedProducts";
import CartBanner from "../ui/Shop/CartBanner";
import CartDetails from "../ui/Shop/CartDetails";
import { useEffect } from "react";

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className=" mt-[0.2rem]">
        <CartBanner title="Cart" />
        <CartDetails />
        <ContactForm />
        <ContactSection />
      </div>
    </div>
  );
}

export default Cart;
