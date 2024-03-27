import ContactForm from "../ui/ContactForm";
import ContactSection from "../ui/ContactSection";
import ShopHeader from "../ui/ShopHeader";
import ShopImage from "../ui/ShopImage";

function Shop() {
  return (
    <div className="flex justify-center">
      <div className="w-[1512px] px-20 mt-[9.5rem]">
        <ShopHeader />
        <ShopImage />
        <ContactForm />
        <ContactSection />
      </div>
    </div>
  );
}

export default Shop;
