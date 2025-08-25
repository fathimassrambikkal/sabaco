import React from "react";
import { Link } from "react-router-dom"; // or "next/link"
import {
  MdArrowOutward,
  MdHvac,
  MdElectricalServices,
  MdHandyman,
  MdCarpenter,
  MdOutlinePlumbing,
} from "react-icons/md";
import { FaPaintRoller } from "react-icons/fa";
import image1 from "../assets/commercial.jpg";
import Land1 from "../assets/Land1.webp";
import Why from "../components/Why";

function About() {
  return (
    <>
      {/* Header Section */}
      <header className="w-full ">
        <div className="text-center justify-center relative top-32 md:mt-24 space-y-5">
          <span className="text-xs sm:text-sm md:text-base lg:text-lg bg-gray-200 px-4 py-2 rounded-2xl text-gray-600">
            Our story so far
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-slate-900">
            Our story so far
          </h1>
          <p className="text-xl text-gray-500">Landscaping company in Dubai</p>
        </div>
      </header>

      {/* About Sabaco Section */}
      <section className="py-40 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-left m-4">
          <h2 className="text-2xl md:text-4xl text-slate-900">About Sabaco</h2>
          <p className="md:text-xl text-gray-600">
            At Sabaco, we love to turn the outdoors into spectacular landscapes
            that bring out the beauty and functionality of any property. As one
            of Dubai’s top landscaping firms, we design, build, and maintain
            opulent gardens, green areas, and outdoor living spaces that are
            adapted to the special climate and taste of the UAE.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={image1}
            alt="About Sabaco"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-40 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={image1}
            alt="Our Mission"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>

        <div className="space-y-6 text-left m-4">
          <h2 className="text-2xl md:text-4xl text-slate-900">Our Mission</h2>
          <p className="md:text-xl text-gray-600">
            We are looking to improve our landscape through innovative ideas
            that are visually appealing, responsive, and adaptable to the
            climate of Dubai. We will invest in the latest technology,
            precision, and excellence in every project we take on.
          </p>
        </div>
      </section>

      {/* Technical Services Section */}
      <section className="w-full flex flex-col md:flex-row items-start md:items-center gap-10 px-4 mt-40">
        {/* Left Text */}
        <div className="space-y-5 m-4 max-w-xl">
          <span className="inline-block text-slate-900 bg-gray-300 px-3 py-1 rounded text-sm sm:text-base md:text-lg">
            Our Technical Services
          </span>

          <p className="text-left text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-semibold">
            We are a group of passionate experts at Sabaco Technical Services,
            and our mission is to deliver excellent technical services. With
            years of expertise in the field, we are experts in a wide range of
            services, such as carpentry, electrical work, painting contracting,
            HVAC contractors and maintenance, handyman services, and gypsum
            ceiling works. To guarantee effective and dependable service
            delivery, our knowledgeable experts are outfitted with the newest
            instruments and technologies. HVAC Contractors Dubai We take great
            pleasure in focusing on the little things and are dedicated to
            client happiness.
          </p>

          {/* Hover Button */}
          <div className="group relative flex items-center gap-2 px-5 py-2 border border-brandGreen rounded-2xl w-fit cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-brandGreen scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-2xl"></div>
            <Link
              to="/services"
              className="relative z-10 text-sm sm:text-base md:text-lg font-medium text-brandGreen group-hover:text-white transition-colors duration-500"
            >
              Explore services
            </Link>
            <MdArrowOutward className="relative z-10 text-brandGreen group-hover:text-white text-lg transition-all duration-500 group-hover:rotate-45" />
          </div>
        </div>

        {/* Service Grid */}
        <div className="flex justify-center md:justify-start w-full">
          <div className="grid grid-cols-3 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              { icon: MdHvac, label: "HVAC " },
              { icon: MdElectricalServices, label: "Electrical" },
              { icon: FaPaintRoller, label: "Painting " },
              { icon: MdHandyman, label: "Handyman " },
              { icon: MdCarpenter, label: "Carpentry" },
              { icon: MdOutlinePlumbing, label: "Plumbing" },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="flex w-32 sm:w-48 md:w-60 h-20 sm:h-24 md:h-28 bg-gray-200 items-center justify-center rounded-2xl gap-2 sm:gap-3"
                >
                  <Icon className="text-xl sm:text-2xl md:text-3xl text-white bg-brandGreen p-2 rounded-full flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base font-medium">
                    {service.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Component */}
      <Why />

      {/* Get In Touch Section */}
      <section
        className="text-center py-20 text-white"
        style={{
          backgroundImage: `url(${Land1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50 p-10 rounded-2xl max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="mt-4 text-lg">
            Call us today to revolutionize your outdoor area with the services
            of one of Dubai’s top landscaping firms.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-brandGreen px-6 py-3 rounded-xl text-white font-semibold hover:bg-green-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;
