import ContactForm from "../ui/ContactForm";
import ContactHeader from "../ui/ContactHeader";
import ContactSection from "../ui/ContactSection";

import map from "/public/Frame.png";

function Contact() {
  return (
    <div className="mt-[9.5rem]">
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
