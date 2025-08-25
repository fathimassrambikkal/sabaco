import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/logo.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Technical Services", path: "/technical" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setScrolled(true); // Always scrolled style on non-home pages
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-md text-slate-900"
            : "bg-transparent text-white"
        }`}
      >
        <div className="h-20 flex justify-between items-center px-4 lg:px-12">
          {/* Logo */}
          <div>
            <img src={logoImg} alt="logo" className="lg:h-16 h-12 w-auto" />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex lg:space-x-16 font-semibold text-base items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.name === "Contact" ? (
                  <Link
                    to={item.path}
                    className={`relative px-6 py-2 rounded-lg flex items-center gap-2 overflow-hidden border group ${
                      scrolled ? "border-brandGreen" : "border-white"
                    }`}
                  >
                    <span
                      className={`absolute right-5 w-6 h-6 rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full group-hover:rounded-lg group-hover:right-0 ${
                        scrolled ? "bg-brandGreen" : "bg-white"
                      }`}
                    ></span>
                    <span
                      className={`relative z-10 transition-colors duration-500 group-hover:text-white ${
                        scrolled
                          ? "text-slate-900 group-hover:text-white"
                          : "text-white group-hover:text-green-900"
                      }`}
                    >
                      Contact
                    </span>
                    <MdArrowOutward
                      className={`relative z-10 text-lg transition-transform duration-500 group-hover:rotate-45 ${
                        scrolled ? "text-white" : "text-green-600"
                      }`}
                    />
                  </Link>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative cursor-pointer transition duration-300 
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 
                      after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full
                      ${
                        scrolled
                          ? "text-slate-900 hover:text-brandGreen after:bg-brandGreen"
                          : "text-white hover:text-white after:bg-white"
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden ${scrolled ? "text-slate-900" : "text-white"}`}
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-brandGreen flex flex-col items-center justify-center space-y-8 text-2xl font-semibold text-white z-50 transition-all duration-500">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>

          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="hover:scale-110 transition-transform duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
