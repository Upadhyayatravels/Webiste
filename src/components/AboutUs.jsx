import { motion } from "framer-motion";
import Logo from "../assets/logo.jpg";
import OurStory from "./OurStory";
import firstvideo from "../assets/firstvide.mp4";
const AboutUs = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gray-900 text-white pt-20"
          : "bg-gray-100 text-gray-900 pt-20  "
      }`}
    >
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className=" text-3xl md:text-4xl  bg-orange-200 text-orange-500 w-fit rounded-lg p-2 text-center md:text-left mb-4">
                ABOUT US
              </h2>
              <p
                className={`text-xl mb-6 ${
                  darkMode
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                Welcome to Upadhyaya Tour and Travels, your trusted partner for
                vehicle rentals and hassle-free transportation services. We
                specialize in providing high-quality vehicles, including{" "}
                <span className="font-semibold ">
                  Tempo Traveller, Mini Bus, Large Buses, Innova Crysta, Dzire,
                  WagonR, and Ertiga, ideal for corporate trips, school
                  excursions, college tours, government and private sector
                  travel, and long-term rentals.
                </span>
              </p>
              <p
                className={`text-xl mb-6 ${
                  darkMode
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                Our well-maintained fleet ensures comfort, safety, and
                convenience for individuals, schools, colleges, corporations,
                and government offices. We offer flexible booking options and
                competitive rental rates for both direct customers and
                institutional clients*.
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 rounded-full"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <video
                src={firstvideo}
                autoPlay
                muted
                loop
                controls
                className="w-full shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <OurStory darkMode={darkMode}></OurStory>
    </div>
  );
};

export default AboutUs;
