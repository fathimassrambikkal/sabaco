import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import service images
import image1 from "../assets/hvac.jpg";
import image2 from "../assets/electrical.avif";
import image3 from "../assets/painter.jpg";
import image4 from "../assets/hand.jpg";
import image5 from "../assets/car.jpg";
import image6 from "../assets/plum.jpg";
import hero from "../assets/man.avif";

gsap.registerPlugin(ScrollTrigger);

function Technical() {
  const cardsRef = useRef([]);

  const services = [
    {
      img: image1,
      title: "HVAC installation and maintenance",
      desc: "AC Services in Dubai. Efficient HVAC installation and maintenance services tailored to your needs. HVAC Contractors in UAE. Trust us for timely service, top-quality equipment, and complete customer satisfaction."
    },
    {
      img: image2,
      title: "Electrical Services",
      desc: "Safe, efficient, and expert electrical solutions for your home or business. We provide a full range of professional electrical services for residential, commercial, and industrial needs. Our team delivers safe, reliable, and efficient electrical solutions."
    },
    {
      img: image3,
      title: "Painting & Gypsum",
      desc: "Transforming walls into works of art, with attention to detail. High-quality painting and gypsum services to enhance the aesthetics and functionality of your interiors."
    },
    {
      img: image4,
      title: "Handyman Services",
      desc: "Maintaining your home can be daunting. Our handyman services provide skilled professionals to handle a wide range of repair and maintenance tasks efficiently."
    },
    {
      img: image5,
      title: "Carpentry Works",
      desc: "Expert carpentry services that transform your vision into reality. From custom furniture to repairs and renovations, our skilled carpenters deliver high-quality craftsmanship."
    },
    {
      img: image6,
      title: "Plumbing Services",
      desc: "Comprehensive plumbing services designed to address all your plumbing needs with expertise and professionalism."
    }
  ];

  // GSAP animation only on md and above
  useEffect(() => {
    if (window.innerWidth >= 768) {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, []);

  return (
    <>
      {/* Header section */}
      <header className="w-full ">
      <div className="text-center justify-center relative top-28 md:relative md:top-32  space-y-5">
    <span className="text-xs sm:text-sm md:text-base lg:text-lg bg-gray-200 px-4 py-2 rounded-2xl text-gray-600">
      Our Services
    </span>
    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-slate-900">
     Our Technical Services
    </h1>
  </div>

        {/* Hero Image */}
        <div className="flex justify-center mt-40 md:mt-40">
          <img
            src={hero}
            alt="Technical Services"
            className="rounded-2xl shadow-lg w-5/6 border-8 object-cover"
          />
        </div>
      </header>

      {/* Services section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left sticky text */}
          <div className="self-start md:sticky md:top-28">
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
              Our Technical Services
            </h2>
            <p className="text-gray-600 text-lg">
              We are a group of passionate experts at Sabaco Technical Services. Our mission is to deliver excellent technical services. With years of expertise in the field, we provide services like carpentry, electrical work, painting contracting, HVAC maintenance, handyman services, and gypsum ceiling works. Our experts use the latest tools to ensure effective and reliable service delivery.
            </p>
          </div>

          {/* Right cards */}
          <div className="flex flex-col gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Technical;
