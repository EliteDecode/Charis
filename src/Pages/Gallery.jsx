import GalleryHeader from "../ui/Gallery/GalleryHeader";
import GalleryPictures from "../ui/Gallery/GalleryPictures";
import ContactForm from "../ui/ContactForm";
import ContactSection from "../ui/ContactSection";

function Gallery() {
  return (
    <div className="">
      <div className="">
        <GalleryHeader />
        {/* <GalleryPictures />
         {/* Get in Touch section */}
        <ContactForm />

        {/* Let’s Talk section */}
        <ContactSection />
      </div>
    </div>
  );
}

export default Gallery;
