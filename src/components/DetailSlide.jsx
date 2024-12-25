import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCounter = ({ endValue, duration, inView }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (inView) {
      let startValue = 0;
      const increment = endValue / (duration / 10); // Increment value based on duration

      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
          startValue = endValue;
          clearInterval(timer);
        }
        setValue(Math.round(startValue));
      }, 10);

      return () => clearInterval(timer);
    }
  }, [inView, endValue, duration]);

  return <span>{value}</span>;
};

const DetailsBar = ({ darkMode }) => {
  const details = [
    { id: 1, label: "Happy Customers", value: 100, suffix: "%" },
    { id: 2, label: "Happy Rides", value: 20000, suffix: "+" },
    { id: 3, label: "Kilometres Driven", value: 1000000, suffix: "+" },
    { id: 4, label: "Our Fleet", value: 100, suffix: "+" },
    { id: 5, label: "Our Employees", value: 250, suffix: "+" },
  ];

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {details.map((detail) => (
        <InViewCard
          key={detail.id}
          label={detail.label}
          value={detail.value}
          suffix={detail.suffix}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
};

const InViewCard = ({ label, value, suffix, darkMode }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-lg ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold">
        <AnimatedCounter endValue={value} duration={1000} inView={inView} />
        {suffix}
      </h2>
      <p className="text-lg mt-2">{label}</p>
    </motion.div>
  );
};

export default DetailsBar;
