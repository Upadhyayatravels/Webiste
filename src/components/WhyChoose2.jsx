import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const WhyChoose2 = ({ darkMode }) => {
  const features = [
    {
      title: "High-Quality Travellers & Drivers",
      description:
        "We only onboard tempo travellers that pass conclusive quality checks. We also ensure that all our drivers are background verified, have extensive driving experience & are adequately groomed",
      icon: "./src/assets/icons/high-quality.png",
    },
    {
      title: "100% Transparent Pricing",
      description:
        "We have a completely transparent pricing policy, where we disclose all possible costs that you'll have to take into account for your transportation budget.",
      icon: "./src/assets/icons/best-price.png",
    },
    {
      title: "Expert Guidance",
      description:
        "With years of experience in the travel industry, our knowledgeable team is dedicated to providing you with insightful recommendations and seamless travel arrangements. We stay updated on the latest trends.",
      icon: "./src/assets/icons/guide.png", // Replace with an actual icon or image
    },
    {
      title: "Personalized Service",
      description:
        "We take pride in offering personalized service that caters to your individual needs. By understanding your preferences, we create tailor-made experiences that match your style and expectations.",
      icon: "./src/assets/icons/24-hours-service.png", // Replace with an actual icon or image
    },
  ];

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Starting state
    visible: { opacity: 1, y: 0 }, // End state
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
        delay: 0.3,
      }}
      id="why-choose-us"
      className={`py-0 px-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900 "
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-20">
          Why You Should Use UPADHYAYA TOURS AND TRAVELS
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`flex flex-col items-center flex-shrink-0 text-justify rounded-lg transition-shadow ${
                darkMode
                  ? "bg-gray-800 hover:shadow-gray-700"
                  : "bg-gray-100 hover:shadow-gray-300"
              }`}
            >
              <Card
                imageUrl={feature.icon}
                mainHeading={feature.title}
                description={feature.description}
              />
              {/* <div
                className={`text-5xl ${darkMode ? "text-blue-400" : "text-blue-600"
                  } mb-4`}>
                <img src={feature.icon} alt="No image found" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-300">
                {feature.description} */}
              {/* </p> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChoose2;
