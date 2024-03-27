import GalleryHeader from "../ui/GalleryHeader";
import GalleryPictures from "../ui/GalleryPictures";
import ContactForm from "../ui/ContactForm";
import ContactSection from "../ui/ContactSection";

function Gallery() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1512px] px-20  mt-[9.5rem]">
        <GalleryHeader />
        <GalleryPictures />
        <ContactForm />
        <ContactSection />
      </div>
    </div>
  );
}

export default Gallery;
