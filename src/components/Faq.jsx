import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer landscaping, garden design, maintenance, irrigation solutions, and more.",
    },
    {
      question: "How long have you been in business?",
      answer: "We have been providing landscaping services for over 10 years.",
    },
    {
      question: "Do you provide landscaping for residential areas?",
      answer: "Yes, we specialize in residential landscaping tailored to your preferences.",
    },
    {
      question: "Can you handle commercial projects?",
      answer: "Absolutely, we have experience with commercial landscaping projects of all sizes.",
    },
    {
      question: "Do you offer maintenance services?",
      answer: "Yes, we provide regular garden and landscape maintenance services.",
    },
    {
      question: "What is your pricing model?",
      answer: "Our pricing is customized based on the size, complexity, and services required.",
    },
    {
      question: "Do you use sustainable materials?",
      answer: "Yes, we focus on sustainable and eco-friendly materials for all our projects.",
    },
    {
      question: "How do I get a quote for my project?",
      answer: "You can contact us via our website or phone, and we will provide a detailed quote.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const rightRef = useRef(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Only add scroll animation for large screens
    if (window.innerWidth >= 768) {
      gsap.fromTo(
        rightRef.current,
        { y: 100 },
        {
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 90%",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className="w-full px-6 py-20 bg-gray-50 flex flex-col md:flex-row gap-10">
      {/* Left static section */}
      <div className="md:w-1/3 flex flex-col sticky md:top-20 h-max md:h-[80vh] mb-10 md:mb-0 space-y-5 rounded-2xl">
       <span className="text-sm bg-gray-200 px-4 py-2 rounded-2xl w-20 text-gray-600 justify-center">
          FAQ
          </span>
        <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold mb-4">
          Your Landscaping Queries <br /> Answered!
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Discover more about our services and policies with our Frequently Asked Questions section.
        </p>
      </div>

      {/* Right section */}
      <div
        ref={rightRef}
        className="md:w-2/3 flex flex-col gap-4"
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 md:p-6 cursor-pointer border border-gray-300"
          >
            <div
              className="flex justify-between items-center transition-all duration-300 group"
              onClick={() => handleToggle(index)}
            >
              <p className="text-gray-800 font-medium group-hover:text-brandGreen group-hover:translate-x-2 transition-all duration-300">
                {faq.question}
              </p>
              {openIndex === index ? (
                <FaMinus className="text-gray-500" />
              ) : (
                <FaPlus className="text-gray-500" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-gray-600 text-sm md:text-base mt-2">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
