import { useEffect } from "react";
import ContactForm from "../ui/ContactForm";
import ContactHeader from "../ui/ContactHeader";
import ContactSection from "../ui/ContactSection";

import map from "/Frame.png";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-[0.2rem]">
      <div className=" bg-[#F2F2F2]">
        <ContactHeader />
        <ContactForm />
        <img
          className="my-32 h-[70vh]"
          style={{ width: "100%", margin: "auto" }}
          src={map}
          alt=""
        />
        <ContactSection />
      </div>
    </div>
  );
}

export default Contact;
