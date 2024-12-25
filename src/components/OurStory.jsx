import React from "react";
import o1 from "../assets/o1.jpg";
import o2 from "../assets/o2.jpg";
import o3 from "../assets/o3.jpg";
import o5 from "../assets/o5.jpg";
import o6 from "../assets/o6.jpg";
import o7 from "../assets/o7.jpg";
import o8 from "../assets/o8.jpg";
import o9 from "../assets/o9.png";
const OurStory = ({ darkMode }) => {
  return (
    <div
      className={`p-6 md:p-12 ${
        darkMode ? "bg-gray-900 text-white" : "bg-orange-100 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          OUR STORY
        </h2>

        {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Image Section */}
          <div
            className="rounded-lg border-gray-200 shadow-gray-500 border shadow-lg w-full h-[60vh] md:h-[70vh] bg-cover bg-center"
            style={{
              backgroundImage: `url(${o3})`,
            }}
          >
            <div className="h-full w-full aspect-video"></div>
          </div>

          {/* Right Text Section */}
          <div>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl md:text-2xl font-semibold">
                  The UPADHYAYA TOURS AND TRAVELS
                </h3>
                <p className="mt-2 md:text-xl">
                  At the heart of Upadhyaya Tour and Travels lies the inspiring
                  vision of our founder, Dr. Hari Ram Sharma, whose journey
                  began with a dream to transform travel into an experience of
                  luxury, comfort, and reliability. From humble beginnings,
                  fueled by relentless determination and innovative ideas, Dr.
                  Hari Ram Sharma built a trusted name in luxury travel
                  services. Today, with a diverse fleet of luxury buses, mini
                  buses, Tempo Travellers, and premium cars, we continue to
                  expand and redefine the industry, ensuring every journey
                  reflects our founder's passion and commitment to excellence.
                </p>
              </li>

              <li>
                <h3 className="text-xl md:text-2xl font-semibold">
                  Crafting Remarkable Journeys Since 1980
                </h3>
                <p className="mt-2 md:text-xl">
                  Our journey began in 1980, driven by the visionary leadership
                  of our founder, whose unwavering dedication turned a humble
                  idea into a thriving enterprise. With a passion for travel and
                  a relentless spirit, he overcame countless challenges to lay
                  the foundation of our business. Starting with a single
                  vehicle, his commitment to quality and customer satisfaction
                  led to the expansion of a fleet that today includes luxury
                  buses, mini buses, Tempo Travellers, and premium cars. His
                  legacy of innovation, hard work, and excellence continues to
                  inspire us as we redefine travel experiences for generations
                  to come.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 items-center">
          {/* Left Text Section */}
          <div
            className="rounded-lg border-gray-200 shadow-gray-500 border shadow-lg w-full h-[60vh] md:h-[70vh] bg-cover bg-top"
            style={{
              backgroundImage: `url(${o9})`,
            }}
          >
            <div className="h-full w-full aspect-video"></div>
          </div>

          {/* Right Image Section */}
          <div>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl md:text-2xl font-semibold">
                  Mr. Devandra Sharma (Owner)
                </h3>
                <p className="mt-2 md:text-xl">
                  Welcome to Upadhyaya Tour and Travels, Since taking the reins
                  in 1998 where passion for travel meets the vision of endless
                  possibilities. Founded with a dream to redefine journeys, our
                  mission is to deliver exceptional travel experiences while
                  inspiring growth and exploration. Driven by innovation and a
                  commitment to excellence, we aim to expand horizons, build
                  lasting connections, and set new benchmarks in the travel
                  industry. Join us as we turn your travel dreams into
                  remarkable realities, one journey at a time
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* third Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 items-center">
          {/* Left Image Section - Two Images in a Column */}
          <div className="space-y-6">
            <div
              className="rounded-lg border-gray-200 shadow-gray-500 border shadow-lg w-full h-[30vh] md:h-[40vh] bg-cover  bg-[center_top_8%] "
              style={{
                backgroundImage: `url(${o8})`,
                // Adjust the background position here
              }}
            >
              <div className="h-full w-full aspect-video"></div>
            </div>

            <div
              className="rounded-lg border-gray-200 shadow-gray-500 border shadow-lg w-full h-[30vh] md:h-[40vh] bg-cover bg-[center_top_30%]"
              style={{
                backgroundImage: `url(${o5})`,
              }}
            >
              <div className="h-full w-full aspect-video"></div>
            </div>
          </div>

          {/* Right Text Section */}
          <div>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl md:text-2xl font-semibold">
                  Mr . Ayush sharma and Mr kushagra Vashistha
                </h3>
                <p className="mt-2 md:text-xl">
                  Since 2021, Mr. Ayush Sharma and Mr. Kushagra Vashishtha, the
                  dynamic third generation, have joined hands with their father
                  to carry forward the proud legacy of our business. With fresh
                  ideas, youthful energy, and a shared commitment to excellence,
                  they have embraced modern innovation while honoring the values
                  that built our foundation. Together, they have further
                  expanded our fleet of luxury buses, mini buses, Tempo
                  Travellers, and premium cars, enhancing our services to meet
                  the evolving needs of travelers. Their dedication and vision
                  are shaping the future of our enterprise, ensuring it
                  continues to set new standards in the travel industry
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* fourth Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 items-center">
          {/* Left Image Section - Two Images in a Column */}
          <div className="space-y-6">
            <div
              className="rounded-lg border-gray-200 shadow-gray-500 border shadow-lg w-full h-[30vh] md:h-[40vh] bg-cover  bg-[center_top_8%] "
              style={{
                backgroundImage: `url(${o7})`,
                // Adjust the background position here
              }}
            >
              <div className="h-full w-full aspect-video"></div>
            </div>

            <div
              className="rounded-lg border-gray-200 shadow-gray-500 border shadow-lg w-full h-[30vh] md:h-[40vh] bg-cover bg-[center_top_30%]"
              style={{
                backgroundImage: `url(${o2})`,
              }}
            >
              <div className="h-full w-full aspect-video"></div>
            </div>
          </div>

          {/* Right Text Section */}
          <div>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl md:text-2xl font-semibold">
                  Mr. Shyam Lal Sharma, Mr. Tika Ram Sharma, and Mr. Daya Ram
                  Sharma
                </h3>
                <p className="mt-2 md:text-xl">
                  The remarkable success of our tour and travel business is a
                  testament to the unwavering support and vision of Mr. Shyam
                  Lal Sharma, Mr. Tika Ram Sharma, and Mr. Daya Ram Sharma. As
                  pillars of strength, they not only contributed to building
                  this enterprise but also diversified and managed other
                  thriving ventures under the Upadhyaya family banner, including
                  Upadhyaya Book Depot, Upadhyaya Garments, and Upadhyaya
                  Footwear. For over 30 years, their collaborative spirit,
                  dedication, and entrepreneurial acumen have been the
                  cornerstone of our family’s business legacy, ensuring growth
                  and success across all endeavors.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* fifth Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 items-center">
          {/* Left Text Section */}
          <div
            className="rounded-lg border-gray-200 shadow-gray-500 border shadow-lg w-full h-[60vh] md:h-[70vh] bg-cover bg-top"
            style={{
              backgroundImage: `url(${o1})`,
            }}
          >
            <div className="h-full w-full aspect-video"></div>
          </div>

          {/* Right Image Section */}
          <div>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl md:text-2xl font-semibold">
                  Mr. Yogesh kumar sharma
                </h3>
                <p className="mt-2 md:text-xl">
                  Since 1990, our dedicated Manager has been the backbone of our
                  tour and travel business, skillfully managing all aspects of
                  operations with unmatched expertise and commitment. From
                  streamlining daily processes to ensuring seamless customer
                  experiences, their unwavering dedication has played a vital
                  role in our growth and success. Under their stewardship, we
                  have expanded our services, offering luxury buses, mini buses,
                  Tempo Travellers, and premium cars, setting new benchmarks in
                  the industry. Their tireless efforts and leadership continue
                  to inspire our team and drive the legacy of excellence forward
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
