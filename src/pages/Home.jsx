import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.webp";
import aboutImg from "../assets/about.avif";
import { LiaLeafSolid } from "react-icons/lia";
import { SiCssdesignawards } from "react-icons/si";
import {
  MdPeopleOutline,
  MdArrowOutward,
  MdHvac,
  MdElectricalServices,
  MdHandyman,
  MdCarpenter,
  MdOutlinePlumbing,
} from "react-icons/md";
import { AiTwotoneBug } from "react-icons/ai";
import { FaPaintRoller } from "react-icons/fa";
import Carousal from "../components/Carousal";
import Why from "../components/Why";
import Faq from "../components/Faq";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

function Home() {
  const heading = "Sabaco";
  const [animationDone, setAnimationDone] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with scale effect */}
        <motion.div
          className="absolute inset-0 bg-center"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ scale: 0.25, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}
          onAnimationComplete={() => setAnimationDone(true)}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 w-full px-6 md:px-12 text-center md:text-left">
          {/* H1 always visible */}
          <motion.h1
            className="text-white  text-5xl sm:text-8xl md:text-[20rem] leading-none"
            initial="hidden"
            animate={animationDone ? "visible" : "hidden"}
          >
            {heading.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={{
                  hidden: { y: "100%", opacity: 0 },
                  visible: (i) => ({
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: i * 0.12 + 2,
                      duration: 0.8,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheading (only on mobile) */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={animationDone ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 3, duration: 0.8, ease: "easeOut" }}
            className="block md:hidden text-lg sm:text-xl text-gray-200 mt-6"
          >
            Best landscaping company in Dubai
          </motion.h2>

          {/* Button (only on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animationDone ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 3.4, duration: 0.8, ease: "easeOut" }}
            className="block md:hidden mt-6"
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-full 
                       bg-white/10 backdrop-blur-md
                       border border-white/20 
                       text-white font-semibold 
                       shadow-md hover:bg-white/20 hover:scale-105
                       transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section className="min-h-screen flex flex-col md:flex-row px-5 md:px-10">
        <img
          src={aboutImg}
          alt="about"
          className="object-cover w-full md:w-1/2 h-64 md:h-[120vh] rounded-2xl my-6 md:my-10"
        />
        <div className="md:ml-10 text-center md:text-left max-w-xl md:mt-20">
          <span className="text-sm bg-gray-200 px-4 py-2 rounded-2xl text-gray-600">
            About us
          </span>
          <h2 className="text-2xl md:text-3xl mt-2 md:mt-5 text-slate-900">
            Welcome to Sabaco
          </h2>
          <p className="mt-2 md:mt-4 text-gray-500 text-sm md:text-lg leading-relaxed">
            Residential landscaping-wise, we are amongst the best landscaping
            companies in Dubai. Sabaco expert landscape architects will be able
            to provide you with that utility in the way that best fits your
            needs and the conditions of the site. Our landscape architecture and
            design skills provide unparalleled outdoor experiences for public
            and private spaces.
          </p>

          {/* Features */}
          <div className="flex flex-col mt-10 space-y-8">
            {/* Experience */}
            <div className="flex flex-col md:flex-row gap-5 pb-4 border-b border-gray-300 items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3 md:w-1/3 justify-center md:justify-start">
                <LiaLeafSolid className="text-brandGreen text-3xl md:text-4xl" />
                <h2 className="text-slate-800 font-semibold text-lg md:text-xl">
                  Experience
                </h2>
              </div>
              <p className="text-gray-600 md:w-2/3">
                Let our professional landscaping services bring your outdoor
                space to life with lush greenery and vibrant flowers.
              </p>
            </div>

            {/* Design and Installation */}
            <div className="flex flex-col md:flex-row gap-5 pb-4 border-b border-gray-300 items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3 md:w-1/3 justify-center md:justify-start">
                <SiCssdesignawards className="text-brandGreen text-3xl md:text-4xl" />
                <h2 className="text-slate-800 font-semibold text-lg md:text-xl">
                  Design and Installation
                </h2>
              </div>
              <p className="text-gray-600 md:w-2/3">
                Our team of experts will work with you to create a custom
                landscape design and handle all aspects of installation.
              </p>
            </div>

            {/* Maintenance */}
            <div className="flex flex-col md:flex-row gap-5 pb-4 border-b border-gray-300 items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3 md:w-1/3 justify-center md:justify-start">
                <MdPeopleOutline className="text-brandGreen text-3xl md:text-4xl" />
                <h2 className="text-slate-800 font-semibold text-lg md:text-xl">
                  Maintenance and Services
                </h2>
              </div>
              <p className="text-gray-600 md:w-2/3">
                Keep your landscape in pristine condition with our regular
                maintenance and upkeep services, including lawn mowing,
                trimming, and fertilization.
              </p>
            </div>

            {/* Pest Control */}
            <div className="flex flex-col md:flex-row gap-5 pb-4 border-b border-gray-300 items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3 md:w-1/3 justify-center md:justify-start">
                <AiTwotoneBug className="text-brandGreen text-3xl md:text-4xl" />
                <h2 className="text-slate-800 font-semibold text-lg md:text-xl">
                  Pest and Weed Control
                </h2>
              </div>
              <p className="text-gray-600 md:w-2/3">
                Say goodbye to pesky pests and overgrown weeds with our
                effective pest and weed control services, using
                environmentally-friendly methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="w-full">
        <div className="text-center mt-20">
          <h1 className="text-2xl md:text-5xl text-slate-900 mb-2">Services</h1>
          <span className="text-base md:text-lg text-gray-600 font-semibold">
            Our landscaping services in Dubai, UAE
          </span>
        </div>
        <Carousal />
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
          <div className="group relative flex items-center  gap-2 px-5 py-2 border border-brandGreen rounded-2xl w-fit cursor-pointer overflow-hidden">
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
          <div className="grid grid-cols-3 md:grid-cols-2 gap-2 md:gap-4 sm:gap-6">
            {[
              { icon: MdHvac, label: "HVAC " },
              { icon: MdElectricalServices, label: "Electrical" },
              { icon: FaPaintRoller, label: "Painting " },
              { icon: MdHandyman, label: "Handyman " },
              { icon: MdCarpenter, label: "Carpentry " },
              { icon: MdOutlinePlumbing, label: "Plumbing" },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="flex w-32 sm:w-48 md:w-60 h-20 sm:h-24 md:h-28 bg-gray-200 items-center justify-center rounded-2xl gap-1 sm:gap-3"
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

      <Why />
      <Faq />
      <Gallery />
      <ContactForm />
    </>
  );
}

export default Home;
