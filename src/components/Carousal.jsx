"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import garden1 from "../assets/irrigation.jpg";
import garden2 from "../assets/garden1.jpg";
import garden3 from "../assets/villa.jpg";
import garden4 from "../assets/garden2.jpg";
import garden5 from "../assets/commercial.jpg";
import garden6 from "../assets/residential.jpg";

export default function Carousal() {
  const slides = [
    {
      category: "Irrigation Services",
      title:
        "We provide you with the best Sprinkler and drip irrigation system in Dubai.",
      src: garden1,
    },
    {
      category: "Garden Maintenance",
      title:
        "At Sabaco, we provide complete garden maintenance services in Dubai.",
      src: garden2,
    },
    {
      category: "Villa Landscaping",
      title:
        "We provide you with the best villa landscape design & construction.",
      src: garden3,
    },
    {
      category: "Garden Landscaping",
      title:
        "We are a garden landscaping and home gardening service provider.",
      src: garden4,
    },
    {
      category: "Commercial Landscaping",
      title:
        "Sabaco gives the perfect makeover to your commercial landscapes in Dubai.",
      src: garden5,
    },
    {
      category: "Residential Landscaping",
      title: "Gorgeous landscapes for your home are no longer a fantasy.",
      src: garden6,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const prev = () =>
    setStartIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setStartIndex((prev) => (prev + 1) % slides.length);

  const visibleSlides = [
    slides[startIndex % slides.length],
    slides[(startIndex + 1) % slides.length],
    slides[(startIndex + 2) % slides.length],
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-10">
      {/* ✅ Large screens: button carousel */}
      <div className="hidden sm:block overflow-hidden h-[60vh] md:h-[70vh] lg:h-[90vh]">
        <motion.div
          className="flex gap-6 h-full"
          key={startIndex}
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          {visibleSlides.map((slide, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-1/3 h-full rounded-2xl shadow-lg overflow-hidden 
                        transition-transform duration-300 hover:scale-105"
            >
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 md:p-6">
                <p className="text-xs md:text-base text-brandGreen uppercase font-semibold">
                  {slide.category}
                </p>
                <h3 className="text-sm md:text-2xl font-bold text-white leading-snug">
                  {slide.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Buttons for large screens */}
      <div className="hidden sm:flex justify-end gap-4 mt-6">
        <button
          onClick={prev}
          className="bg-white/90 p-2 md:p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-transform"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
        </button>

        <button
          onClick={next}
          className="bg-white/90 p-2 md:p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-transform"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
        </button>
      </div>

      {/* ✅ Small screens: infinite marquee slider */}
      <div className="block sm:hidden overflow-hidden h-[35vh] mt-6">
        <motion.div
          className="flex h-full"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25, // adjust speed
          }}
        >
          {[...slides, ...slides].map((slide, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[65%] mr-4 rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-3">
                <p className="text-[10px] text-brandGreen uppercase font-semibold">
                  {slide.category}
                </p>
                <h3 className="text-xs font-bold text-white">{slide.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
