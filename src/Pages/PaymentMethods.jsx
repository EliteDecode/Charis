import ContactForm from "../ui/ContactForm";
import ContactSection from "../ui/ContactSection";

import CartBanner from "../ui/Shop/CartBanner";
import BillingDetails from "../ui/Shop/BillingDetails";
import BillingSteppers from "../ui/Shop/BillingSteppers";
import Methods from "../ui/Shop/Methods";
import { useEffect } from "react";

function PaymentMethods() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className=" mt-[0.2rem]">
        <CartBanner title="Billing" />
        <BillingSteppers active="payments" />
        <Methods />
        <ContactForm />
        <ContactSection />
      </div>
    </div>
  );
}

export default PaymentMethods;
