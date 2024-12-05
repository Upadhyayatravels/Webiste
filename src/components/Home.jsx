import React from "react";
import { ImagesSlider } from "./ImagesSlider";
import first from "../assets/first.jpg";
import second from "../assets/2.jpg";
import third from "../assets/3.jpg";
import { motion } from "framer-motion";
function Home() {
  const images = [first, second, third];
  return (
    <div id="home" className="py-16 bg-white dark:bg-dark-800 ">
      <ImagesSlider
        images={images}
        overlay={true}
        style={{
          backgroundImage: `url(${third})`,
        }}
        id="home"
        className="pt-22 h-[100vh] bg-blue-100 dark:bg-blue-800 text-gray-100  bg-right  bg-cover bg-no-repeat   "
      >
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="max-w-7xl z-50 mx-auto px-6 py-24"
        >
          <motion.div className="text-3xl md:text-6xl font-bold mb-6">
            Travel in Comfort and Style
          </motion.div>
          <motion.p className="text-xl mb-10">
            Experience premium bus and mini bus services for all your travel
            needs
          </motion.p>
          <motion.a
            href="#contact"
            className="bg-gray-300 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Now
          </motion.a>
        </motion.div>
      </ImagesSlider>
    </div>
  );
}

export default Home;
