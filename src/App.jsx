import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import VehicleCard from "./components/VehicleCard";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import { vehicles } from "./data/vehicles";
import first from "./assets/first.jpg";
import second from "./assets/2.jpg";
import third from "./assets/3.jpg";
import { motion } from "framer-motion";
import { ImagesSlider } from "./components/ImagesSlider";
import WhyChoose from "./components/WhyChoose";
import AboutUs from "./components/AboutUs";
import Details from "./components/Deatil";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const images = [first, second, third];
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-900 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <ImagesSlider
        images={images}
        overlay={true}
        style={{
          backgroundImage: `url(${third})`,
        }}
        id="home"
        className="pt-22 h-[100vh] bg-blue-100 dark:bg-blue-800 text-gray-100  bg-right  bg-cover bg-no-repeat  "
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
      <AboutUs darkMode={darkMode}></AboutUs>
      <WhyChoose darkMode={darkMode}></WhyChoose>
      <Details darkMode={darkMode}></Details>
      {/* Vehicles Section */}
      <section id="services" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Our Fleet
          </h2>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                darkMode={darkMode}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <Gallery />
      <Reviews darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
}

export default App;
