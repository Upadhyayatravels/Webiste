import React from "react";
import { motion } from "framer-motion";

const Details = ({ darkMode }) => {
  const features = [
    {
      title: "Complete Air Conditioning",
      description:
        "Enjoy a fully air-conditioned experience, including additional fans for optimal comfort, no matter the weather.",
    },
    {
      title: "Elegant Profile Lighting",
      description:
        "Immerse yourself in sophistication with profile lighting and premium side paneling that redefine travel aesthetics.",
    },
    {
      title: "Personal Charging Ports",
      description:
        "Stay powered on the go with individual charging slots available at every seat for uninterrupted connectivity.",
    },
    {
      title: "Push-Back Seating with Sofa-Cum-Bed",
      description:
        "Relax in luxury with ergonomically designed push-back seats featuring headrests that transform into sofa-cum-beds for ultimate comfort.",
    },
    {
      title: "Roller Curtains for Privacy",
      description:
        "Ensure a private and cozy journey with roller curtains provided for every seat.",
    },
    {
      title: "19-inch LED Display",
      description:
        "Stay entertained throughout your journey with 19-inch LED screens for high-quality visual enjoyment.",
    },
    {
      title: "Touchscreen Android Stereo",
      description:
        "Experience state-of-the-art entertainment with a fully touchscreen Android stereo system, providing seamless control and connectivity.",
    },
    {
      title: "Spacious Luggage Storage",
      description:
        "Enjoy an expansive dickey with a 3-fold sofa-cum-bed, offering generous storage for all your travel needs.",
    },
    {
      title: "Carrier for Extra Storage",
      description:
        "Additional carrier facilities are available for those extra bags and belongings.",
    },
    {
      title: "Secure Locker Facility",
      description:
        "Keep your valuables safe with dedicated lockers for wallets and other precious items.",
    },
  ];

  return (
    <section
      id="details"
      className={`py-12 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900 "
      } mt-28`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Fully Modified AC Traveller: Experience Luxury and Comfort Like Never
          Before
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-200"
              } transition-colors`}
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Details;
