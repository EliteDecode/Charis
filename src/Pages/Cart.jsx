import ContactForm from "../ui/ContactForm";
import ContactSection from "../ui/ContactSection";
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
