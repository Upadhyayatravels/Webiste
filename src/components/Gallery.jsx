import { motion } from "framer-motion";

const Gallery = () => {
  const galleryImages = [
    "https://bhawnatourandtravels.com/taxi-booking/images/gallery1.jpg",
    "https://bhawnatourandtravels.com/taxi-booking/images/gallery2.jpg",
    "https://bhawnatourandtravels.com/taxi-booking/images/gallery7.jpg",
    "https://bhawnatourandtravels.com/taxi-booking/images/gallery5.jpg",
    "https://bhawnatourandtravels.com/taxi-booking/images/gallery-3.jpg",
    "https://bhawnatourandtravels.com/taxi-booking/images/gallery4.jpg",
    "https://bhawnatourandtravels.com/taxi-booking/images/gallery6.jpg",
    "https://bhawnatourandtravels.com/taxi-booking/images/gallery8.jpg",
  ];

  return (
    <section id="gallery" className="py-16 bg-white dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Related Pictures
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative aspect-square rounded-lg overflow-hidden shadow-lg group"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
