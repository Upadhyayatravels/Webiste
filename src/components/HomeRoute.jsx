import React from "react";
import { useState, useEffect } from "react";
import VehicleCard from "./VehicleCard";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Gallery from "./Gallery";
import { vehicles } from "../data/vehicles.js";
import ImageCarousel from "./ImageCarousel";
import { motion } from "framer-motion";
import WhyChoose from "./WhyChoose";
import ClientSlider from "./Client.jsx";
import Details from "./Deatil";
import Home from "./Home";
import DetailsBar from "./DetailSlide.jsx";
function HomeRoute({ darkMode }) {
  return (
    <div className="overflow-x-hidden scrollbar-hide ">
      {/* Hero Section */}
      <Home></Home>

      {/* Vehicles Section */}
      <section id="fleet" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
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
      <ImageCarousel darkMode={darkMode}></ImageCarousel>
      <Gallery darkMode={darkMode} />

      <ClientSlider darkMode={darkMode}></ClientSlider>
      <DetailsBar darkMode={darkMode}></DetailsBar>
      <Reviews darkMode={darkMode} />
      <WhyChoose darkMode={darkMode}></WhyChoose>
      <Details darkMode={darkMode}></Details>
      <Contact darkMode={darkMode} />
    </div>
  );
}

export default HomeRoute;
