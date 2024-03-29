import PropTypes from "prop-types"; // Import PropTypes from prop-types package
import { motion } from "framer-motion";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import LogoImg from "/Chariz Interiors 1 (1).png";

function Search({ isOpen, setIsOpen }) {
  function handleClick() {
    setIsOpen(false);
  }

  useEffect(() => {
    // Trigger animation when component mounts
    document.body.style.overflow = isOpen ? "hidden" : "auto"; // Disable scrolling when isOpen is true
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when component unmounts
    };
  }, [isOpen]); // Run effect whenever isOpen changes

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }} // Initial position and opacity
      animate={{ y: isOpen ? 0 : -100, opacity: isOpen ? 1 : 0 }} // Animation when isOpen is true
      transition={{ type: "spring", stiffness: 300 }} // Animation transition
      className={`fixed top-0 left-0 w-full bg-black h-[100px] z-50 ${
        isOpen ? "block" : "hidden"
      }`}>
      <div className="h-[601px] w-full bg-black text-white sm:px-20 px-2 ">
        <div className="flex items-center justify-between">
          <img src={LogoImg} alt="" />
          <IoClose onClick={handleClick} size={50} />
        </div>
        <div className="mt-24 px-5">
          <form className="flex flex-row items-center justify-between ">
            <input
              className=" h-14 bg-black text-[40px]  placeholder:text-[40px] focus:outline-none"
              type="text"
              placeholder="Type your search words"
            />
            <button>
              <CiSearch size={50} />
            </button>
          </form>
          <hr className="mt-3" />
        </div>
      </div>
    </motion.div>
  );
}

Search.propTypes = {
  isOpen: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Search;
