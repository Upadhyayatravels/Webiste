import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import VehicleCard from "./components/VehicleCard";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import { vehicles } from "./data/vehicles";

import { motion } from "framer-motion";
import { ImagesSlider } from "./components/ImagesSlider";
import WhyChoose from "./components/WhyChoose";
import AboutUs from "./components/AboutUs";
import Details from "./components/Deatil";
import Home from "./components/Home";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-900 transition-colors duration-300 overflow-x-hidden sm:overflow-x-visible  ">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <Home></Home>

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
