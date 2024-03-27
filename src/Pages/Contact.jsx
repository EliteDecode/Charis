import ContactForm from "../ui/ContactForm";
import ContactHeader from "../ui/ContactHeader";
import ContactSection from "../ui/ContactSection";

import map from "/public/Frame.png";

function Contact() {
  return (
    <div className="flex justify-center">
      <div className="w-[1512px] px-20 h-[1162px] bg-[#F2F2F2] mt-[9.5rem]">
        <ContactHeader />
        <ContactForm />
        <img className="mt-32" src={map} alt="" />
        <ContactSection />
      </div>
    </div>
  );
}

export default Contact;
