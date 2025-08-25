import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import service images
import image1 from "../assets/commercial.jpg";
import image2 from "../assets/land7.avif";
import image3 from "../assets/about.avif";
import image4 from "../assets/irrigation2.webp";
import image5 from "../assets/garden2.jpg";
import image6 from "../assets/land6.webp";
import image7 from "../assets/land.avif";

// Import team images
import img1 from "../assets/men1.avif";
import img2 from "../assets/girl.avif";
import img3 from "../assets/girl2.avif";
import img4 from "../assets/girl3.avif";
import img5 from "../assets/men2.avif";
import img6 from "../assets/men3.avif";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const cardsRef = useRef([]);

  // Services data
  const services = [
    {
      img: image1,
      title: "Commercial Landscaping",
      desc: "Commercial landscaping in Dubai provides companies with unique outdoor solutions, both beautifying and functionalizing corporate environments while creating a sustainable environment."
    },
    {
      img: image2,
      title: "Residential Landscaping",
      desc: "It turns the outdoors into stunning, useful spaces customized to meet the individual needs and desires of homeowners."
    },
    {
      img: image3,
      title: "Garden Maintenance",
      desc: "Garden care makes sure that your outside area is healthy, lush, and well-maintained year-round, adding to its attractiveness and lifespan."
    },
    {
      img: image4,
      title: "Irrigation Services",
      desc: "Irrigation services are needed to keep landscapes healthy, with efficient water supply to plants and ensuring even growth in dry weather."
    },
    {
      img: image5,
      title: "Irrigation Systems",
      desc: "Elaborate stonework brings an air of refinement and artistry to the great outdoors, developing beautiful pathways, walls, and features that remain timeless."
    },
    {
      img: image6,
      title: "Villa Landscaping",
      desc: "Villa landscaping decorates the surroundings and peacefulness of residential estates, producing elegant outdoor places that improve the living quality of the villa’s architecture."
    }
  ];

  // GSAP animation only for md and up
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
  <div className="text-center justify-center relative top-32 md:mt-24 space-y-5">
    <span className="text-xs sm:text-sm md:text-base lg:text-lg bg-gray-200 px-4 py-2 rounded-2xl text-gray-600">
      Our Services
    </span>
    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-slate-900">
      Services
    </h1>
  </div>

  {/* Content Section */}
  <div className="py-40 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Right image */}
    <div className="flex justify-center">
      <img
        src={image7}
        alt="About Sabaco"
        className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
      />
    </div>

    {/* Left text */}
    <div className="space-y-6 text-left m-4">
      <h2 className="text-2xl md:text-4xl text-slate-900">
        Landscaping services <br /> in Dubai
      </h2>
      <p className="md:text-xl text-gray-600">
        Sabaco offers outstanding landscaping services in Dubai,
        revolutionizing outdoor spaces with professional designs and expert
        craftsmanship.
        <br /><br />
        Dubai would not have drawn such tourist crowds and thus revenue
        from the tourism sector if it were not for the landscaping sector
        in Dubai. That’s the significance of landscaping firms in Dubai.
        <br /><br />
        These Dubai landscaping companies understand what they are doing;
        they are highly professional and skilled. Life always requires a
        dash of green to it, and so does your house. The landscaping firms
        in Dubai are perfect for soft and hard landscaping. The exciting
        factor is that you will always be able to find the best landscaping
        firm in Dubai, and it will also be within your budget!
      </p>
    </div>
  </div>
</header>


      {/* Services section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left sticky text */}
          <div className="self-start md:sticky md:top-28">
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
              Top Landscaping <br /> Services in Dubai
            </h2>
            <p className="text-gray-600 text-lg">
              Sabaco provides premium landscaping services across Dubai, helping
              clients create breathtaking outdoor spaces with modern, sustainable
              designs. Explore our services and see how we can transform your
              environment.
            </p>
          </div>

          {/* Right animated cards */}
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

      {/* Team section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl text-slate-900 mb-12">
            The Team Behind
          </h1>

          {/* Team grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { img: img1, name: "John Doe", role: "Landscape Architect" },
              { img: img2, name: "Sarah Ali", role: "Garden Designer" },
              { img: img3, name: "Emily Wong", role: "Irrigation Specialist" },
              { img: img4, name: "Ayesha Khan", role: "Project Manager", top: true },
              { img: img5, name: "Michael Smith", role: "Maintenance Lead", top: true },
              { img: img6, name: "David Lee", role: "Outdoor Lighting Expert" },
            ].map((member, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden border-8 border-white shadow-md"
              >
                {/* Image */}
                <img
                  src={member.img}
                  alt={member.name}
                  className={`w-full h-72 object-cover ${member.top ? "object-top" : "object-center"}`}
                />

                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white text-center">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
