import VintageLampImage1 from "/bedroom-interior-2023-11-27-04-57-57-utc 1.png";
import VintageLampImage2 from "/bedroom-interior-2023-11-27-04-57-57-utc 1 (1).png";
import VintageLampImage3 from "/bedroom-interior-2023-11-27-04-57-57-utc 1 (2).png";
import VintageLampImage4 from "/bedroom-interior-2023-11-27-04-57-57-utc 1 (3).png";

import OrderImage from "/public/Pottery 1.png";

export const responsiveCarousel = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const responsiveCarousel2 = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const products = [
  {
    name: "Vintage Lamp",
    image: VintageLampImage1,
    price: 36,
    description:
      "Vintage ceiling lamp in dark brown shade. Comes with adjustable brightness levels.",
  },
  {
    name: "Modern Desk Chair",
    image: VintageLampImage1,
    price: 89,
    description:
      "Ergonomic and stylish desk chair with adjustable height and lumbar support.",
  },
  {
    name: "Smart Home Speaker",
    image: VintageLampImage2,
    price: 120,
    description:
      "Voice-controlled smart speaker with integrated virtual assistant and high-quality sound.",
  },
  {
    name: "Digital Art Tablet",
    image: VintageLampImage3,
    price: 299,
    description:
      "Professional-grade digital drawing tablet with pressure-sensitive stylus for precise artwork.",
  },
  {
    name: "Vintage Watch",
    image: VintageLampImage4,
    price: 149,
    description:
      "Classic vintage watch with leather strap and automatic movement.",
  },
  {
    name: "Portable Bluetooth Speaker",
    image: VintageLampImage2,
    price: 55,
    description:
      "Compact and portable Bluetooth speaker with long battery life and enhanced bass.",
  },
  {
    name: "Wireless Headphones",
    image: VintageLampImage1,
    price: 129,
    description:
      "High-fidelity wireless headphones with active noise cancellation and long-range connectivity.",
  },
  {
    name: "Gaming Mouse",
    image: VintageLampImage4,
    price: 45,
    description:
      "Advanced gaming mouse with customizable RGB lighting and programmable buttons.",
  },
  {
    name: "Fitness Tracker Watch",
    image: VintageLampImage3,
    price: 79,
    description:
      "Smart fitness tracker watch with heart rate monitoring and workout tracking features.",
  },
  {
    name: "Coffee Maker Machine",
    image: VintageLampImage4,
    price: 99,
    description:
      "Automatic coffee maker machine with multiple brewing options and programmable settings.",
  },
  {
    name: "Smartphone Tripod Stand",
    image: VintageLampImage3,
    price: 25,
    description:
      "Adjustable smartphone tripod stand with remote control for hands-free photography and video recording.",
  },
  {
    name: "Wireless Charging Pad",
    image: VintageLampImage1,
    price: 30,
    description:
      "Fast-charging wireless charging pad compatible with Qi-enabled devices.",
  },
  {
    name: "Laptop Backpack",
    image: VintageLampImage2,
    price: 65,
    description:
      "Durable and spacious laptop backpack with multiple compartments for organization and comfort.",
  },
  {
    name: "Smart Home Security Camera",
    image: VintageLampImage2,
    price: 149,
    description:
      "High-definition smart home security camera with motion detection and night vision.",
  },
  {
    name: "Wireless Keyboard and Mouse Combo",
    image: VintageLampImage3,
    price: 55,
    description:
      "Wireless keyboard and mouse combo set with ergonomic design and reliable performance.",
  },
  {
    name: "External Hard Drive",
    image: VintageLampImage1,
    price: 79,
    description:
      "Portable external hard drive with high storage capacity and fast data transfer speeds.",
  },
];

export const orders = [
  {
    name: "Flower Vase",
    image: OrderImage,
    orderNo: 23456789345678,
    status: "Ongoing",
    expectedDate: "12/01/2024",
  },

  {
    name: "Pot Vase",
    image: OrderImage,
    orderNo: 23456789334698,
    status: "Delivered",
    expectedDate: "12/01/2024",
  },

  {
    name: "Flower Vase",
    image: OrderImage,
    orderNo: 23456789345678,
    status: "Ongoing",
    expectedDate: "12/01/2024",
  },

  {
    name: "Pot Vase",
    image: OrderImage,
    orderNo: 23456789334698,
    status: "Delivered",
    expectedDate: "12/01/2024",
  },

  {
    name: "Pot Vase",
    image: OrderImage,
    orderNo: 23456789334698,
    status: "Delivered",
    expectedDate: "12/01/2024",
  },

  {
    name: "Base Vase",
    image: OrderImage,
    orderNo: 23456789334698,
    status: "Canceled",
    expectedDate: "12/01/2024",
  },

  {
    name: "Fit Vase",
    image: OrderImage,
    orderNo: 23456789334698,
    status: "Returned",
    expectedDate: "12/01/2024",
  },
];

export const creditCards = [
  {
    name: "Jamie Lannister",
    cardNumber: 4334720862834901,
  },

  {
    name: "weds srart",
    cardNumber: 2334720862833241,
  },

  {
    name: "weds srart",
    cardNumber: 5334720862838352,
  },
];
