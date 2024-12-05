import { motion } from "framer-motion";
import Logo from "../assets/logo.jpg";
const AboutUs = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
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
              <h2 className="text-4xl font-bold text-center md:text-left mb-4">
                About Us
              </h2>
              <p className="text-xl mb-6">
                We are a passionate team dedicated to providing excellent
                services in the transportation industry. With years of
                experience, we aim to provide our customers with the most
                comfortable, safe, and reliable travel experience possible.
              </p>
              <p className="text-xl">
                Our mission is to offer customized travel solutions that suit
                your needs. Whether you're planning a family trip, a corporate
                outing, or a destination event, we ensure you travel in style
                and comfort.
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 rounded-full"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-s0tmc7lcqi.jpg" // Replace with your image
                alt="About Us"
                className="w-full rounded-3xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
