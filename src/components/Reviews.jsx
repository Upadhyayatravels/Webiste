import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const Reviews = ({ darkMode }) => {
  const reviews = [
    {
      name: "Janvi Sharma",
      rating: 4.5,
      comment:
        "The experience was good to my latest trip with my family....The condition of vehicle was good and the driver was super supportive.... the entire trip was pocket-friendly as well.....Will surely happy to take the services again here",
    },
    {
      name: "Aakash",
      rating: 5,
      comment:
        "The cost of car services was reasonable and offered outstanding value. They provided a variety of packages designed for various group sizes and trip lengths, giving flexibility in selecting the best option.",
    },
    {
      name: "Priya Rajput",
      rating: 5,
      comment:
        "I recently had the pleasure of using Tempo Traveller’s services in Delhi, and I must say that the entire experience was excellent. I value convenience, dependability, and excellent service as a regular traveller.",
    },
    // Add more reviews as needed
  ];

  return (
    <section
      className={`py-12 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900 "
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          className="py-8"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className={`p-6 rounded-lg shadow-md ${
                  darkMode
                    ? "bg-gray-800 shadow-gray-700 text-gray-200"
                    : "bg-white shadow-gray-500 text-gray-600"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(Math.round(review.rating))].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p>{review.comment}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
