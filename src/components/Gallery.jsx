import { motion } from "framer-motion";

const Gallery = () => {
  const galleryImages = [
    "https://content.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-vyk9s1dlnh.jpg?imwidth=128",
    "https://content.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-oz2zml5jg7.jpg?imwidth=128",
    "https://images.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-4ymtf39qf5.jpg",
    "https://images.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-em603q9hug.jpg",
    "https://content.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-008revplff.jpg?imwidth=128",
    "https://images.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-mox6u7ukby.jpg",
    "https://images.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-zhabxm293c.jpg",
    "https://content.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-mbmjk995j6.jpg?imwidth=128",
  ];

  return (
    <section id="gallery" className="py-16 bg-white dark:bg-dark-800 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Related Pictures
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }} // Animation repeats on re-entry
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
