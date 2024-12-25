import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import hero1 from "../assets/traveler1.jpg";
import hero2 from "../assets/traveler2.jpg";
import hero3 from "../assets/traveler3.jpg";
import hero4 from "../assets/traveler4.jpg";
import hero5 from "../assets/traveler5.jpg";
import hero6 from "../assets/traveler6.jpg";
import hero7 from "../assets/traveler7.jpg";
import hero8 from "../assets/traveler8.jpg";
import hero9 from "../assets/traveler9.jpg";
import hero10 from "../assets/traveler10.jpg";
import hero11 from "../assets/traveler11.jpg";
import hero12 from "../assets/traveler12.jpg";
import hero13 from "../assets/traveler13.jpg";
import hero14 from "../assets/traveler14.jpg";
import hero15 from "../assets/traveler15.jpg";
import hero16 from "../assets/traveler16.jpg";
import hero17 from "../assets/traveler17.jpg";
import hero18 from "../assets/traveler18.jpg";
import hero19 from "../assets/traveler19.jpg";
import hero20 from "../assets/traveler20.jpg";
import hero21 from "../assets/traveler21.jpg";
import hero22 from "../assets/ttraveler22.jpg";

// Image list
const imageList = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8,
  hero9,
  hero10,
  hero11,
  hero12,
  hero13,
  hero14,
  hero15,
  hero16,
  hero17,
  hero18,
  hero19,
  hero20,
  hero21,
  hero22,
];

const ImageCarousel = ({ darkMode }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext(); // Trigger Swiper's next slide
      }
    }, 5000); // 3 seconds interval

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <section
      id="services"
      className={`py-12 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true} // Enable infinite loop
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          navigation={true} // Enable navigation
          modules={[Navigation]} // Include the Navigation module
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance in ref
          className="py-8 relative"
        >
          {imageList.map((imageSrc, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className={`p-6 rounded-lg shadow-md ${
                  darkMode
                    ? "bg-gray-800 shadow-gray-700"
                    : "bg-white shadow-gray-500"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={imageSrc}
                    alt={`Image ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImageCarousel;
