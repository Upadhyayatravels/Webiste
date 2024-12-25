import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpeg";
import g3 from "../assets/g3.jpeg";
import g4 from "../assets/g4.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";
import g8 from "../assets/g8.jpeg";

const imageList = [
  "https://content.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-vyk9s1dlnh.jpg?imwidth=128",
  "https://content.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-oz2zml5jg7.jpg?imwidth=128",
  "https://images.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-4ymtf39qf5.jpg",
  "https://images.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-em603q9hug.jpg",
  "https://content.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-008revplff.jpg?imwidth=128",
  "https://images.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-mox6u7ukby.jpg",
  "https://images.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-zhabxm293c.jpg",
  "https://content.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-mbmjk995j6.jpg?imwidth=128",
  g1, g2, g3, g4, g6, g7, g8,
];

const Gallery = ({ darkMode }) => {
  const swiperRef = useRef(null); // Create a reference to the Swiper instance

  // Set up a timer to move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext(); // Move to the next slide
      }
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section
      id="services"
      className={`py-20 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Related Images</h2>
        <Swiper
          ref={swiperRef} // Attach the reference to the Swiper component
          spaceBetween={30}
          slidesPerView={1}
          loop={true} // Enable infinite loop
          autoplay={{ delay: 5000 }} // Auto swipe every 5 seconds
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          navigation={true} // Enable navigation
          modules={[Navigation]} // Include the Navigation module
          className="py-8 relative"
        >
          {imageList.map((imageSrc, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className={`p-6 rounded-lg shadow-md ${
                  darkMode ? "bg-gray-800 shadow-gray-700" : "bg-white shadow-gray-500"
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
                    className="w-full h-[70vh] object-cover"
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

export default Gallery;
