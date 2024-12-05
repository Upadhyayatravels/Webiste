import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const VehicleCard = ({ vehicle, darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-dark-800 rounded-xl shadow-md shadow-gray-100 overflow-hidden flex flex-col h-full"
    >
      <div className="relative w-full h-64 overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="h-full"
        >
          {vehicle.image.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center bg-white dark:bg-dark-700"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          {vehicle.name}
        </h3>
        <div className="space-y-3 flex-1">
          <p className="flex items-center text-gray-700 dark:text-gray-300">
            <span className="font-medium w-32">Seats:</span>
            <span>{vehicle.seats}</span>
          </p>
          <p className="flex items-center text-gray-700 dark:text-gray-300">
            <span className="font-medium w-32">Models:</span>
            <span>{vehicle.minRunning}</span>
          </p>
          <p className="flex items-center text-gray-700 dark:text-gray-300">
            <span className="font-medium w-32">Extras:</span>
            <span className="flex-1">{vehicle.extras}</span>
          </p>
          <div className="pt-3">
            <span className="font-medium text-gray-900 dark:text-white block mb-2">
              Features:
            </span>
            <ul className="list-disc list-inside space-y-1 flex flex-wrap">
              {vehicle.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-gray-600 dark:text-gray-400 w-1/2"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex ">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 w-3/5 flex justify-center items-center bg-blue-600 dark:bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-semibold"
          >
            Book Now
          </motion.a>
          <a
            href="https://wa.me/918218128937?text=Hello How can i help you?"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center mt-6 w-2/5   text-white py-3 px-4 rounded-lg  transition-colors font-semibold"
          >
            <img
              src="https://img.icons8.com/color/48/whatsapp--v1.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleCard;
