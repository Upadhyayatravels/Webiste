import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ClientSlider = ({ darkMode }) => {
  const clients = [
    {
      id: 1,
      image:
        "https://images.jdmagicbox.com/comp/hapur/h6/9999px122.x122.100920153923.s9h6/catalogue/delhi-public-school-hapur-ho-hapur-schools-ayj0z79.jpg",
      alt: "Delhi Public School Hapur",
    },
    {
      id: 2,
      image:
        "https://i0.wp.com/www.uttamschool.org/wp-content/uploads/2024/01/306162794_466056465540250_4047720754350197137_n.jpg?resize=860%2C575&ssl=1",
      alt: "Uttam School for Girls",
    },
    {
      id: 3,
      image:
        "https://content.jdmagicbox.com/comp/kolkata/16/033p400016/catalogue/bikash-bhavan-sech-bhawan-kolkata-government-organisations-tlwtk3gogz.jpg",
      alt: "Bikash Bhavan",
    },
    {
      id: 4,
      image:
        "https://www.ryangroup.org/public/images/front_end/cbse_Homepage_images/banner-1_1720519496.webp",
      alt: "Ryan Public School",
    },
    {
      id: 5,
      image:
        "https://www.armssecurities.com/wp-content/uploads/2020/07/MERINO-INDUSTRIES-LTD.jpg",
      alt: "Merino Industries Ltd",
    },
    {
      id: 6,
      image:
        "https://sdn.signalhire.co/storage/company/d2b0/2bcc/2ec4/3a30/868c/6d87/d6bd/2c37.webp",
      alt: "Company Logo",
    },
    {
      id: 7,
      image:
        "https://media.licdn.com/dms/image/v2/C4D0BAQGTp73Wg-IybQ/company-logo_200_200/company-logo_200_200/0/1650859657301?e=2147483647&v=beta&t=G5r7jKmvY4muQVH9B4283SDuNgVSZBtMeQpgJ_EdKy0",
      alt: "Waterside HQ",
    },
    {
      id: 8,
      image:
        "https://igmri.dfpd.gov.in/igmri/sites/default/files/pictures/ludhiyana.jpg",
      alt: "IGMRI Ludhiana",
    },
    {
      id: 9,
      image:
        "https://media.glassdoor.com/lst2x/a3/13/11/aa/waterside-hq.jpg?signature=b10529d50e62e4b18ad2d408b1691b4214e9330a40bcfd1731f421e1049747d7",
      alt: "Headquarters",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = window.innerWidth < 768; // Define responsive breakpoint for mobile screens

  const slidesToShow = isMobile ? 1 : 2; // Display 1 image on mobile, 2 on larger screens
  const totalSlides = Math.ceil(clients.length / slidesToShow);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <div
      className={`relative w-full max-w-4xl mx-auto p-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } rounded-lg shadow-lg`}
    >
      <h2 className="text-center text-2xl font-bold mb-4">OUR CLIENTS</h2>
      <div className="overflow-hidden relative">
        {/* Client Images */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {clients
            .reduce((rows, client, index) => {
              if (index % slidesToShow === 0) rows.push([]);
              rows[rows.length - 1].push(client);
              return rows;
            }, [])
            .map((group, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full grid ${
                  isMobile ? "grid-cols-1" : "grid-cols-2"
                } gap-4`}
              >
                {group.map((client) => (
                  <div
                    key={client.id}
                    className="flex justify-center items-center"
                  >
                    <img
                      src={client.image}
                      alt={client.alt}
                      className="h-40 sm:h-48 md:h-56 lg:h-64 object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className={`absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full shadow-lg ${
          darkMode
            ? "bg-gray-700 hover:bg-gray-600 text-white"
            : "bg-gray-100 hover:bg-gray-200 text-black"
        } transition-transform`}
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full shadow-lg ${
          darkMode
            ? "bg-gray-700 hover:bg-gray-600 text-white"
            : "bg-gray-100 hover:bg-gray-200 text-black"
        } transition-transform`}
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots for Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? darkMode
                  ? "bg-blue-500"
                  : "bg-blue-600"
                : darkMode
                ? "bg-gray-500"
                : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ClientSlider;
