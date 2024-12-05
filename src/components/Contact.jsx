import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = ({ darkMode }) => {
  const form = useRef();

  const submitform = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0213o4b", "template_3indd0b", form.current, {
        publicKey: "jsHyjFRD_hG7eNN2X",
      })
      .then(
        () => {
          // Clear form fields
          Array.from(form.current.elements).forEach((field) => {
            if (field.type !== "submit") field.value = "";
          });
          alert("Message Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Sorry, message didn't send. Try again later.");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className={`py-12 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Left Form Section */}
          <motion.div
            className={`${
              darkMode ? "bg-gray-700" : "bg-white"
            } p-6 rounded-lg shadow-md col-span-3`}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <form ref={form} className="space-y-4" onSubmit={submitform}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Your Name</label>
                  <input
                    name="name"
                    type="text"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                      darkMode
                        ? "bg-gray-600 border-gray-500 text-gray-100"
                        : "bg-gray-100 border-gray-300 text-gray-800"
                    }`}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block mb-2">Your Email</label>
                  <input
                    name="email"
                    type="email"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                      darkMode
                        ? "bg-gray-600 border-gray-500 text-gray-100"
                        : "bg-gray-100 border-gray-300 text-gray-800"
                    }`}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Phone</label>
                  <input
                    name="phone"
                    type="text"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                      darkMode
                        ? "bg-gray-600 border-gray-500 text-gray-100"
                        : "bg-gray-100 border-gray-300 text-gray-800"
                    }`}
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label className="block mb-2">Pick-Up From?</label>
                  <input
                    name="pickup"
                    type="text"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                      darkMode
                        ? "bg-gray-600 border-gray-500 text-gray-100"
                        : "bg-gray-100 border-gray-300 text-gray-800"
                    }`}
                    placeholder="Enter pick-up location"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Where You Want to Go?</label>
                  <input
                    name="destination"
                    type="text"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                      darkMode
                        ? "bg-gray-600 border-gray-500 text-gray-100"
                        : "bg-gray-100 border-gray-300 text-gray-800"
                    }`}
                    placeholder="Enter destination"
                  />
                </div>
                <div>
                  <label className="block mb-2">Total Person</label>
                  <input
                    name="total_person"
                    type="number"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                      darkMode
                        ? "bg-gray-600 border-gray-500 text-gray-100"
                        : "bg-gray-100 border-gray-300 text-gray-800"
                    }`}
                    placeholder="Enter total persons"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2">Start Date & Time</label>
                <input
                  name="start_date_time"
                  type="datetime-local"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                    darkMode
                      ? "bg-gray-600 border-gray-500 text-gray-100"
                      : "bg-gray-100 border-gray-300 text-gray-800"
                  }`}
                />
              </div>
              <div>
                <label className="block mb-2">Your Message</label>
                <textarea
                  name="message"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                    darkMode
                      ? "bg-gray-600 border-gray-500 text-gray-100"
                      : "bg-gray-100 border-gray-300 text-gray-800"
                  }`}
                  rows="4"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className={`w-full py-2 px-4 rounded-lg ${
                  darkMode
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right Contact Information Section */}
          <motion.div
            className={`${
              darkMode ? "bg-gray-700" : "bg-white"
            } p-6 rounded-lg shadow-md md:col-span-1    `}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p>
                  <span className="font-medium">Address:</span>
                  <br />
                  Hapur Uttar Pradesh
                </p>
                <p>
                  <span className="font-medium">Phone:</span>
                  <br />
                  +918006080021 / +918006080009
                </p>
                <p>
                  <span className="font-medium">Email:</span>
                  <br />
                  random@gmail.com
                </p>
                <p>
                  <span className="font-medium">Working Hours:</span>
                  <br />
                  Monday - Saturday: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
