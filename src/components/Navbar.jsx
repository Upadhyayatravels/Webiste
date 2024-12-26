import { useEffect } from "react";
import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const gotohome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page.
    }, 0);
    if (isOpen) toggleMenu(); // Close the menu if it's open.
  };

  const gotoabout = () => {
    navigate("/aboutus");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page.
    }, 0);
    if (isOpen) toggleMenu(); // Close the menu if it's open.
  };

  const navigateToSection = (sectionId) => {
    navigate("/"); // Ensure you're on the home page first.
    setTimeout(() => {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000); // Small timeout to ensure the DOM is updated after navigation.
    if (isOpen) toggleMenu(); // Close the menu if it's open.
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleContact = () => setShowContact(!showContact);

  return (
    <div className="fixed w-full z-50 bg-white dark:bg-dark-800 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0 flex gap-2 sm:gap-5">
            <img
              className="w-10 sm:w-14 sm:h-14 h-10 rounded-full"
              src={Logo}
              alt="Logo"
            />
            <h1 className="text-sm sm:text-lg font-bold text-blue-600 dark:text-blue-400 flex items-center">
              UPADHYAYA TOURS <br /> AND TRAVELS
            </h1>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={gotohome}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Home
            </button>
            <button
              onClick={gotoabout}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              About Us
            </button>
            <button
              onClick={() => navigateToSection("#fleet")}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Our Fleets
            </button>
            <button
              onClick={() => navigateToSection("#services")}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Services
            </button>
            <button
              onClick={() => navigateToSection("#details")}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Details
            </button>
            <button
              onClick={toggleContact}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact Us
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-700" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark-800"
          >
            <div className="px-6 pt-4 pb-6 space-y-3 text-gray-700 dark:text-gray-200">
              <button onClick={gotohome} className="block text-left py-2">
                Home
              </button>
              <button onClick={gotoabout} className="block text-left py-2">
                About Us
              </button>
              <button
                onClick={() => navigateToSection("#fleet")}
                className="block text-left py-2"
              >
                Our Fleets
              </button>
              <button
                onClick={() => navigateToSection("#services")}
                className="block text-left py-2"
              >
                Services
              </button>
              <button
                onClick={() => navigateToSection("#details")}
                className="block text-left py-2"
              >
                Details
              </button>
              <button onClick={toggleContact} className="block text-left py-2">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 right-4 bg-white dark:bg-dark-800 p-6 rounded-lg shadow-lg z-50 w-80"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Quick Contact
              </h3>
              <button
                onClick={toggleContact}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                <FaTimes />
              </button>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-200">
              <a id="call" href="tel:+918006080021">
                📞 <span className="underline">+918006080021</span>
              </a><br />
              <a id="call" href="tel:+918006080009">📞 <span className="underline">+918006080009</span> </a><br />
              <a id="call" href="tel:+919837311202">📞 <span className="underline">+919837311202</span> </a><br />
              <p>
                <b>Main Branch Address:</b> Infront of Arya Samaj Mandir, Delhi
                Garh Road, Hapur-245101
              </p>
              <p>
                <b>Branch2:</b> D588, Block
                1,D-Block,Govindpuram,Ghaziabad,Uttar Pradesh 201013
              </p>
              <p>
                <b>Branch3:</b> Indra Chawk, Hapur Rd, Jattiwara,Meerut,Uttar
                Pradesh 250002
              </p>

              <p>📧 Aayu7007@gmail.com</p>
              <p>Upadhyayatravels@gmail.com</p>
              <p>🕒 Mon-Sun: 9AM-9PM</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
