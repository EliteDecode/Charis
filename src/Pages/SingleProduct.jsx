import ContactForm from "../ui/ContactForm";
import ContactSection from "../ui/ContactSection";
import ShopBanner from "../ui/Shop/ShopBanner";
import SingleProductBanner from "../ui/Shop/SingleProductBanner";
import SingleProductDetails from "../ui/Shop/SingleProductDetails";
import ShopHeader from "../ui/ShopHeader";
import ShopImage from "../ui/Shop/ShopImage";
import RelatedProducts from "../ui/Shop/RelatedProducts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductById } from "@/features/products/productSlice";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProductById(productId));
  }, []);
  return (
    <div className="">
      <div className=" mt-[0.2rem]">
        <SingleProductBanner />
        <SingleProductDetails />
        <RelatedProducts />
        <ContactForm />
        <ContactSection />
      </div>
    </div>
  );
}

export default SingleProduct;
