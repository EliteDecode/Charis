import ContactForm from "../ui/ContactForm";
import ContactSection from "../ui/ContactSection";

import CartBanner from "../ui/Shop/CartBanner";
import BillingDetails from "../ui/Shop/BillingDetails";
import BillingSteppers from "../ui/Shop/BillingSteppers";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Billing() {
  const { items } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (items.length < 1) {
      navigate("/cart");
    }
  }, []);

  return (
    <div className="">
      <div className=" mt-[0.2rem]">
        <CartBanner title="Billing" />
        <BillingSteppers active="details" />
        <BillingDetails />
        <ContactForm />
        <ContactSection />
      </div>
    </div>
  );
}

export default Billing;
