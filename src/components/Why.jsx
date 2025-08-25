import React from "react";

import { SiEnterprisedb } from "react-icons/si";
import { HiPaintBrush } from "react-icons/hi2";
import { RiFlowerFill } from "react-icons/ri";
import { SiVorondesign } from "react-icons/si";

const Why = () => {
  const data = [
    {
      icon: <SiEnterprisedb className="text-3xl text-brandGreen" />,
      title: "Expertise & Experience",
      desc: "A reliable landscaping company should have experts in the field who have ample experience.",
    },
    {
      icon: <HiPaintBrush className="text-3xl text-brandGreen" />,
      title: "Creative Design",
      desc: "We provide innovative designs that transform outdoor spaces into beautiful landscapes.",
    },
    {
      icon: <RiFlowerFill className="text-3xl text-brandGreen" />,
      title: "Quality Materials",
      desc: "Only high-quality materials are used to ensure durability and elegance.",
    },
    {
      icon: <SiVorondesign className="text-3xl text-brandGreen" />,
      title: "Customer Satisfaction",
      desc: "We focus on details and strive to exceed client expectations every time.",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center px-4 py-20 bg-gray-50">
      <h1 className="text-2xl md:text-5xl text-slate-900 text-center mb-12 text-center">
        Why Choose
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">{item.icon}</div>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;
